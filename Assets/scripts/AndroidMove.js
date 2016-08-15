#pragma strict
  // Drag your player here
private var fp : Vector2;  // first finger position
private var lp : Vector2;  // last finger position

function Update()
{
    for (var touch : Touch in Input.touches)
    {
          if (touch.phase == TouchPhase.Began)
          {
                fp = touch.position;
                lp = touch.position;
          }
          if (touch.phase == TouchPhase.Moved )
          {
                lp = touch.position;
          }
          if(touch.phase == TouchPhase.Ended)
          { 
      
                if((fp.x - lp.x) > 80) // left swipe
          {
       transform.position.x=transform.position.x-2.3;
               
       
          }
          else if((fp.x - lp.x) < -80) // right swipe
          {
             transform.position.x=transform.position.x+2.3;  
          }
         /* else if((fp.y - lp.y) < -80 ) // up swipe
          {
                 // add your jumping code here
          }*/
     }}
 }