#pragma strict

public var pressEffect : GameObject;

function Update () {
	if(Input.GetMouseButtonDown(0)){
	
		var mouseHit = Input.mousePosition;
		var mousePos = Camera.main.ScreenToWorldPoint(mouseHit);
		mousePos.z = 1;
		
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);		
		var hitObj = hit.collider;
		
//		Debug.Log(pressEffect.GetComponent(ParticleSystem).startRotation);
		
//		pressEffect.GetComponent(ParticleSystem).startRotation = Mathf.Sin(180);
//		//(Random.Range(0,361));
		
		if(hitObj.name == "Enemy(Clone)"){
			pressEffect.GetComponent(ParticleSystem).startColor = Color(0,1,0,1);
		}
		else if(hitObj.name == "EnemyEvil(Clone)"){
			pressEffect.GetComponent(ParticleSystem).startColor = Color(1,1,0,1);
		}
		else if(hitObj.name == "Background"){
			pressEffect.GetComponent(ParticleSystem).startColor = Color(1,0,0,1);
		}
		
		//var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		//var point : Vector2 = hit.origin + (hit.direction * distance);
		
		//var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		//var point : Vector2 = hit.origin + (hit.direction * distance);
		
		Instantiate(pressEffect, mousePos, Quaternion.identity);
	}
}