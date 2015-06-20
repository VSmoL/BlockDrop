#pragma strict

public var ScoreText : GameObject;
public var GameEndScore : GameObject;
public var PreviousHiScore : GameObject;
public var GameEndPreviousBest : GameObject;
public var RestartButton : GameObject;
public var MainMenuButton : GameObject;

public var GoogleAd : GameObject;

function Start () {
	var fontSize = 30.00;
	while(GetComponent.<GUIText>().color.a < 1){
		GetComponent.<GUIText>().color.a += 0.025;
		fontSize -= 0.6;
		for(var childText : Transform in transform){
			childText.gameObject.GetComponent.<GUIText>().color.a = transform.GetComponent.<GUIText>().color.a;
		}
		GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/fontSize;
		for(var childText : Transform in transform){
			childText.gameObject.GetComponent(GUIText).fontSize = transform.GetComponent.<GUIText>().fontSize;
		}
		yield WaitForSeconds(0.01);
	}
	if(GameMaster.GameRetries % 2 == 0){
		GoogleAd.SendMessage("ShowVideo");
	}
	
	ScoreText.SetActive(true);
	GameEndScore.SetActive(true);
	PreviousHiScore.SetActive(true);
	GameEndPreviousBest.SetActive(true);
	RestartButton.SetActive(true);
	MainMenuButton.SetActive(true);
}