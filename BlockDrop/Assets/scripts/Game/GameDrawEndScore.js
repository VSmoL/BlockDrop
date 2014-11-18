#pragma strict

public var endGameMultiplier : GameObject;

function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
}

function OnGUI()
{
	if(GameMaster.endScore >= parseInt(guiText.text)){
		guiText.text = ((parseInt(guiText.text)) + Mathf.Ceil((GameMaster.endScore * 0.01))).ToString();
		if(parseInt(guiText.text) >= GameMaster.endScore){
			guiText.text = GameMaster.endScore.ToString();
			showMultiplier();
		}
	}
}

function showMultiplier(){
	yield WaitForSeconds(1);
	endGameMultiplier.SetActive(true);
}
