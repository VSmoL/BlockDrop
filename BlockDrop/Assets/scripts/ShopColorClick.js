#pragma strict

var rotatingEnemy : GameObject;
public var buyButton : GameObject;
public var colorPrice : GameObject;
public var currencyGold : GameObject;
public var selectedText : GameObject;

function Start(){
	rotatingEnemy.renderer.material.color = EditorPrefsX.GetColor("enemyColor");
}

function Update () {
	if(Input.GetMouseButtonDown(0)){
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		GameMaster.mousePressDown = hit.collider;
	}
	if(Input.GetMouseButtonUp(0)){

		var hit2 : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		var hitObjectUp = hit2.collider;
		
		if(GameMaster.mousePressDown == hitObjectUp){	
			if (hitObjectUp.tag == "Color"){
				//Add color to big enemy object
				rotatingEnemy.renderer.material.color = hitObjectUp.renderer.material.color;
					
				//Check is color unlocked
				if (!EditorPrefsX.GetBool("Unlocked"+hitObjectUp.name)){
					GameMaster.shopColorName = hitObjectUp.name;
				
					rotatingEnemy.transform.FindChild("Locked").gameObject.SetActive(true);
					buyButton.SetActive(true);
					colorPrice.SetActive(true);
					currencyGold.SetActive(true);
					selectedText.SetActive(false);
				}
				else if (EditorPrefsX.GetBool("Unlocked"+hitObjectUp.name)){
					EditorPrefsX.SetColor("enemyColor", hitObjectUp.renderer.material.color);
					rotatingEnemy.transform.FindChild("Locked").gameObject.SetActive(false);
					buyButton.SetActive(false);
					colorPrice.SetActive(false);
					currencyGold.SetActive(false);
					selectedText.SetActive(true);
				}
			}
		}
	}
}
