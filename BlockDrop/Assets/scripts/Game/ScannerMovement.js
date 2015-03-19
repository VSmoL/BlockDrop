#pragma strict

function Start () {
	while (!GameMaster.GameOver){
		while (transform.position.y > -5.0){
			yield WaitForSeconds(0.01);
			transform.position.y -= 0.1;
		}
		
		while (transform.position.y < 5.0){
			yield WaitForSeconds(0.01);
			transform.position.y += 0.05;
		}
		increaseScanner();
	}
}

function increaseScanner(){
	transform.localScale.y += 0.05;
}