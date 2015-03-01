#pragma strict

function Start () {
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/18;
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = transform.guiText.fontSize;
	}
	
	guiText.text = GameMaster.previousBest.ToString();
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).text = guiText.text;
	}
}