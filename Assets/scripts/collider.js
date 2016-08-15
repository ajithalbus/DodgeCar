 #pragma strict

var crash : GameObject;

	
	
function OnTriggerEnter(col : Collider)
{
if(col.gameObject.tag=="Player")
{
GameController.life=0;
Instantiate(crash,transform.position+Vector3(0,0,-1),transform.rotation);
GetComponent.<AudioSource>().Play();
}
}