#pragma strict

var rotatingEnemy : GameObject;

function Update () {
		if(Input.GetMouseButtonUp(0)){
	
			var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
			var hitObject = hit.collider;
			
			switch(hitObject.name){
				case "Background":
					break;
					
				default:
					rotatingEnemy.renderer.material.color = hitObject.renderer.material.color;
					break;
			}
		}
}