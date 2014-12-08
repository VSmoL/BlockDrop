#pragma strict

var screenBoxX  = Screen.width;
var screenBoxY  = Screen.height;

var scrollBoxX  = Screen.width  * 2;
var scrollBoxY  = Screen.height * 3;

var scrollPosition = Vector2.zero;

function OnGUI(){
	    scrollPosition = GUI.BeginScrollView(new Rect(0, 0, screenBoxX, screenBoxY),
                         scrollPosition, new Rect(0, 0, scrollBoxX, scrollBoxY));
                         
      	GUI.EndScrollView();
}