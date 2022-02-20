package models

type User struct {
	Email    string `json:"Email"`
	Pin      int    `json:"Pin"`
	Name     string `json:"Name"`
	User_id  string `json:"User_id"`
	Hashed_Password string `json:"Hashed_Password"`
}
