#pragma strict

var playerSpeed : float;
var backSpeed : float;
//private var nextFire : float = 0.0;
var stroke : float;
private var keyLock:int=0;
function Start () {

}

function Update () {

if(keyLock==1&&Input.GetKeyUp(KeyCode.LeftArrow)) keyLock=0;
if(keyLock==2&&Input.GetKeyUp(KeyCode.RightArrow)) keyLock=0;

transform.position.z=transform.position.z-(backSpeed*Time.deltaTime);

if (Input.GetKey (KeyCode.LeftArrow)&&keyLock==0) {
keyLock=1;
//nextFire = Time.time+stroke;
transform.position.x=transform.position.x-2.3;
//transform.Rotate (new Vector3 (0f, -1f, 0f)); 
}

if (Input.GetKey (KeyCode.RightArrow)&&keyLock==0) { //&&Time.time >(nextFire)
keyLock=2;
//nextFire = Time.time+stroke; not needed after keyLock
transform.position.x=transform.position.x+2.3;
//transform.Rotate (new Vector3 (0f, 1f, 0f)); 
}

//transform.Translate(Input.GetAxisRaw("Horizontal")*Time.deltaTime*playerSpeed,0,0);
transform.position.x=Mathf.Clamp(transform.position.x,-2.3,2.3);
//transform.position.z=Mathf.Clamp(transform.position.z,-2.8,2.8);
}