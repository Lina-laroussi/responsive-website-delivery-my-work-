
/*****validation du nom*****

let name=document.getElementById('nom');
console.log(name);
let msg=document.getElementById('msg1');
name.addEventListener("blur",function(e){
    if(!name.value){
       msg.innerHTML="veuillez renseigner le nom";
       msg.style.color="red";
    }
})


/*********validation du prenom *
let surname=document.getElementById('pre');
console.log(surname);
let msg1=document.getElementById('msg2');
surname.addEventListener("blur",function(){
    if(!surname.value){
       msg1.innerHTML="veuillez renseigner le prenom";
       msg1.style.color="red";
    }
})


/*********validation de l'email *
let email=document.getElementById('email');
console.log(email);
let msg2=document.getElementById('msg3');
email.addEventListener("blur",function(){
    if(!email.value){
       msg2.innerHTML="veuillez renseigner l'email";
       msg2.style.color="red";
    }
})

/*********validation du tél *
let tel=document.getElementById('tel');
console.log(tel);
let msg3=document.getElementById('msg4');
tel.addEventListener("blur",function(){
    if(!tel.value){
       msg3.innerHTML="veuillez renseigner le tél";
       msg3.style.color="red";
    }
})

/*********validation du message *
let message=document.getElementById('msg');
console.log(message);
let msg4=document.getElementById('msg5');
message.addEventListener("blur",function(){
    if(!message.value){
       msg4.innerHTML="veuillez renseigner le message";
       msg4.style.color="red";
    }
})


//*****************validation du nom quand oon click sur le bouton envoyer *
let button=document.getElementById('btn');

button.addEventListener('click',function(event){
    if(!name.value){
       msg.innerHTML="veuillez renseigner le nom";
       msg.style.color="red";
       event.preventDefault();  
    }
})

*/

let msg6=document.getElementById('msg6');
let email=document.getElementById('email');
let button=document.getElementById('btn');
let name=document.getElementById('nom');
let tel=document.getElementById('tel');
button.addEventListener('click',function(){
    if((!email.value)&&(!name.value)&&(!tel.value)){
        msg6.innerHTML="veuillez remplir tous les  différents champs";
        msg6.style.color="red";
    }
    else{
        msg6.innerHTML="formulaire envoyée";
    }
})




/*un autre facon avec html pour valider le champ*/

/*function disableSubmit(disabled) {
  if (disabled) {
      button
      .setAttribute("disabled", true);
  } else {
      button
      .removeAttribute("disabled");
  }
}
*/
/*validation des champs avec REGEX*
let msg1=document.getElementById('msg1');
/*
name.addEventListener("input", function(e) {
  if (/^CODE-/.test(e.target.value)) {
    msg1.innerText = "nom valide";
    disableSubmit(false);
  } else {
   msg1.innerText = "nom invalide";
    disableSubmit(true);
  }
});
*/
var regexEmail = /\S+@\S+\.\S+/; 

let msg2=document.getElementById('msg3')

email.addEventListener('input',function(){
    if(!email.value.match(regexEmail)){
        msg2.innerHTML="email invalide";
        msg2.style.color="red";
    }
    else{
        msg2.innerHTML="email valide";
        msg2.style.color="red";
    }
})

var regexTel=[0-9];

let msg3=document.getElementById('msg4');
tel.addEventListener('input',function(){
    if(!tel.value.match(regexTel)){
        msg3.innerHTML="tel invalide,il doit contenir que des chiffres";
        msg3.style.color="red";
    }
    else{
        msg3.innerHTML="tel valide";
        msg3.style.color="red";
        }
})