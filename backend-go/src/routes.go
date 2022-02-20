package main

import (
	//	"fmt"

	"github.com/gofiber/fiber/v2"
)

func RegisterRoutes(app *fiber.App) {

	//Api Version Configuration
	api := app.Group("/api") // /api
	v1 := api.Group("/v1")   // /api/v1

	personRoutes(v1)
	CreateUser()
}



func personRoutes(v fiber.Router) {
	v.Get("/test", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	  })


}


