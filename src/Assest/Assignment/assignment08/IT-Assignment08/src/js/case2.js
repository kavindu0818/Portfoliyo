var letter =["red","green","blue","yellow","rose","purpule"];
var myIntervel;
function changeTextWithTimeout() {

    let last = letter.pop();
    letter.unshift(last);

    $("#div1").css('background-colour',letter[0]);
    $("#div2").css('background-colour',letter[1]);
    $("#div3").css('background-colour',letter[2]);
    $("#div4").css('background-colour',letter[3]);
    $("#div5").css('background-colour',letter[4]);
    $("#div6").css('background-colour',letter[5]);
}

setInterval(changeTextWithTimeout, 500);
myIntervel = setInterval(changeTextWithTimeout, 500)
