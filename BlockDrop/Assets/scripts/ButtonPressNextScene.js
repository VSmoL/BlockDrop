#pragma strict

var ScreenFadeOut : EndScreenFadeOut;

function Update(){
		if(Input.GetMouseButtonUp(0)){
	
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObject = hit.collider;
	
		switch(hitObject.name){		
			case "StartButton":
				ScreenFadeOut.sceneEnding = true;
				ScreenFadeOut.sceneName = "ModeSelect";
				break;
			case "StageButton":
				ScreenFadeOut.sceneEnding = true;
				ScreenFadeOut.sceneName = "Game";
				break;
			case "RandomButton":
				//Tell which mode
				GameMaster.StageMode = false;
				GameMaster.CustomMode = false;
				GameMaster.RandomMode = true;
				
				//Start Game
				ScreenFadeOut.sceneEnding = true;
				ScreenFadeOut.sceneName = "Game";
				break;
			case "CustomButton":
				break;
			case "BackButton":
				ScreenFadeOut.sceneEnding = true;
				ScreenFadeOut.sceneName = "MainMenu";
				break;
		}
	}
}