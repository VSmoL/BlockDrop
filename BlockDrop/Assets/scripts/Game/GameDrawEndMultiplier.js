#pragma strict

public var endGameMultipliedScore : GameObject;

function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	}
	
	guiText.text = "x" + GameMaster.endMultiplier.ToString();
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).text = "x" + GameMaster.endMultiplier.ToString();
	}
	showMultipliedScore();
}

function showMultipliedScore(){
	yield WaitForSeconds(1);
	endGameMultipliedScore.SetActive(true);
}