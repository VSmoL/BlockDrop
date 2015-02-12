#pragma strict

function Start () {
    if (GameMaster.gameFade){
    	fade();
    }
}

function fade(){
	while(GameMaster.gameFade){
		transform.renderer.material.color.a -= 0.02;
		yield WaitForSeconds(0.01);
		
//		Debug.Log(transform.renderer.material.color.a);
		
		if(transform.renderer.material.color.a <= 0){
			yield WaitForSeconds(0.2);
			while(transform.renderer.material.color.a <= 1){
				transform.renderer.material.color.a += 0.01;
				yield WaitForSeconds(0.01);	
			}
		}
	}
}