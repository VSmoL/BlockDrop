#pragma strict

public var endGameCoinsEarned : GameObject;
public var endGameCoinIcon : GameObject;

function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	}
	
	while(GameMaster.endMultipliedScore > parseInt(guiText.text)){
		guiText.text = ((parseInt(guiText.text)) + Mathf.Ceil((GameMaster.endMultipliedScore * 0.01))).ToString();
		for(var childText : Transform in transform){
			childText.gameObject.GetComponent(GUIText).text = guiText.text;
		}
		if(parseInt(guiText.text) >= GameMaster.endMultipliedScore){
			guiText.text = GameMaster.endMultipliedScore.ToString();
			for(var childText : Transform in transform){
				childText.gameObject.GetComponent(GUIText).text = guiText.text;
			}
			showCoins();
		}
		yield WaitForSeconds(0.01);
	}
	if(GameMaster.endMultipliedScore == 0){
		showCoins();
	}
}

function showCoins(){
	yield WaitForSeconds(1);
	endGameCoinsEarned.SetActive(true);
	endGameCoinIcon.SetActive(true);
}
