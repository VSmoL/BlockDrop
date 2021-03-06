﻿#pragma strict

private var StageSelectStageNumberScript : StageSelectStageNumber;

function Update(){
	if(Input.GetMouseButtonDown(0)){
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		GameMaster.mousePressDown = hit.collider;
	}
	if(Input.GetMouseButtonUp(0)){
		 	hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
			var hitObjectUp = hit.collider;
				
			if(GameMaster.mousePressDown == hitObjectUp && hitObjectUp.tag == "StageSelect"){		
				
				StageSelectStageNumberScript = hitObjectUp.GetComponent("StageSelectStageNumber");
				GameMaster.stageNumber = StageSelectStageNumberScript.stageNumber;
						
				GameMaster.oneStarPoint = hitObjectUp.GetComponent(StageSelectStarPoints).onePoints;
				GameMaster.twoStarPoint = hitObjectUp.GetComponent(StageSelectStarPoints).twoPoints;
				GameMaster.threeStarPoint = hitObjectUp.GetComponent(StageSelectStarPoints).threePoints;
						
				switch(GameMaster.stageNumber){
					case 0:
						GameMaster.gameZigZag = true;
						GameMaster.gameMoveStop = true;
						GameMaster.gameTopBottom = true;
						GameMaster.gameFade = true;
						GameMaster.gameSwapPlace = true;
						GameMaster.gameBomb = true;
						GameMaster.gameScanner = true;
						Application.LoadLevel("Game");
						break;
					case 1:
						GameMaster.gameZigZag = true;
						Application.LoadLevel("Game");
						break;
					case 2:
						GameMaster.gameMoveStop = true;
						Application.LoadLevel("Game");	
						break;
					case 3:
						GameMaster.gameTopBottom = true;
						Application.LoadLevel("Game");
						break;
					case 4:	
						GameMaster.gameFade = true;
						Application.LoadLevel("Game");
						break;
					case 5:	
						GameMaster.gameSwapPlace = true;
						Application.LoadLevel("Game");
						break;
					case 6:	
						GameMaster.gameBomb = true;
						Application.LoadLevel("Game");
						break;
					case 7:	
						GameMaster.gameScanner = true;
						Application.LoadLevel("Game");
						break;
					case 8:
						GameMaster.gameDouble = true;
						Application.LoadLevel("Game");
						break;
					case 9:
						GameMaster.gameBoss = true;
						Application.LoadLevel("Game");
						break;
				}			
			}
		}
}