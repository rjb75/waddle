package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)


func main() {
	app := fiber.New()

	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	DBConnect()	
	RegisterRoutes(app)

	SERVER_PORT := os.Getenv("PORT")
	port := fmt.Sprintf(":%s", SERVER_PORT)
	app.Listen(port)
}