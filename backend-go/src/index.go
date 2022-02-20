package main

import (
	//"fmt"
//	"log"
//	"os"

	"github.com/gofiber/fiber/v2"
//	"routes"
	//"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)


func main() {
	app := fiber.New()

	// err := godotenv.Load("../../.env")
	// if err != nil {
	// 	log.Fatal("Error loading .env file")
	// }

	

//	database.DBConnect()
//	database.ExecuteSQLFile("./database/tables.sql")
	
	//CreateRoutes(app)
	// app.Get("/go/api/v1/test", func(c *fiber.Ctx) error {
	// 	return c.SendString("Hello, World!")
	//   })
	RegisterRoutes(app)

	//	SERVER_PORT := os.Getenv("PORT")
	//port := fmt.Sprintf(":%s", 8000)
	app.Listen(":3000")
}