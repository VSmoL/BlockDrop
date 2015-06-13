#pragma strict

	var percentageValue : float;

function Start () {
	if (GameMaster.gameFade){
//    	Debug.Log(GameMaster.enemyMovementSpeed);
//    	Debug.Log(transform.GetComponent(Rigidbody2D).velocity.y);
    	percentageValue = transform.GetComponent(Rigidbody2D).velocity.y / GameMaster.enemyMovementSpeed;
    	fade();
    }
}

function fade(){
	while(GameMaster.gameFade){
		transform.GetComponent.<Renderer>().material.color.a -= 0.02 * percentageValue;
		yield WaitForSeconds(0.01);
		
//		Debug.Log(transform.renderer.material.color.a);
		
		if(transform.GetComponent.<Renderer>().material.color.a <= 0){
			yield WaitForSeconds(0.2);
			while(transform.GetComponent.<Renderer>().material.color.a <= 1){
				transform.GetComponent.<Renderer>().material.color.a += 0.01 * percentageValue;
				yield WaitForSeconds(0.01);	
			}
		}
	}
}