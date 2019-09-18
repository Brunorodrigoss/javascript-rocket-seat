/*
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.
<input type="text" name="user">
<button onclick="">Adicionar</button>
Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>
*/
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button')
var listElement = document.querySelector('#app ul')

buttonElement.onclick = function() {
    listElement.innerHTML = '';
    var lista = []
    var userNameText = inputElement.value;
    
    var URL = "https://api.github.com/users/"+userNameText+"/repos"
    axios.get(URL)
        .then(function(response){
            var result = response.data;

            while(response.request.readyState != 4) {
                lista.push('Carregando...')
            }

            for(todo of result) {
                addElement(todo.name);
            }
        })
        .catch(function(error) {
        console.warn(error);
        })
        inputElement.value = ''
}

function addElement(name) {
    var repoElement = document.createElement('li');
    var repoText = document.createTextNode(name);

    repoElement.appendChild(repoText)
    listElement.appendChild(repoElement)
}