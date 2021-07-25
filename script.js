var form = document.querySelector("#form");  //pegando o texto digitado
var inputItem = document.getElementById("inputItem"); // div lista item
var lista = document.querySelector("#listaItem"); // id da classe onde os ítens serão inseridos

// pegar lista do localStorage
const getBanco = () => JSON.parse(localStorage.getItem('lista')) ?? [];
// *muito louco*
// getBanco se true recebe {JSON.parse(localStorage.getItem('lista'))} ?? se false recebe [] 

// pegar lista do localStorage de outra forma, baseado no exercício:
/* getBanco();
 function getBanco() {
    var listaLocalStorage = localStorage.getItem('lista');
    if (listaLocalStorage) {
        listaLocalStorage = JSON.parse(listaLocalStorage);
    } else {
        listaLocalStorage = [];
    }
    return listaLocalStorage;
}  */


// salva lista no localStorage
function setBanco(banco){
    localStorage.setItem('lista', JSON.stringify(banco));
}

// se fosse um setBanco por arrow function:
/* const setBanco = (banco) => localStorage.setItem ('lista', JSON.stringify(banco)); */

function addItemNaLista(tarefa, status, indice) {
    if (tarefa){
        var novoItem = document.createElement('label');
        novoItem.classList.add('item');
        novoItem.innerHTML = `
            <input type="checkbox" ${status} data-indice=${indice}>
            <div> ${tarefa} </div>
            <input type="button" value="X" data-indice=${indice}>
        `;
        lista.appendChild(novoItem);
        inputItem.value = "";
        inputItem.focus();
    } else {
        alert("Favor inserir um item.");
    }
}

function limparTarefas(){
    while (lista.firstChild){
        lista.removeChild(lista.lastChild);
    }
}

function atualizarTela(){
    limparTarefas();
    const banco = getBanco();
    banco.forEach ( (item, indice) => addItemNaLista(item.tarefa, item.status, indice));
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
//    addItemNaLista(inputItem.value, '',''); //deixei de atualizar apenas a tela e passei a atualizar diretamente o array
    const banco = getBanco();
    banco.push({'tarefa': inputItem.value, 'status': ''})
    setBanco(banco);
    atualizarTela();
});

function removerItem(indice){
    const banco = getBanco();
    banco.splice(indice, 1); // recortar ou modificar array, remove a partir do índice que eu recebi o 1, então remove ele próprio
    setBanco(banco);
    atualizarTela();
}

function atualizarItem(indice){
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    //se o status do elemento no banco daquele índice for vazio então marca, senão deixa vazio/desmarca 
    setBanco(banco);
    atualizarTela();
}

function clickItem(evento){
    const elemento = evento.target;
    // console.log(elemento.type); verificação do elemento e seu índice
    if (elemento.type === 'button'){
        const indice = elemento.dataset.indice; // elemnto.dataset que é a propriedade do elemento data-indice
        removerItem (indice);
    } else if (elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;//dataset. mesmo nome que vai depois do data da função addItemNaLista
        atualizarItem (indice);
    }
}

// capturar quando o usutário clica na div
document.getElementById('listaItem').addEventListener('click', clickItem)

atualizarTela();
