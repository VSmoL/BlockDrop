#pragma strict

public var endGameMultipliedScore : GameObject;

function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
}

function OnGUI()
{
	guiText.text = "x" + GameMaster.endMultiplier.ToString();
	showMultipliedScore();
}

function showMultipliedScore(){
	yield WaitForSeconds(1);
	endGameMultipliedScore.SetActive(true);
}