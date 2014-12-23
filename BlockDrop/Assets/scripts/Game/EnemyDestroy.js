#pragma strict

public var EnemyFragmentClone : GameObject;

function Update(){
		if(Input.GetMouseButtonDown(0)){
		
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObject = hit.collider;
	
		switch(hitObject.name){		
			case "Enemy(Clone)":

				GameMaster.multiplyScore += 10;
				GameMaster.currentScore += GameMaster.multiplyScore;
				
				for(var i=0; i <= 3; i++){
					EnemyFragment(hitObject.gameObject);
				}
				
				Destroy(hitObject.gameObject);			
				break;
					
			default:
				GameMaster.multiplyScore = 0;
				break;
		}
	}
}

function EnemyFragment(hit : GameObject){
		// Variables to store the X position of the spawn object
//	    var x = hit.renderer.bounds.center;
//	    var y = hit.renderer.bounds.center;
//
//	    // Randomly pick a point within the spawn object
//	    var spawnPoint = new Vector3(hit.point.x, hit.point.y,8);
	    var spawnPoint = hit.renderer.bounds.center;

	    // Create an enemy at the 'spawnPoint' position
	    Instantiate(EnemyFragmentClone, spawnPoint, Quaternion.identity);
}