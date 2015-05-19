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
					case "SettingsButton":
						Application.LoadLevel("Settings");
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
						GameMaster.gameMode = "ScoreAttack";
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
						GameMaster.gameDouble = false;
						GameMaster.gameBoss = false;
						
						GameMaster.currentScore = 0;
						GameMaster.multiplyScore = 0;
						GameMaster.multiplier = 0;	
						
						if(EditorPrefsX.GetBool("isMusic")){
							var bgMusic = GameObject.Find("BackgroundMusic");
	    					bgMusic.GetComponent(AudioSource).loop = true;
	    					bgMusic.GetComponent(AudioSource).clip = bgMusic.GetComponent(PlayRandomSong).songList[12];
	    					bgMusic.GetComponent(AudioSource).volume = 1;
	    					bgMusic.GetComponent(AudioSource).Play();
						}
						
						GameMaster.GamePause = false;
						
						Time.timeScale = 1;
						Application.LoadLevel("MainMenu");
						break;
					case "RestartButton":
						Time.timeScale = 1;
						
						GameMaster.currentScore = 0;
						GameMaster.multiplyScore = 0;
						GameMaster.multiplier = 0;	
						
						GameMaster.GamePause = false;
						
						Application.LoadLevel("Game");
						break;

					//Settings
					case "MusicButton":
						if(EditorPrefsX.GetBool("isMusic")){
							EditorPrefsX.SetBool("isMusic",false);
							hitObjectUp.gameObject.GetComponent.<Renderer>().material.color.a = 0.5;
							bgMusic = GameObject.Find("BackgroundMusic");
							bgMusic.GetComponent(AudioSource).Stop();
						}
						else{
							EditorPrefsX.SetBool("isMusic",true);
							hitObjectUp.gameObject.GetComponent.<Renderer>().material.color.a = 1;
							bgMusic = GameObject.Find("BackgroundMusic");
							bgMusic.GetComponent(AudioSource).Play();
						}
						break;
					case "SfxButton":
						if(EditorPrefsX.GetBool("isSfx")){
							EditorPrefsX.SetBool("isSfx",false);
							hitObjectUp.gameObject.GetComponent.<Renderer>().material.color.a = 0.5;
						}
						else{
							EditorPrefsX.SetBool("isSfx",true);
							hitObjectUp.gameObject.GetComponent.<Renderer>().material.color.a = 1;
						}
						break;
					case "ClearDataButton":
						PlayerPrefs.DeleteAll();
						
						//Game started first time
						EditorPrefsX.SetBool("GameStarted",true);
						
						//WhiteColor unlocked
						EditorPrefsX.SetBool("UnlockedWhiteColor",true);
						EditorPrefsX.SetColor("enemyColor", Color.white);
						
						PlayerPrefs.SetInt("enemyBlockSpriteIndex",0);
						EditorPrefsX.SetBool("UnlockedBlockShape",true);
						
						//Sounds
						EditorPrefsX.SetBool("isMusic",true);
						EditorPrefsX.SetBool("isSfx",true);
						
						GameObject.Find("MusicButton").GetComponent.<Renderer>().material.color.a = 1;
						GameObject.Find("SfxButton").GetComponent.<Renderer>().material.color.a = 1;
						
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