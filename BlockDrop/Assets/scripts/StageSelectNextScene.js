#pragma strict

var stageNumber;
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
				stageNumber = StageSelectStageNumberScript.stageNumber;
						
				switch(hitObjectUp.name){	
					//Color shop
					case "StageSelectStageButton"+ stageNumber.ToString():
						GameMaster.enemySpawnRate = GameMaster.enemySpawnRateArray[stageNumber];
						GameMaster.enemyMovementSpeed = GameMaster.enemyMovementSpeedArray[stageNumber];
						GameMaster.enemySize = GameMaster.enemySizeArray[stageNumber];
						Application.LoadLevel("Game");
					break;					
				}			
			}
		}
}