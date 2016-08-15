#pragma strict
var pave  : GameObject;
var temp : GameObject;
var temp2 : GameObject;
function Start () {
var position: Vector3 = Vector3(4.05, 0.04, 2.86);
		temp=Instantiate(pave, position,Quaternion.Euler(0,90,0));
	position=Vector3(-4.05,0.04, 2.86);
		temp2=Instantiate(pave, position,Quaternion.Euler(0,90,0));

}

function Update () {
if(temp.transform.position.z<2.1)
{var position: Vector3 = Vector3(4.05, 0.04, 2.86);
		temp=Instantiate(pave, position, Quaternion.Euler(0,90,0));
}



if(temp2.transform.position.z<2.1)
{ position = Vector3(-4.05, 0.04, 2.86);
		temp2=Instantiate(pave, position, Quaternion.Euler(0,90,0));
}

}