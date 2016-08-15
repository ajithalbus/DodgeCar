#pragma strict
var speed : float;
function Start () {

}

function Update () {
transform.Translate(speed*Time.deltaTime,0,0);
if(transform.position.z<-5.0)
Destroy(gameObject);
}