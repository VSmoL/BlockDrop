#pragma strict

var ScreenFadeOut : EndScreenFadeOut;

function Update(){
		if(Input.GetMouseButtonUp(0)){
	
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObject = hit.collider;
	
		switch(hitObject.name){		
			case "StartButton":
				Application.LoadLevel("ModeSelect");
				break;
			case "StageButton":
				Application.LoadLevel("Game");
				break;
			case "RandomButton":
				//Tell which mode
				GameMaster.StageMode = false;
				GameMaster.CustomMode = false;
				GameMaster.RandomMode = true;
				
				Application.LoadLevel("Game");
				break;
			case "CustomButton":
				break;
			case "BackButton":
				Application.LoadLevel("MainMenu");
				break;
		}
	}
}