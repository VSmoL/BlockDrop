#pragma strict

public var endGameCoinTotal : GameObject;
public var endGameCoinIcon : GameObject;
public var endGameCoinsEarned : GameObject;
public var endGameHighScore : GameObject;

function Start(){
	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/14;
	
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = transform.GetComponent.<GUIText>().fontSize;
	}
	
	while(GameMaster.endScore > parseInt(GetComponent.<GUIText>().text)){
		GetComponent.<GUIText>().text = ((parseInt(GetComponent.<GUIText>().text)) + Mathf.Ceil((GameMaster.endScore * 0.01))).ToString();
		for(var childText : Transform in transform){
			childText.gameObject.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
		}
		if(parseInt(GetComponent.<GUIText>().text) >= GameMaster.endScore){
			GetComponent.<GUIText>().text = GameMaster.endScore.ToString();
			for(var childText : Transform in transform){
				childText.gameObject.GetComponent(GUIText).text = GetComponent.<GUIText>().text;
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
	endGameCoinTotal.SetActive(true);
	endGameCoinIcon.SetActive(true);
	endGameCoinsEarned.SetActive(true);
	if (GameMaster.HiScore){
		endGameHighScore.SetActive(true);
	}
}
