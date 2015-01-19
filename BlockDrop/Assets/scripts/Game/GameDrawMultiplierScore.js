#pragma strict

var bgColor : Color[] = [Color(1,0.5,0.5,0.75), Color(1,0.75,0.5,0.75), Color(1,1,0.5,0.75), Color(0.5,1,0.5,0.75), Color(0.5,1,1,0.75), Color(0.5,0.5,1,0.75), Color(1,0.5,1,0.75)];	
private var fadeAmount : float = 1;

function Start () {
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/12;
	guiText.text = "+"+GameMaster.multiplyScore.ToString();
	addForce();
	InvokeRepeating("addTransparent",0,0.005);
	InvokeRepeating("changeColor",0,0.05);
}

function addForce(){
	rigidbody2D.velocity.y = 0.05;
}

function addTransparent(){
	fadeAmount -= 0.004;
}



function Update(){
	if (transform.guiText.color.a <= 0.001){
		Destroy(gameObject);
	}
}

function changeColor(){
	transform.guiText.color = Color.Lerp (bgColor[Random.Range(0,bgColor.Length)], bgColor[Random.Range(0,bgColor.Length)], 3);
	transform.guiText.color.a = fadeAmount;
}