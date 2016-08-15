#pragma strict
var speed : float;
function Start () {

}

function Update () {
GetComponent.<Renderer>().material.SetTextureOffset("_MainTex", Vector2(0,Time.time*speed));

}