function provera(x){
    let naslov=document.getElementById('naslov');
  if(x==1){
    naslov.style.textShadow='1px 1px 2px blue';
  }
  else if(x==2){
  naslov.style.textShadow='none';
}
}

let niz=['konsultacija', 'koncept', 'specifikacije', 'uredjivanje'];
niz.push("zavrsetak");
let tabela=document.getElementById('tabela');
let container=document.getElementById('container');
function listaj(){
   
    let ispis="";
    ispis+=`<table width='200px' border="1px solid black"><caption>Kako servis funkcionise</caption>`;
    for(let i=0;i<niz.length;i++){
       ispis+=`<tr>
       <td>${i+1}</td>
       <td>${niz[i]}</td>
       </tr>`;
    }
    ispis+=`</table>`;
   tabela.innerHTML=ispis;
}

function preuzimanje(){
    let ime=forma.ime.value;
    let prezime=forma.prezime.value;
    let email=forma.email.value;

    alert(`podaci:\n ime:${ime}\n prezime:${prezime}\n email:${email.toLowerCase()}`);
}

function klikni(){
    let pisi="kliknite da bi ste uneli podatke";
    let p=document.getElementById('p');
    return p.innerHTML=pisi;
}

function povecanje(y){
    let kontakt=document.getElementById("kontakt");
     if(y==2){
      kontakt.style.fontSize="55px";
      kontakt.style.color="blue";
     } else if(y==1){
        kontakt.style.fontSize="30px";
        kontakt.style.color="black";
     }
}

