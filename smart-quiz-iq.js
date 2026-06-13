const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

showToast("Neon Theme Active");

});

function showToast(message){

const toast =
document.getElementById("toast");

toast.innerText=message;

toast.style.display="block";

setTimeout(()=>{

toast.style.display="none";

},3000);

}

document
.querySelectorAll(".challenge-card")
.forEach(card=>{

card.addEventListener("click",()=>{

showToast(
card.innerText + " Started"
);

});

});

function askAI(){

const question =
document.getElementById("aiInput").value;

if(question===""){

showToast(
"Enter a question"
);

return;
}

showToast(
"AI Quiz Assistant Processing..."
);

}
