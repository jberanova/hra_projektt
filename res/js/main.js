const tlacitk01 = document.getElementById("tlacitk01");
const tlacitk02 = document.getElementById("tlacitk02");
const tlacitk03 = document.getElementById("tlacitk03");
const tlacitk04 = document.getElementById("tlacitk04");
const tlacitk05 = document.getElementById("tlacitk05");
const klic01 = document.getElementById("klic01");
const klic02 = document.getElementById("klic02");
const klic03 = document.getElementById("klic03");
const klic04 = document.getElementById("klic04");
const klic05 = document.getElementById("klic05");
const infoklicu = document.getElementById("infoklicu");

let klice = 0

window.onload = () => {
  if(parseInt(localStorage.getItem("klice")) != null){
  klice = parseInt(localstorage.getItem("klice"))
  
  }
   infoklicu.innerHTML = klice
   if(klice > 0){
    tlacitk01.style.display = "none"
  }
  if(klice > 1){
    tlacitk02.style.display = "none"
  }
  if(klice > 2){
    tlacitk03.style.display = "none"
  }
  if(klice > 3){
    tlacitk04.style.display = "none"
  }
  if(klice > 4){
    tlacitk05.style.display = "none"
  }
  }



klic01.onclick = () => {
  klic01.style.opacity = "0";
  klice++;
  infoklicu.innerHTML++
LocalStorage.setItem("klice", klice)
};


klic02.onclick = () => {
  klic02.style.opacity = "0";
  klice++;
  infoklicu.innerHTML++
LocalStorage.setItem("klice", klice)
};

klic03.onclick = () => {
  klic03.style.opacity = "0";
  klice++;
  infoklicu.innerHTML++
LocalStorage.setItem("klice", klice)
};

klic04.onclick = () => {
  klic04.style.opacity = "0";
  klice++;
  infoklicu.innerHTML++
LocalStorage.setItem("klice", klice)
};

klic05.onclick = () => {
  klic05.style.opacity = "0";
  klice++;
  infoklicu.innerHTML++
LocalStorage.setItem("klice", klice)
};

  





  
