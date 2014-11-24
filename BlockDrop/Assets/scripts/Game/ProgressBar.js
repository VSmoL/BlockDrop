var barDisplay : float = 0; 
var needLvlExp : float = 200;
var gotLvLExp : float = GameMaster.endMultipliedScore;

var pos : Vector2 = new Vector2(20,40); 
var size : Vector2 = new Vector2(Screen.width,Screen.height * 0.05); 

var progressBarFull : Texture2D;
var progressBarBackground : Texture2D;

function OnGUI() {

//	function OnGUI() {

//	 // draw the background:
//	 GUI.BeginGroup (new Rect (0, 0, Screen.width, Screen.height * 0.05));
//	 GUI.Box (Rect (0,0, Screen.width, Screen.height * 0.05),progressBarBackground);
//	 GUI.EndGroup ();
 
 		 
	 // draw the filled-in part:
	 GUI.BeginGroup (new Rect (0, 0, Screen.width * barDisplay, Screen.height * 0.05));
	 GUI.Box (Rect (0,0, Screen.width, Screen.height * 0.05),progressBarFull);
	 GUI.EndGroup ();
 
//}
//
//	 // draw the background:
//	 GUI.BeginGroup (new Rect (88, 297, (progressBarFull.width * 0.17) * barDisplay, progressBarFull.height * 0.15));
//	 GUI.DrawTexture (Rect (100,100, progressBarFull.width * 0.17, progressBarFull.height * 0.20),progressBarFull);
//	 GUI.EndGroup ();
	 
}

function Update() { 
// for this example, the bar display is linked to the current time, 
// however you would set this value based on your desired display 
// eg, the loading progress, the player's health, or whatever. 
	if (barDisplay < (gotLvLExp / needLvlExp)){
		barDisplay += (gotLvLExp / needLvlExp) * 0.01;
		if (barDisplay >= 1){
			barDisplay = 0;
			gotLvLExp -= needLvlExp;
		}
	}
}