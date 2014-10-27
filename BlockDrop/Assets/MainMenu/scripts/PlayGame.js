#pragma strict

var ScreenFadeOut : EndScreenFadeOut;

function Update(){
		if(Input.GetMouseButtonUp(0)){
	
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObject = hit.collider;
	
		switch(hitObject.name){		
			case "StartButton":
				//Application.LoadLevel("Game");
				ScreenFadeOut.sceneEnding = true;
				ScreenFadeOut.sceneName = "Game";
				break;
		}
	}
}