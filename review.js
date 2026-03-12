document.getElementById("submitBtn").addEventListener("click", submitReview);

function submitReview(){

let name = document.getElementById("name").value;
let reviewText = document.getElementById("reviewText").value;
let rating = document.getElementById("rating").value;
let message = document.getElementById("message");

if(name === "" || reviewText === ""){
message.innerText = "Please fill all fields!";
message.style.color = "red";
return;
}

let reviewCard = document.createElement("div");
reviewCard.classList.add("review-card");

reviewCard.innerHTML = `
<div class="review-name">${name}</div>
<div class="stars">${rating}</div>
<div class="review-text">${reviewText}</div>
`;

document.getElementById("reviewContainer").appendChild(reviewCard);

/* show thank you message */

message.innerText = "Thank you for your review!!!";
message.style.color = "#e07b00";

/* clear form */

document.getElementById("name").value = "";
document.getElementById("reviewText").value = "";
document.getElementById("rating").value = "★★★★★";

}