#pragma strict

var ScreenFadeOut : EndScreenFadeOut;

function Update(){
		if(Input.GetMouseButtonUp(0)){
	
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObject = hit.collider;
	
		switch(hitObject.name){	
		
			//Main Menu Buttons	
			case "StartButton":
				Application.LoadLevel("ModeSelect");
				break;
			case "SettingButton":
				Application.LoadLevel("ModeSelect");
				break;
			case "ShopButton":
				Application.LoadLevel("Shop");
				break;
				
			//Shop Buttons
			case "ColorsButton":
				Application.LoadLevel("ShopColors");
				break;
				
			//ShopColor Buttons
			case "ShopColorBackButton":
				Application.LoadLevel("Shop");
				break;
			
			//Mode select Buttons
			case "StageButton":
				GameMaster.StageMode = true;
				GameMaster.CustomMode = false;
				GameMaster.RandomMode = false;
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
				
			//Game Buttons
			case "MainMenuButton":
				Application.LoadLevel("MainMenu");
				break;
			case "RestartButton":
				Application.LoadLevel("Game");
				break;

			case "BackButton":
				Application.LoadLevel("MainMenu");
				break;
		}
	}
}