#pragma strict

function Start () {
    if (GameMaster.gameFade){
    	fade();
    }
}

function fade(){
	while(GameMaster.gameFade){
		transform.GetComponent.<Renderer>().material.color.a -= 0.02;
		yield WaitForSeconds(0.01);
		
//		Debug.Log(transform.renderer.material.color.a);
		
		if(transform.GetComponent.<Renderer>().material.color.a <= 0){
			yield WaitForSeconds(0.2);
			while(transform.GetComponent.<Renderer>().material.color.a <= 1){
				transform.GetComponent.<Renderer>().material.color.a += 0.01;
				yield WaitForSeconds(0.01);	
			}
		}
	}
}