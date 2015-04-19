function Start(){
	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	GetComponent.<GUIText>().text = PlayerPrefs.GetInt("TotalGoldBlock").ToString();

	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = transform.GetComponent.<GUIText>().fontSize;
		childText.gameObject.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
	}
}

function refreshTotalGold(){
	GetComponent.<GUIText>().text = PlayerPrefs.GetInt("TotalGoldBlock").ToString();

	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
	}	
}