#pragma strict

var bgColor : Color[] = [Color(1,0.5,0.5,0.75), Color(1,0.75,0.5,0.75), Color(1,1,0.5,0.75), Color(0.5,1,0.5,0.75), Color(0.5,1,1,0.75), Color(0.5,0.5,1,0.75), Color(1,0.5,1,0.75)];	
private var fadeAmount : float = 1;

function Start () {
	guiText.fontSize = Mathf.Min(Screen.height,Screen.width)/12;
	
	for(var childText : Transform in transform){
		childText.GetComponent(GUIText).fontSize = transform.guiText.fontSize;
	}
	
	InvokeRepeating("changeColor",0,0.1);
	
//	if(GameMaster.HiScore){
//		guiText.text = "New Hi-Score";
//		for(var childText : Transform in transform){
//			childText.GetComponent(GUIText).text = guiText.text;
//		}
//		InvokeRepeating("changeColor",0,0.1);
//	}
//	else{
//		guiText.text = "Hi-Score";
//		for(var childText : Transform in transform){
//			childText.GetComponent(GUIText).text = guiText.text;
//		}
//	}	
}

function changeColor(){
	transform.guiText.color = Color.Lerp (bgColor[Random.Range(0,bgColor.Length)], bgColor[Random.Range(0,bgColor.Length)], 3);
}