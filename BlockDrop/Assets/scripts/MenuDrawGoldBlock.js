function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
}

function OnGUI(){
	guiText.text = PlayerPrefs.GetInt("TotalGoldBlock").ToString();
}