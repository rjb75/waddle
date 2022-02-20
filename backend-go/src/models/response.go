package models

type Response struct {
	Response_id  string `json:"Response_id"`
	Data         string `json:"Data"`
	Date         string `json:"Date"`
	User_id      string `json:"User_id"`
	Questions_id string `json:"Questions_id"`
}
