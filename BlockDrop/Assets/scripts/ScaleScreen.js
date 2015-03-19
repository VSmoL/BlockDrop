#pragma strict

public var orthographicSize = 1;
public var aspect = 1;

function Start () {
	     Camera.main.projectionMatrix = Matrix4x4.Ortho(
             -orthographicSize * aspect, orthographicSize * aspect,
             -orthographicSize, orthographicSize,
             GetComponent.<Camera>().nearClipPlane, GetComponent.<Camera>().farClipPlane);
}