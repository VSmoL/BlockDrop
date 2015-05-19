#pragma strict

public var bossHp : int = 10;
public var bossHpText : GameObject;

function Start(){
	bossHpText.GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)*((GameStart.enemySizeX/GameMaster.enemySize)/4);
	for(var childText : Transform in bossHpText.transform){
		childText.gameObject.GetComponent(GUIText).fontSize = bossHpText.GetComponent.<GUIText>().fontSize;
	}
	drawHP();
}

function Update () {
	var pos = Vector3(transform.position.x - 0.02,transform.position.y,transform.position.z);
	bossHpText.transform.position = Camera.main.WorldToViewportPoint(pos);
}
function drawHP(){
	bossHpText.GetComponent(GUIText).text = bossHp.ToString();
	for(var childText : Transform in bossHpText.transform){
		childText.GetComponent(GUIText).text = bossHpText.GetComponent(GUIText).text;
	}
}