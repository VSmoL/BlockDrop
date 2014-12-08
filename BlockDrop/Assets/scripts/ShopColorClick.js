#pragma strict

var rotatingEnemy : GameObject;
public var buyButton : GameObject;
public var colorPrice : GameObject;
public var currencySilver : GameObject;
public var unlockedText : GameObject;

function Start(){
	rotatingEnemy.renderer.material.color = EditorPrefsX.GetColor("enemyColor");
}

function Update () {
	if(Input.GetMouseButtonUp(0)){

		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObject = hit.collider;
		
		if (hitObject.tag == "Color"){
			//Add color to big enemy object
			rotatingEnemy.renderer.material.color = hitObject.renderer.material.color;
				
			//Check is color unlocked
			if (!EditorPrefsX.GetBool("Unlocked"+hitObject.name)){
				rotatingEnemy.transform.FindChild("Locked").gameObject.SetActive(true);
				buyButton.SetActive(true);
				colorPrice.SetActive(true);
				currencySilver.SetActive(true);
				unlockedText.SetActive(false);
			}
			else if (EditorPrefsX.GetBool("Unlocked"+hitObject.name)){
				EditorPrefsX.SetColor("enemyColor", hitObject.renderer.material.color);
				rotatingEnemy.transform.FindChild("Locked").gameObject.SetActive(false);
				buyButton.SetActive(false);
				colorPrice.SetActive(false);
				currencySilver.SetActive(false);
				unlockedText.SetActive(true);
			}
		}
	}
}
