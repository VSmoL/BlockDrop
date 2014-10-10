using UnityEngine;
using System.Collections;

public class PlayGame : MonoBehaviour {
	private void OnGUI(){
		if (GUI.Button (new Rect (15, 15, 200, 110), "Play"))
						Application.LoadLevel("Game");
		}
}
