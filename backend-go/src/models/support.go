package models

type Support struct {
	Support_id     string `json:"support_id"`
	Supportee_id  string `json:"supportee_id"`
	Supporter_id    string `json:"supporter_id"`
	Sharing_level      int    `json:"sharing_level"`
}
