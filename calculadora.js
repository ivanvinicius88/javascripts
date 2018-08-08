global1 = '' ;
globalOperacao = '' ;
global2 = '';

function criarbr(div){
    var br = document.createElement("br");
    div.appendChild(br); 
}

var input = document.createElement("input");
container.appendChild(input);



criarbr(container); 

var num9  = document.createElement("input");
num9.setAttribute("value", "9");
num9.addEventListener("onclick", function(){
    if(global1 == null){
        global1 = '9';
        console.log(global1);
    }
    else if(global2 == null){
        global2 = '9';
        console.log(global2);
    }
});
num9.setAttribute("type", "button");
container.appendChild(num9);

var num8  = document.createElement("input");
num8.setAttribute("value", "8");
num8.addEventListener("onclick", function(){
    if(global1 == null){
        global1 = 8;
    }
    else if(global2 == null){
        global2 = 8;
    }
});
num8.setAttribute("type", "button");
container.appendChild(num8);


var num7  = document.createElement("input");
num7.setAttribute("value", "7");
num7.setAttribute("type", "button");
container.appendChild(num7);




criarbr(container); 

var num6  = document.createElement("input");
num6.setAttribute("value", "6");
num6.setAttribute("type", "button");
container.appendChild(num6);

var num5  = document.createElement("input");
num5.setAttribute("value", "5");
num5.setAttribute("type", "button");
container.appendChild(num5);

var num4  = document.createElement("input");
num4.setAttribute("value", "4");
num4.setAttribute("type", "button");
container.appendChild(num4);



criarbr(container); 

var num3  = document.createElement("input");
num3.setAttribute("value", "3");
num3.setAttribute("type", "button");
container.appendChild(num3);

var num2  = document.createElement("input");
num2.setAttribute("value", "2");
num2.setAttribute("type", "button");
container.appendChild(num2);

var num1  = document.createElement("input");
num1.setAttribute("value", "1");
num1.setAttribute("type", "button");
container.appendChild(num1);

var num0  = document.createElement("input");
num0.setAttribute("value", "0");
num0.setAttribute("type", "button");
container.appendChild(num0);





criarbr(container); 

var multiplicacao  = document.createElement("input");
multiplicacao.setAttribute("value", "*");
multiplicacao.setAttribute("type", "button");
container.appendChild(multiplicacao);

var divisao  = document.createElement("input");
divisao.setAttribute("value", "/");
divisao.setAttribute("type", "button");
container.appendChild(divisao);


var subtracao  = document.createElement("input");
subtracao.setAttribute("value", "-");
subtracao.setAttribute("type", "button");
container.appendChild(subtracao);

var soma  = document.createElement("input");
soma.setAttribute("value", "+");
soma.setAttribute("type", "button");
container.appendChild(soma);

var igual  = document.createElement("input");
igual.setAttribute("value", "=");
igual.setAttribute("type", "button");
container.appendChild(igual);
