function zarAt(){
    var zar1=document.getElementById("zar1");
    var zar2=document.getElementById("zar2");

    var deger1=Math.floor(Math.random()*6)+1;
    var deger2=Math.floor(Math.random()*6)+1;
    var toplamSonuc=document.getElementById("toplamSonuc");
    var sonucDurum=document.getElementById("sonucDurum");
    var sonuc=deger1+deger2;
    var gele=0;
    zar1.innerHTML=deger1;
    zar2.innerHTML=deger2;
    toplamSonuc.innerHTML="Atılan Zar Toplamı :"+" "+sonuc;
    if(deger1==deger2){
        sonucDurum.innerHTML="Çift attın";
    }
   
    else if(Math.abs(deger1-deger2)==2){
        sonucDurum.innerHTML="Kapı zarı";
    }
    else{
        sonucDurum.innerHTML="Gele";
    }
}
