#pragma strict

public var endGameCoinsEarned : GameObject;
public var endGameCoinIcon : GameObject;
public var endGameTotalCoin : GameObject;
public var endGameHighScore : GameObject;

function Start(){
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/14;
	
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = transform.guiText.fontSize;
	}
	
	while(GameMaster.endScore > parseInt(guiText.text)){
		guiText.text = ((parseInt(guiText.text)) + Mathf.Ceil((GameMaster.endScore * 0.01))).ToString();
		for(var childText : Transform in transform){
			childText.gameObject.GetComponent(GUIText).text = guiText.text;
		}
		if(parseInt(guiText.text) >= GameMaster.endScore){
			guiText.text = GameMaster.endScore.ToString();
			for(var childText : Transform in transform){
				childText.gameObject.GetComponent(GUIText).text = guiText.text;
			}
			showMultiplier();
		}
		yield WaitForSeconds(0.01);
	}
	if(GameMaster.endScore == 0){
		showMultiplier();
	}
}

function showMultiplier(){
	yield WaitForSeconds(1);
	endGameCoinsEarned.SetActive(true);
	endGameCoinIcon.SetActive(true);
	endGameTotalCoin.SetActive(true);
	if (GameMaster.HiScore){
		endGameHighScore.SetActive(true);
	}
}
