#pragma strict
#pragma strict

var bgColor : Color[] = [Color(1,0.5,0.5,0.75), Color(1,0.75,0.5,0.75), Color(1,1,0.5,0.75), Color(0.5,1,0.5,0.75), Color(0.5,1,1,0.75), Color(0.5,0.5,1,0.75), Color(1,0.5,1,0.75)];	
private var fadeAmount : float = 1;

function Start () {
	GetComponent.<GUIText>().fontSize = Mathf.Min(Screen.height,Screen.width)/12;
	GetComponent.<GUIText>().text = GameMaster.bonusText;
	
	for(var childText : Transform in transform){
		childText.GetComponent(GUIText).fontSize = transform.GetComponent.<GUIText>().fontSize;
		childText.GetComponent(GUIText).text = transform.GetComponent.<GUIText>().text;
	}
	InvokeRepeating("changeColor",0,0.05);
	yield WaitForSeconds(1);
	InvokeRepeating("addTransparent",0,0.005);
	
}

function addTransparent(){
	fadeAmount -= 0.004;
}

function Update(){
	if (transform.GetComponent.<GUIText>().color.a <= 0.001){
		Destroy(gameObject);
	}
}

function changeColor(){
	transform.GetComponent.<GUIText>().color = Color.Lerp (bgColor[Random.Range(0,bgColor.Length)], bgColor[Random.Range(0,bgColor.Length)], 3);
	transform.GetComponent.<GUIText>().color.a = fadeAmount;
	for(var childText : Transform in transform){
		childText.GetComponent.<GUIText>().color.a = transform.GetComponent.<GUIText>().color.a;
	}
}