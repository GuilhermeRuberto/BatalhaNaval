var select = 0
var linhas = 0;
var colunas = 0;
var qntBarco = 10;
var qntTiros = 10;
var mat = [];


function createMat(rows, cols){
    //zerar a matriz
for (let i = 0; i < linhas; i++) {
    mat[i] = [];
    
    for (let j = 0; j < colunas; j++) {

        mat[i][j] = false;
    }
}

//função para aleatorizar os barcos//
function randomNum() {
    return parseInt(Math.random() * (linhas - 0));
  }

//aleatorizar os barcos na matriz
if(select==0){
    for(i=0; i<qntBarco; i++){
        
        j=randomNum()
        k=randomNum()
        mat[j][k]=true
    }
}

}



// Função para criar uma tabela
function createTable(rows, cols) {

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    // Criação do corpo da tabela
    const tbody = document.createElement('tbody');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.style.border = '1px solid black';
            td.style.padding = '10px';
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    return table;
}

// Função do clique do botão
document.getElementById('create-table').addEventListener('click', function() {
    const container = document.querySelector('.table-container');



    
select = document.querySelector('input[name=select]:checked').value;

if(select == 0){
    linhas = 5;
    colunas = 5;
    qntTiros = 15;
    
}
else if(select == 1){
    linhas = 8;
    colunas = 8;
    qntTiros = 18;
}
else{
    linhas = 10;
    colunas = 10;
    qntTiros = 25;
}
    
    // Limpa a tabela anterior, se existir
    container.innerHTML = '';
    // Cria e adiciona uma nova tabela
    const table = createTable(linhas, colunas); 
    container.appendChild(table);
    
});

