#pragma strict

function Start () {
	addForce();
	InvokeRepeating("addTransparent",0,0.01);
	minimizeHalf();
	InvokeRepeating("minimize",0,0.01);
	yield WaitForSeconds(1.5);
}

function addForce(){
	rigidbody2D.AddForce(new Vector2(Random.Range(-150, 150),Random.Range(-150, 150)));
}

function addTransparent(){
	transform.renderer.material.color.a -= 0.004;
}

function minimizeHalf(){
	transform.localScale.y = GameStart.enemySizeY * 0.75;
    transform.localScale.x = GameStart.enemySizeX * 0.75;
}

function minimize(){
	transform.localScale.y -= 0.002;
    transform.localScale.x -= 0.002;
}

function Update(){
	if (transform.renderer.material.color.a <= 0.001){
		Destroy(gameObject);
	}
}