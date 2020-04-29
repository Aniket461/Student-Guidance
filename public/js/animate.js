
window.onscroll = function changeClass(){
    var box = document.getElementById('t1');
    var box1 = document.getElementById('t2');
    var box2 = document.getElementById('t3');
    var box4 = document.getElementById('a1');
    var box5 = document.getElementById('a2');
    var box6 = document.getElementById('a3');

    var scrollPosY = window.pageYOffset | document.body.scrollTop;

    if(scrollPosY > 250 && scrollPosY<350) {
        console.log("hereee 250");
        box.className = ('vid1 animated bounce');
        box1.className = ('vid1 animated bounce');
        box2.className = ('vid1 animated bounce');

  } else if(scrollPosY <= 250) {
       box.className =  ('vid1');
       box1.className =  ('vid1');
       box2.className =  ('vid1');
       box4.className =  ('vid1');
       box5.className =  ('vid1');
       box6.className =  ('vid1');
  }
  else if(scrollPosY > 550) {
      console.log("hereee");
      box4.className =  ('vid1 animated fadeInUp');  
    box5.className =  ('vid1 animated fadeInUp');
    box6.className =  ('vid1 animated fadeInUp');
}
else if(scrollPosY <= 550){
    box4.className =  ('vid1');
    box5.className =  ('vid1');
    box6.className =  ('vid1');
 
}

}