#pragma strict

function Start () {
	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/14;
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = transform.GetComponent.<GUIText>().fontSize;
	}
	
	GetComponent.<GUIText>().text = GameMaster.previousBest.ToString();
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
	}
}