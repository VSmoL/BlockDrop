#pragma strict

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
						
				switch(hitObjectUp.name){	
					case "StageSelectStageButton"+ GameMaster.stageNumber.ToString():
						GameMaster.enemySpawnRate = GameMaster.enemySpawnRateArray[GameMaster.stageNumber];
						GameMaster.enemyMovementSpeed = GameMaster.enemyMovementSpeedArray[GameMaster.stageNumber];
						GameMaster.enemySize = GameMaster.enemySizeArray[GameMaster.stageNumber];
						Application.LoadLevel("Game");
					break;					
				}			
			}
		}
}