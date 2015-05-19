#pragma strict

function Start () {
	if(EditorPrefsX.GetBool("isSfx")){
		gameObject.GetComponent.<Renderer>().material.color.a = 1;
	}
	else{
		gameObject.GetComponent.<Renderer>().material.color.a = 0.5;
	}
}