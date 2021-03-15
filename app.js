let checkbox = document.querySelector("#check");
let frontcard = document.querySelector(".front-card");
let backcard = document.querySelector(".back-card");

checkbox.addEventListener("click", showBackOfCard);

function showBackOfCard(){
    if (checkbox.checked == true){
        frontcard.style.display = "none";
        backcard.style.display = "block";
    } else{
        frontcard.style.display = "block";
        backcard.style.display = "none";
    }
}