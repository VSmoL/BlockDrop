#pragma strict

public var BackButtonLastScene : String;

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) 
	{ 
		if (BackButtonLastScene == "GameExit"){
			Application.Quit();
		}
		else{
			Application.LoadLevel(BackButtonLastScene);
		}	
	}
}