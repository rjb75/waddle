package main

import (
	//	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func RegisterRoutes(app *fiber.App) {
	app.Use(cors.New())

	//Api Version Configuration
	api := app.Group("/api") // /api
	v1 := api.Group("/v1")   // /api/v1

	userRoutes(v1)
}

func userRoutes(v fiber.Router) {
	v.Post("/user", CreateUser)
	v.Get("/user/:Email", GetUserByEmail)
	v.Get("/user/:User_id", GetUser)

	v.Post("/support", CreateSupport)
	v.Get("/support/:Support_id", GetSupport)

	v.Get("/questions", GetAllQuestions)
	v.Get("/questions/:Question_id", GetQuestion)

	v.Get("/answer/:User_id", GetAllUserQA)
	v.Post("/answer", CreateAnswer)

	v.Post("/response", CreateResponse)
	v.Get("/response/:Response_id", GetResponse)
}
