#pragma strict
function Update(){
		if(Input.GetMouseButtonDown(0)){
	
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObject = hit.collider;
	
		switch(hitObject.name){		
			case "Enemy(Clone)":
				Destroy(hitObject.gameObject);
				GameMaster.multiplyScore += 10;
				GameMaster.currentScore += GameMaster.multiplyScore;
				break;
					
			default:
				GameMaster.multiplyScore = 0;
				break;
		}
	}
}