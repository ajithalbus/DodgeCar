#pragma strict
var car: GameObject;
var interval:float;
var nextFrame :float=0.0;
//private var gameObj : GameObject;
function Start () {
}

function Update () {
//
if(Time.time>nextFrame)
{var x = Mathf.Floor(Random.Range(0,3));
switch(x)
{case 0: x=-2.3;break;
case 1 : x=0;break;
case 2 : x=2.3;break;
}

var position: Vector3 = Vector3(x, .57, 10);
		Instantiate(car, position, Quaternion.identity);
nextFrame=(Time.time+interval);
}
}