#pragma strict

function Start () {
	if(!EditorPrefsX.GetBool("GameStarted")){
		//Game started first time
		EditorPrefsX.SetBool("GameStarted",true);
		
		//WhiteColor unlocked
		EditorPrefsX.SetBool("UnlockedWhiteColor",true);
		EditorPrefsX.SetColor("enemyColor", Color.white);
	}
	Application.LoadLevel("MainMenu");
}
