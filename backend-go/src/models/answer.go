package models

type Answer struct {
	User_id  string `json:"User_id"`
	Questions_id    string `json:"Questions_id"`
	Response_id      string    `json:"Response_id"`
}
