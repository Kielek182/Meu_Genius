const _data = {
    soms:[]
};
let order = [];
let clickedOrder = [];
let pontos = 0;

//0=botão-left-bottom ; 1=botão_right_bottom; 2=botão_right_top; 3=botão_left_top;

const botão_left_top = document.querySelector('.botão_left_top');
const botão_right_bottom = document.querySelector('.botão_right_bottom');
const botão_left_bottom = document.querySelector('.botão_left_bottom');
const botão_right_top = document.querySelector('.botão_right_top');

const soms= [
    "audio/simonSound1.mp3",
    "audio/simonSound2.mp3",
    "audio/simonSound3.mp3",
    "audio/simonSound4.mp3"   
];

soms.forEach(sndPath => {
    const audio = new Audio(sndPath);
    _data.soms.push(audio);
})
//teste botão iniciar
//.botão_inicio.addEventListerner("click",() => {
  //  .bot
//});

//Math.floor(arredonda numero sorteado),Math.random(sorteia)X quantidade de numeros;
let aleatorio = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        Acende(elementColor, Number(i) + 1);
    }
}
//Função Acende cor;
let Acende = (element, number) => {
    number = number * 500;
//setTimeout=Espera X tempo passar para retornar função
    setTimeout(() => {
        element.classList.add('selected');
    },number -250);
    setTimeout(() =>{
      element.classList.remove('selected')  
    });
}

//Checa botões clicados estão corretos;
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            Perdeu();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`pontuação: ${pontos} \n Você acertou!`);
        nextLevel();
    }
}
//Função p/ clique
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Função retorna cor;
let createColorElement = (color) =>{
    if(color == 0){
        return botão_left_bottom;
    } else if(color == 1){
        return botão_right_bottom;
    } else if(color == 2){
        return botão_right_top;        
    } else if(color == 3){
        return botão_left_top;
    }
}

//Função nivel
let nextLevel = () => {
    pontos++;
    aleatorio();
}

//Função Perdeu
let Perdeu = () => {
    alert(`pontuação: ${pontos}\nVocê Perdeu!\nClique em OK para recomeçar`);
    order = [];
    clickedOrder = [];

    playGame();
}
//Inicio Jogo
let playGame = () => {
    alert('Começando Jogo!');
    pontos = 0;

    nextLevel();
}

botão_left_bottom.onclick = () => click(0);
botão_right_bottom.onclick = () => click(1);
botão_right_top.onclick = () => click(2);
botão_left_top.onclick = () => click(3);




playGame();