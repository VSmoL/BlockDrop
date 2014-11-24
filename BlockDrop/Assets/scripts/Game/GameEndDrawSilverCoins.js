#pragma strict

function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
}

function OnGUI()
{
	if(GameMaster.endGameSilverCoins >= parseInt(guiText.text)){
		guiText.text = ((parseInt(guiText.text)) + Mathf.Ceil((GameMaster.endGameSilverCoins * 0.01))).ToString();
		if(parseInt(guiText.text) >= GameMaster.endGameSilverCoins){
			guiText.text = GameMaster.endGameSilverCoins.ToString();
		}
	}
}