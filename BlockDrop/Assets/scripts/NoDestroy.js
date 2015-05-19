#pragma strict

private static var instance : NoDestroy;
public static function GetInstance() : NoDestroy { return instance; }

function Awake() { 
	if (instance != null && instance != this){ 
		Destroy(this.gameObject); 
		return; 
	} 
	else { 
		instance = this; 
	}
 	DontDestroyOnLoad(this.gameObject); 
}