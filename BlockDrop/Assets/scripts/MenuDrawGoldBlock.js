function Start(){
	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/20;
}

function OnGUI(){
	GetComponent.<GUIText>().text = PlayerPrefs.GetInt("TotalGoldBlock").ToString();
}