#pragma strict

public var endGameCoinsEarned : GameObject;
public var endGameCoinIcon : GameObject;
public var endGameTotalCoin : GameObject;

function Start(){
	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/20;
	
	for(var childText : Transform in transform){
		childText.gameObject.GetComponent(GUIText).fontSize = Mathf.Min(Screen.height,Screen.width)/20;
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
			showCoins();
		}
		yield WaitForSeconds(0.01);
	}
	if(GameMaster.endScore == 0){
		showCoins();
	}
}

function showCoins(){
	yield WaitForSeconds(1);
	endGameCoinsEarned.SetActive(true);
	endGameCoinIcon.SetActive(true);
	endGameTotalCoin.SetActive(true);
}
