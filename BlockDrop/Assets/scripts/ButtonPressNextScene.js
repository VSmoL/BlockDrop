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
					case "ShapesButton":
						Application.LoadLevel("ShopShapes");
						break;
						
					//ShopColor Buttons
					case "ShopBackButton":
						Application.LoadLevel("Shop");
						break;
					
					//Mode select Buttons
					case "ArcadeButton":
						GameMaster.StageMode = true;
						GameMaster.RandomMode = false;
						GameMaster.Scoreattack = false;
						GameMaster.gameMode = "Arcade";
						Application.LoadLevel("StageSelect");
						break;
					case "RandomButton":
						//Tell which mode
						GameMaster.StageMode = false;
						GameMaster.RandomMode = true;
						GameMaster.Scoreattack = false;
						GameMaster.gameMode = "Random";
						Application.LoadLevel("Game");
						break;
					case "ScoreAttackButton":
						//Tell which mode
						GameMaster.StageMode = false;
						GameMaster.RandomMode = false;
						GameMaster.Scoreattack = true;
						GameMaster.gameMode = "Survival";
						Application.LoadLevel("Game");
						break;
					
					//Stage select buttons
					case "StageBackButton":
						Application.LoadLevel("ModeSelect");
						break;
						
					//Game Buttons
					case "MainMenuButton":
						GameMaster.gameZigZag = false;	
						GameMaster.gameMoveStop = false;
						GameMaster.gameTopBottom = false;
						GameMaster.gameFade = false;
						GameMaster.gameSwapPlace = false;
						GameMaster.gameBomb = false;
						GameMaster.gameScanner = false;
						
						Time.timeScale = 1;
						Application.LoadLevel("MainMenu");
						break;
					case "RestartButton":
						Time.timeScale = 1;
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