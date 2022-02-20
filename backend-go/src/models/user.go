package models

type User struct {
	User_id  string `json:"User_id"`
	Email    string `json:"Email"`
	Pin      int    `json:"Pin"`
	Name     string `json:"Name"`
	Password string `json:"Password"`
}
