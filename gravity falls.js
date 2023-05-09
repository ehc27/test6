var imagens = ["gravity falls.jpeg","dipper.jpeg", "mabel.jpeg", "soos.jpg", "stanford.jpeg", "stanley.jpeg", "waddles.jpeg", "wendy.jpg"]
var personagens = ["personagens","dipper", "mabel", "soos", "stanford", "stanley", "waddles", "wendy"]
var inicio = 0;
function alterar(){
inicio++
var numero = 7;
if (inicio>numero){
    inicio = 0;
}
var imagem_atual = imagens[inicio]
var personagem_atual = personagens[inicio]
document.getElementById("imagem").src = imagem_atual;
document.getElementById("legenda").innerHTML = personagem_atual;
}