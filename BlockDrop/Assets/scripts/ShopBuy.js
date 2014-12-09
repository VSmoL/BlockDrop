#pragma strict

var shopUnlock : ShopCheckUnlocked;
var rotatingEnemy : GameObject;
var shopColorName;

public var buyButton : GameObject;
public var colorPrice : GameObject;
public var currencyGold : GameObject;
public var selectedText : GameObject;

function Update(){
	if(Input.GetMouseButtonDown(0)){
		var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		GameMaster.mousePressDown = hit.collider;
	}
	if(Input.GetMouseButtonUp(0)){
		 	hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
			var hitObjectUp = hit.collider;
				
			if(GameMaster.mousePressDown == hitObjectUp){			
				switch(hitObjectUp.name){	
					//Color shop
					case "ShopColorBuyButton":
						shopColorName = GameMaster.shopColorName;
						if (!EditorPrefsX.GetBool("Unlocked"+shopColorName)){
							if(PlayerPrefs.GetInt("TotalGoldBlock") >= ShopPrice.normalColorPrice){
								//Reduce total goldblocks
								PlayerPrefs.SetInt("TotalGoldBlock", PlayerPrefs.GetInt("TotalGoldBlock") - ShopPrice.normalColorPrice);
								
								//Save bought color
								EditorPrefsX.SetBool("Unlocked"+shopColorName, true);
								
								//Change rotating object
								rotatingEnemy.renderer.material.color.a = 1;
								rotatingEnemy.transform.FindChild("Locked").gameObject.SetActive(false);
								
								buyButton.SetActive(false);
								colorPrice.SetActive(false);
								currencyGold.SetActive(false);
								selectedText.SetActive(true);
								
								
								shopUnlock.checkUnlocks();
								shopUnlock.checkEnoughMoney();
							}
						}
					break;
				}			
			}
		}
}