var yes = document.querySelector(".yes");
var no = document.querySelector(".no");
function loff() {
    const ques = document.querySelector(".question");
    const button = document.querySelector(".buttons");
    ques.style.transition = '1s';
    ques.innerHTML = "Allah Will Punish You";
    button.innerHTML = "";
}