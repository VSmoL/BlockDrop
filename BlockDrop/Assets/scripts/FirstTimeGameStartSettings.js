#pragma strict

function Start () {
	if(!EditorPrefsX.GetBool("GameStarted")){
		//Game started first time
		EditorPrefsX.SetBool("GameStarted",true);
		
		//WhiteColor unlocked
		EditorPrefsX.SetBool("UnlockedWhiteColor",true);
	}
	Application.LoadLevel("MainMenu");
}
