#pragma strict

public var Stage1 : GameObject;
public var Stage2 : GameObject;
public var Stage3 : GameObject;
public var Stage4 : GameObject;
public var Stage5 : GameObject;
public var Stage6 : GameObject;
public var Stage7 : GameObject;
public var Stage8 : GameObject;
public var Stage9 : GameObject;
public var StageRandom : GameObject;
public var StageScoreAttack : GameObject;

function Start () {
	
	Stage1.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Arcade_1").ToString();
	for(var childText : Transform in Stage1.transform){
		childText.gameObject.GetComponent(GUIText).text = Stage1.GetComponent.<GUIText>().text;
	}
	
	Stage2.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Arcade_2").ToString();
	for(var childText : Transform in Stage2.transform){
		childText.gameObject.GetComponent(GUIText).text = Stage2.GetComponent.<GUIText>().text;
	}
	
	Stage3.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Arcade_3").ToString();
	for(var childText : Transform in Stage3.transform){
		childText.gameObject.GetComponent(GUIText).text = Stage3.GetComponent.<GUIText>().text;
	}
	
	Stage4.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Arcade_4").ToString();
	for(var childText : Transform in Stage4.transform){
		childText.gameObject.GetComponent(GUIText).text = Stage4.GetComponent.<GUIText>().text;
	}
	
	Stage5.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Arcade_5").ToString();
	for(var childText : Transform in Stage5.transform){
		childText.gameObject.GetComponent(GUIText).text = Stage5.GetComponent.<GUIText>().text;
	}
	
	Stage6.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Arcade_6").ToString();
	for(var childText : Transform in Stage6.transform){
		childText.gameObject.GetComponent(GUIText).text = Stage6.GetComponent.<GUIText>().text;
	}
	
	Stage7.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Arcade_7").ToString();
	for(var childText : Transform in Stage7.transform){
		childText.gameObject.GetComponent(GUIText).text = Stage7.GetComponent.<GUIText>().text;
	}
	
	Stage8.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Arcade_8").ToString();
	for(var childText : Transform in Stage8.transform){
		childText.gameObject.GetComponent(GUIText).text = Stage8.GetComponent.<GUIText>().text;
	}
	
	Stage9.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Arcade_9").ToString();
	for(var childText : Transform in Stage9.transform){
		childText.gameObject.GetComponent(GUIText).text = Stage9.GetComponent.<GUIText>().text;
	}
	
	StageRandom.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_Random_0").ToString();
	for(var childText : Transform in StageRandom.transform){
		childText.gameObject.GetComponent(GUIText).text = StageRandom.GetComponent.<GUIText>().text;
	}
	
	StageScoreAttack.gameObject.GetComponent(GUIText).text = PlayerPrefs.GetInt("HiScore_ScoreAttack_0").ToString();
	for(var childText : Transform in StageScoreAttack.transform){
		childText.gameObject.GetComponent(GUIText).text = StageScoreAttack.GetComponent.<GUIText>().text;
	}
}