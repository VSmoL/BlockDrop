#pragma strict

function Start () {
	addForce();
	InvokeRepeating("addTransparent",0,0.01);
	minimizeHalf();
    InvokeRepeating("minimize",0,0.1);
}

function addForce(){
	rigidbody2D.AddForce(new Vector2(Random.Range(-150, 150),Random.Range(-150, 150)));
}

function addTransparent(){
	transform.renderer.material.color.a -= 0.004;
}

function minimizeHalf(){
	transform.localScale.y = GameStart.enemySizeY * 0.90;
    transform.localScale.x = GameStart.enemySizeX * 0.90;
}

function minimize(){
	transform.localScale.y = transform.localScale.y * 0.90;
    transform.localScale.x = transform.localScale.x * 0.90;
}

function Update(){
	if (transform.renderer.material.color.a <= 0.001){
		Destroy(gameObject);
	}
}