package models

type Support struct {
	Supportee_id  string `json:"Supportee_id"`
	Supporter_id    string `json:"Supporter_id"`
	Sharing_level      int    `json:"Sharing_level"`
	Support_id     string `json:"Support_id"`
}
