package main

import (
	"database/sql"
	"fmt"
	"io/ioutil"
	"os"

	"db/wadle/models"

	"github.com/gofiber/fiber/v2"
	_ "github.com/lib/pq"
)

var DATABASE *sql.DB

func DBConnect() {
	DB_NAME := os.Getenv("DB_NAME")
	DB_PASS := os.Getenv("DB_PASS")
	DB_USER := os.Getenv("DB_USER")
	DB_HOST := os.Getenv("DB_HOST")
	DB_PORT := os.Getenv("DB_PORT")

	dbinfo := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=require", DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME)
	db, err := sql.Open("postgres", dbinfo)

	if err != nil {
		fmt.Println("Failed to connect to database.")
		panic(err)
	}

	DATABASE = db
}

func ExecuteSQLFile(filePath string) {
	fileContent, err := ioutil.ReadFile(filePath)

	if err != nil {
		panic(err)
	}

	if _, err := DATABASE.Exec(string(fileContent)); err != nil {
		panic(err)
	}
}

func GetUser(c *fiber.Ctx) error {
	result := DATABASE.QueryRow("SELECT * FROM Users WHERE User_id='" + c.Params("user_id") + "';")

	var user models.User
	err := result.Scan(&user.Email, &user.Name, &user.Pin, &user.User_id)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Querying Failed"}) //Returning failure
	}

	return c.Status(200).JSON(fiber.Map{"status": "success", "data": user})
}

func GetUserByEmail(c *fiber.Ctx) error {
	result := DATABASE.QueryRow("SELECT * FROM Users WHERE Email='" + c.Params("email") + "';")

	var user models.User
	err := result.Scan(&user.Email, &user.Name, &user.Pin, &user.User_id)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Querying Failed"}) //Returning failure
	}

	return c.Status(200).JSON(fiber.Map{"status": "success", "data": user})
}

func CreateUser(c *fiber.Ctx) error {
	//Load Model
	user := new(models.User)
	err := c.BodyParser(user)

	//Handling Errors
	if err != nil {
		c.Status(400).JSON(fiber.Map{"error": "failed to process inputs", "data": err})
		return nil
	}
	//Add to Database
	row := DATABASE.QueryRow(
		"INSERT INTO Users VALUES($1, $2, $3, DEFAULT, $4) RETURNING User_id;",
		user.Email, user.Name, user.Pin, user.Hashed_Password)

	//SQL Error Check
	if row.Err() != nil {
		fmt.Println(row.Err())
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Creating User failed"}) //Returning failure
	}

	//Success
	return c.Status(200).JSON(fiber.Map{"status": "success", "type": "Creating User", "uid": row}) //Returning success
}


func CreateSupport(c *fiber.Ctx) error {
	//Load Model
	s := new(models.Support)
	err := c.BodyParser(s)

	//Handling Errors
	if err != nil {
		c.Status(400).JSON(fiber.Map{"error": "failed to process inputs", "data": err})
		return nil
	}
	//Add to Database
	row := DATABASE.QueryRow(
		"INSERT INTO Supports VALUES(DEFAULT, $1, $2, $3) RETURNING Support_id;",
		s.Supportee_id, s.Supporter_id, s.Sharing_level)

	//SQL Error Check
	if row.Err() != nil {
		fmt.Println(row.Err())
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Creating Support failed"}) //Returning failure
	}

	//Success
	return c.Status(200).JSON(fiber.Map{"status": "success", "type": "Creating Support", "sid": row}) //Returning success
}

func GetSupport(c *fiber.Ctx) error {
	result := DATABASE.QueryRow("SELECT * FROM Support WHERE Support_id='" + c.Params("Support_id") + "';")

	var s models.Support
	err := result.Scan(&s.Supportee_id, &s.Supporter_id, &s.Sharing_level, &s.Support_id)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Querying Failed"}) //Returning failure
	}

	return c.Status(200).JSON(fiber.Map{"status": "success", "data": s})
}

func GetAllQuestions(c *fiber.Ctx) error {
	result := DATABASE.QueryRow("SELECT * FROM Questions;")

	var s models.Question
	err := result.Scan(&s.Question_id, &s.Category, &s.Question, &s.Type, &s.Suggestions)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Querying Failed"}) //Returning failure
	}

	return c.Status(200).JSON(fiber.Map{"status": "success", "data": s})
}


func GetQuestion(c *fiber.Ctx) error {
	result := DATABASE.QueryRow("SELECT * FROM Questions WHERE Question_id='" + c.Params("Question_id") + "';")

	var s models.Question
	err := result.Scan(&s.Question_id, &s.Category, &s.Question, &s.Type, &s.Suggestions)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Querying Failed"}) //Returning failure
	}

	return c.Status(200).JSON(fiber.Map{"status": "success", "data": s})
}


func GetAllUserQA(c *fiber.Ctx) error {
	result := DATABASE.QueryRow("SELECT * FROM Answer WHERE User_id='" + c.Params("User_id") + "';")

	var s models.Answer
	err := result.Scan(&s.User_id, &s.Questions_id, &s.Response_id)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Querying Failed"}) //Returning failure
	}

	return c.Status(200).JSON(fiber.Map{"status": "success", "data": s})
}


func CreateAnswer(c *fiber.Ctx) error {
	//Load Model
	s := new(models.Answer)
	err := c.BodyParser(s)

	//Handling Errors
	if err != nil {
		c.Status(400).JSON(fiber.Map{"error": "failed to process inputs", "data": err})
		return nil
	}
	//Add to Database
	row := DATABASE.QueryRow(
		"INSERT INTO Answers VALUES( $1, $2, $3);",
		s.User_id, s.Questions_id, s.Response_id)

	//SQL Error Check
	if row.Err() != nil {
		fmt.Println(row.Err())
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Creating Answer failed"}) //Returning failure
	}

	//Success
	return c.Status(200).JSON(fiber.Map{"status": "success", "type": "Creating Answer"}) //Returning success
}

func CreateResponse(c *fiber.Ctx) error {
	//Load Model
	s := new(models.Response)
	err := c.BodyParser(s)

	//Handling Errors
	if err != nil {
		c.Status(400).JSON(fiber.Map{"error": "failed to process inputs", "data": err})
		return nil
	}
	//Add to Database
	row := DATABASE.QueryRow(
		"INSERT INTO Response VALUES( $1, $2, $3) RETURNING Response_id;",
		s.Response_id, s.Data, s.Date)

	//SQL Error Check
	if row.Err() != nil {
		fmt.Println(row.Err())
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Creating Response failed"}) //Returning failure
	}

	//Success
	return c.Status(200).JSON(fiber.Map{"status": "success", "type": "Creating Response"}) //Returning success
}


func GetResponse(c *fiber.Ctx) error {
	result := DATABASE.QueryRow("SELECT * FROM Response WHERE Response_id='" + c.Params("Response_id") + "';")

	var s models.Response
	err := result.Scan(&s.Response_id, &s.Data, &s.Date)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "fail", "type": "SQL: Querying Failed"}) //Returning failure
	}

	return c.Status(200).JSON(fiber.Map{"status": "success", "data": s})
}
