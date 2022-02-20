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
	v.Get("/user/email/:email", GetUserByEmail)
	v.Get("/user/:user_id", GetUser)

	v.Post("/support", CreateSupport)
	v.Get("/support/:support_id", GetSupport)

	v.Get("/questions", GetAllQuestions)
	v.Get("/questions/:question_id", GetQuestion)


	v.Post("/response", CreateResponse)
	v.Get("/response/:response_id", GetResponse)

	//Special
	v.Get("/support/supportee/:supportee_id", GetSupportBySupporteeId)
	v.Get("/support/supporter/:supporter_id", GetSupportBySupporterId)
	v.Get("/response/user/:user_id", GetAllResponseWithUser)
	v.Get("/suggestions", GetAllSuggestions)
}
