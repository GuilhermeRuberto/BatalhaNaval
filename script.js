
let dificuldade = 0
let dificuldadeLinhas = 5


let numLinhas = dificuldadeLinhas;
let numColunas = dificuldadeLinhas;
let mat = [];




//zerar a matriz
for (let i = 0; i < numLinhas; i++) {
    mat[i] = [];
    
    for (let j = 0; j < numColunas; j++) {

        mat[i][j] = false;
    }
}

//função para aleatorizar os barcos//
function randomNum() {
    return parseInt(Math.random() * (dificuldadeLinhas - 0));
  }

//aleatorizar os barcos na matriz
if(dificuldade==0){
    for(i=0; i<11; i++){
        
        j=randomNum()
        k=randomNum()
        mat[j][k]=true
    }
}

console.log(mat)

