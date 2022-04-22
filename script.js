for(vari=0:i<=10;i++){
    var div=document.createlement("div");
    div.style.height=Math.random() *50 + "px";
    div.style.width=Math.random() * 50 + "px";
    var r = Math.random() *255;
    var b = Math.random() * 255;
    var g = Math.random() *255;
    div.style.backgroundColor= "rbg(" +r+","+b+","+g+")";
    div.style.position ="absolute";
    div.style.left=Math.random()* 800 +"px"
    div.style.top=Math.random() *400 +"px"
    document.body.appendChild(div);
}
       
  