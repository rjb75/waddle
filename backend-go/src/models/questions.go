package models

type Question struct {
	Question_id string `json:"Question_id"`
	Category    string `json:"Category"`
	Question    string `json:"Question"`
	Type        string `json:"Type"`
}
