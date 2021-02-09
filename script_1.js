var form = document.forms.regform;

var textBefore = document.getElementById('text-box__before-text'); 
var textAfter = document.getElementById('text-box__after-text'); 

var changeText = () => {
    let str = textBefore.textContent;
    console.log(str);

    textAfter.innerText = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
};