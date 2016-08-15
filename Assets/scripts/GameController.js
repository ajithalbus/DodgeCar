#pragma strict
static var life : int = 1;
var gameOver : GameObject;
function Start () {

}

function Update () {
if(life==0)
{
Time.timeScale = 0;

go();
life=-1;
}
}
function go()
{
Instantiate(gameOver,Vector3(-3.12,-0.06,1.84),transform.rotation);
}