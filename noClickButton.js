var yes = document.querySelector(".yes");
var no = document.querySelector(".no");
function loff() {
    const ques = document.querySelector(".question");
    const button = document.querySelector(".buttons");
    ques.style.transition = '1s';
    ques.style.color = "red";
    ques.innerHTML = "<h1>Allah Will Punish You<br><br>Your Dick Will<br>Regenarate Soon</h1>";
    button.innerHTML = "";
}
