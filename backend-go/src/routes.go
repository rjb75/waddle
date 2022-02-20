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
	v.Get("/user/:email", GetUserByEmail)
	v.Get("/user/:user_id", GetUser)
}
