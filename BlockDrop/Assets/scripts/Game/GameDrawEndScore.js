#pragma strict

public var endGameCoinTotal : GameObject;
public var endGameCoinIcon : GameObject;
public var endGameCoinsEarned : GameObject;
public var endGameHighScore : GameObject;
public var oneStar : GameObject;
public var twoStar : GameObject;
public var threeStar : GameObject;

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
	if(GameMaster.StageMode){
		if(GameMaster.endScore > GameMaster.threeStarPoint){
			oneStar.SetActive(true);
			yield WaitForSeconds(0.6);
			twoStar.SetActive(true);
			yield WaitForSeconds(0.6);
			threeStar.SetActive(true);
			yield WaitForSeconds(0.6);
		}
		else if(GameMaster.endScore > GameMaster.twoStarPoint){
			oneStar.SetActive(true);
			yield WaitForSeconds(0.6);
			twoStar.SetActive(true);
			yield WaitForSeconds(0.6);
		}
		else if(GameMaster.endScore > GameMaster.oneStarPoint){
			oneStar.SetActive(true);
			yield WaitForSeconds(0.6);
		}
	}
}
