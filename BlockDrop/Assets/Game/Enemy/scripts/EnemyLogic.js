#pragma strict

function OnMouseDown()
{
  Destroy(gameObject);
}

function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name;

    // If it collided with a bullet
    if (name == "bottomheader") {
        // Destroy itself (the enemy)
        Destroy(gameObject);
        Application.LoadLevel("MainMenu");
    }
}