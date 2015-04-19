#pragma strict

public var PausePopUp : GameObject;

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
					case "PauseButton":
						Time.timeScale = 0;
						PausePopUp.SetActive(true);
						GameMaster.GamePause = true;
						break;
					case "ContinueButton":
						Time.timeScale = 1;
						PausePopUp.SetActive(false);
						GameMaster.GamePause = false;
						break;
			}
		}
	}
}