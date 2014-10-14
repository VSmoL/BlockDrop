#pragma strict
var score : GUIText;

function Start(){
	score.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
}

function OnGUI()
{
	guiText.text = GameMaster.currentScore.ToString();
}