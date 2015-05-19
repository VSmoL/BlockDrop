#pragma strict

private var bgMusic : GameObject;

function Start () {
	if(EditorPrefsX.GetBool("isMusic")){
		gameObject.GetComponent.<Renderer>().material.color.a = 1;
	}
	else{
		gameObject.GetComponent.<Renderer>().material.color.a = 0.5;
	}
}