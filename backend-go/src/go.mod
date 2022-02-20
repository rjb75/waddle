module db/wadle

go 1.17

require github.com/lib/pq v1.10.4

require (
	github.com/gofiber/fiber/v2 v2.27.0
	github.com/joho/godotenv v1.4.0
// db/wadle/models v0.0.0-00010101000000-000000000000
// db/wadle/routes v0.0.0-00010101000000-000000000000
)

require (
	github.com/andybalholm/brotli v1.0.4 // indirect
	github.com/klauspost/compress v1.14.1 // indirect
	github.com/valyala/bytebufferpool v1.0.0 // indirect
	github.com/valyala/fasthttp v1.33.0 // indirect
	github.com/valyala/tcplisten v1.0.0 // indirect
	golang.org/x/sys v0.0.0-20220111092808-5a964db01320 // indirect
)

// replace ucalgary.ca/cpsc441/eventmanagment/models => ./models

// replace ucalgary.ca/cpsc441/eventmanagment/database => ./database

// replace ucalgary.ca/cpsc441/eventmanagment/routes => ./routes
