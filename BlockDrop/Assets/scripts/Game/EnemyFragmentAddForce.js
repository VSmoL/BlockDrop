#pragma strict

function Start () {
	addForce();
	InvokeRepeating("addTransparent",0,0.01);
	minimizeHalf();
    InvokeRepeating("minimize",0,0.1);
}

function addForce(){
	GetComponent.<Rigidbody2D>().AddForce(new Vector2(Random.Range(-150, 150),Random.Range(-150, 150)));
}

function addTransparent(){
	transform.GetComponent.<Renderer>().material.color.a -= 0.01;
}

function minimizeHalf(){
	transform.localScale.y = GameStart.enemySizeY * 0.5;
    transform.localScale.x = GameStart.enemySizeX * 0.5;
}

function minimize(){
	transform.localScale.y = transform.localScale.y * 0.9;
    transform.localScale.x = transform.localScale.x * 0.9;
}

function Update(){
	if (transform.GetComponent.<Renderer>().material.color.a <= 0.001){
		Destroy(gameObject);
	}
}