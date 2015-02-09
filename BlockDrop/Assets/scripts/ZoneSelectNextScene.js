#pragma strict

private var ZoneSelectZoneNumberScript : ZoneSelectZoneNumber;

function Update(){
	if(Input.GetMouseButtonDown(0)){
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		GameMaster.mousePressDown = hit.collider;
	}
	if(Input.GetMouseButtonUp(0)){
		 	hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
			var hitObjectUp = hit.collider;
				
			if(GameMaster.mousePressDown == hitObjectUp && hitObjectUp.tag == "ZoneSelect"){		
			
				ZoneSelectZoneNumberScript = hitObjectUp.GetComponent("ZoneSelectZoneNumber");
				GameMaster.zoneNumber = ZoneSelectZoneNumberScript.zoneNumber;
						
				switch(GameMaster.zoneNumber){	
					case 1:
						break;
					case 2:
						GameMaster.gameZigZag = true;	
						break;
					case 3:
						GameMaster.gameMoveStop = true;	
						break;
					case 4:
						GameMaster.gameTopBottom = true;	
						break;
					case 5:	
						break;
				}
												
				switch(hitObjectUp.name){	
					case "ZoneSelectZoneButton"+ GameMaster.zoneNumber.ToString():
						Application.LoadLevel("StageSelect");
					break;					
				}			
			}
		}
}