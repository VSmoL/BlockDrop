#pragma strict
function Start(){
	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/12;
}

function OnGUI()
{
	GetComponent.<GUIText>().text = GameMaster.currentScore.ToString();
}