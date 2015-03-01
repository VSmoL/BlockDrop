#pragma strict
function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/12;
}

function OnGUI()
{
	guiText.text = GameMaster.currentScore.ToString();
}