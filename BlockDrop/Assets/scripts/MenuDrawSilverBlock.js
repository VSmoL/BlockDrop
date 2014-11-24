function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	guiText.text = PlayerPrefs.GetInt("TotalSilverBlock").ToString();
}