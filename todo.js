
const gomb = document.querySelector('.gombToDo');
const ul = document.querySelector('.ide');
let data =document.querySelector('.bevitel');
let adat;
let adat2;
let hatralevoIdo;
gomb.addEventListener('click',adatBeszerezesDatum);
gomb.addEventListener('click',adatBeszerezes);
gomb.addEventListener('click',adjuk);
ul.addEventListener('click',proba);

function adatBeszerezesDatum(){
    let data2 =document.querySelector('.bevitelDatum');
    adat2=data2.value;
    data2.value="";

}
function adatBeszerezes(){
    let data =document.querySelector('.bevitel');
    adat=data.value;
    data.value ="";

}

    
function adjuk (){
    if(adat != "" && adat2 !=""){
    let ul = document.querySelector('.ide');
    let li = document.createElement('li');
    li.innerHTML=`
    
    <div class="h1">
    <h1>${adat}</h1>
    </div>
    <div class="hatralevo">
    <p>Határidő <br> ${adat2}</p>
    </div>
    <div class="gombok">
    <p class="szunet">SZÜNETELTETVE</p>
    <button class ="gomb2" name="gomb2">törlés</button>
    <button class ="gomb3" name="gomb3">szünet</button>
    </div>
    `;

        ul.appendChild(li);

}}

data.onkeypress = function(e){
    
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        adatBeszerezes();
      // Enter pressed
      if(adat != ""){
        let ul = document.querySelector('.ide');
        let li = document.createElement('li');
        li.innerHTML=`
        
        
        <div class="h1">
    <h1>${adat}</h1>
    </div>
    <div class="hatralevo">
    <p>Határidő</p><p>${adat2}</p>
    </div>
        <div class="gombok">
        <p class="szunet">SZÜNETELTETVE</p>
        <button class ="gomb2" name="gomb2">törlés</button>
        <button class ="gomb3" name="gomb3">szünet</button>
        </div>
        `;
    
            ul.appendChild(li);
    }
  }}
function proba(e){
    let szunet =e.target.previousElementSibling.previousElementSibling;
    let szunet2 = e.target.previousElementSibling;
    let szulo = e.target.parentElement.parentElement;
    let szuneteltetve = e.target;
    let hatterSzin = "rgb(" + 247 + "," + 247 + "," + 247 + ")"
    if(e.target.name === "gomb2"){
        if(szunet2.className == "szunetVis") {return}
        else{
        szulo.classList.add('hidden')
        setTimeout(function(){szulo.remove();}, 500); }

    }
    if(e.target.name ==="gomb3"){
        if(szulo.style.backgroundColor == "grey" && szunet.className == "szunetVis"){
            szulo.style.backgroundColor =hatterSzin;
            szunet.classList.remove('szunetVis')
            szunet.classList.add("szunet")
            szuneteltetve.innerText="szünet"
        }
            
        else{
            szulo.style.backgroundColor="grey";
            szunet.classList.add('szunetVis')
            szunet.classList.remove('szunet')
            szuneteltetve.innerText="Folytatás";
        }
}};