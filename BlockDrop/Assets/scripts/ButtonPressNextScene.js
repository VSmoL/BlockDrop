#pragma strict

function Update(){
	if(Input.GetMouseButtonDown(0)){
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		GameMaster.mousePressDown = hit.collider;
	}
	if(Input.GetMouseButtonUp(0)){
		hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObjectUp = hit.collider;
			
			if(GameMaster.mousePressDown == hitObjectUp){
				switch(hitObjectUp.name){	
	
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
					case "ArcadeButton":
						GameMaster.StageMode = true;
						GameMaster.CustomMode = false;
						GameMaster.RandomMode = false;
						Application.LoadLevel("ZoneSelect");
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
						
					//Zone select Buttons
					case "ZoneBackButton":
						GameMaster.StageMode = true;
						GameMaster.CustomMode = false;
						GameMaster.RandomMode = false;
						Application.LoadLevel("ModeSelect");
						break;
					
					//Stage select buttons
					case "StageBackButton":
						GameMaster.StageMode = true;
						GameMaster.CustomMode = false;
						GameMaster.RandomMode = false;
						Application.LoadLevel("ZoneSelect");
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
						
					case "ExitButton":
						Application.Quit();
						break;
			}
		}
	}
}