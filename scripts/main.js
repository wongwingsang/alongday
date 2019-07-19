
//show the time
function showTime() {
    var today = new Date(); //get the date and saved in [today]
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);    
    document.getElementById("time").innerHTML = h+" : "+m+" : "+s;
    setTimeout(showTime, 1000); //do it on every sec.
}

 //add 0 in front of number<10
function checkTime(i){
    if(i<10) {i = "0" + i };
    return i;
}

// make the img change 
function change() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var img = document.getElementById("myImg");

    img.src = "photos/08s/0904 08-"+ m +"-"+ s +".jpg";
    setTimeout(change,1000);
  }
 