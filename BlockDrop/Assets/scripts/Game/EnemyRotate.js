#pragma strict

function Start () {
	// Make the enemy rotate on itself
    GetComponent.<Rigidbody2D>().angularVelocity = Random.Range(-200, 200);
}