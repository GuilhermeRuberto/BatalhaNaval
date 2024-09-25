var select = 0
var linhas = 10;
var colunas = 10;
var qntBarco = 10;
var qntTiros = 10;
var forceReload = true
var alerta = ""
var mat = [];


// Função para criar e aleatorizar a matriz
function createMat(rows, cols) {
    // Zerar a matriz
    mat = []; // Limpa a matriz antes de inicializar
    for (let i = 0; i < rows; i++) {
        mat[i] = [];
        for (let j = 0; j < cols; j++) {
            mat[i][j] = false; // Célula vazia
        }
    }

    // Função para gerar números aleatórios
    function randomNum(limit) {
        return Math.floor(Math.random() * limit);
    }

    // Aleatorizar os barcos na matriz
    for (let i = 0; i < qntBarco; i++) {
        let j, k;
        do {
            j = randomNum(rows);
            k = randomNum(cols);
        } while (mat[j][k]);
        mat[j][k] = true;
    }
}



// Função para criar uma tabela
function createTable(rows, cols) {

    const table = document.createElement('table');
    

    // Criação do corpo da tabela
    const tbody = document.createElement('tbody');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.classList.add('cell');
            row.appendChild(td);
            
            // Insere o valor da matriz na célula
            td.textContent = mat[i][j] ? '' : ''; // Exibe um barco se true, caso contrário, deixa vazio
            td.addEventListener('click', function() {
                
            

              let marca = mat[i][j];

              

              if(marca == true){
                td.classList.toggle('acertou');
                qntBarco--
                qntTiros--
                
                alteraLabel()
              }
              else if(marca == false){
                td.classList.toggle('errou');
                qntTiros--
                alteraLabel()
               }

               if(qntTiros==0){
                alert("Voce Perdeu")
                window.location.reload(true);
               }
               if(qntBarco==0){
                alert("Voce Ganhou")
                window.location.reload(true);
               }
            });
            
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    return table;
}



//Função alteraLabel
function alteraLabel() {
    document.getElementById("tiros").innerHTML =qntTiros;
  }

//Função limpa container table
function limpacont(){
    const container = document.querySelector('.table-container');
    container.innerHTML = '';
}

// Função do clique do botão
document.getElementById('create-table').addEventListener('click', function() {
    const container = document.querySelector('.table-container');



    
select = document.querySelector('input[name=select]:checked').value;

if(select == 0){
    linhas = 5;
    colunas = 5;
    qntTiros = 20;
    alerta = "Facil"
}
else if(select == 1){
    linhas = 8;
    colunas = 8;
    qntTiros = 40;
    alerta = "Médio"
}
else{
    linhas = 10;
    colunas = 10;
    qntTiros = 50;
    alerta = "Dificil"
}


    alert(alerta)

    alteraLabel()

    // Cria a matriz e aleatoriza os barcos
    createMat(linhas, colunas);

    // Limpa a tabela anterior, se existir
    limpacont()

    // Cria e adiciona uma nova tabela
    const table = createTable(linhas, colunas); 
    
   
    container.appendChild(table);
    
});

