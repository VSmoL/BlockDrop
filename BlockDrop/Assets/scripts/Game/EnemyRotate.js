#pragma strict

function Start () {
	// Make the enemy rotate on itself
    rigidbody2D.angularVelocity = Random.Range(-200, 200);
}