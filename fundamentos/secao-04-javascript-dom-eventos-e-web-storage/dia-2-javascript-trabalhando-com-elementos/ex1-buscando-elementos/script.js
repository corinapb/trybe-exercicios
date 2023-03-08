// Acesse o elemento elementoOndeVoceEsta.

let elementoOndeEstou = document.getElementById("elementoOndeVoceEsta");

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let paiDoElemento = elementoOndeEstou.parentElement;

paiDoElemento.style.color = "red";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");

primeiroFilhoDoFilho.innerHTML = "Oie! Tudo bem?";

// Acesse o primeiroFilho a partir de pai.

let pai = document.getElementById("pai");

let primeiroFilhoDoPai = pai.firstChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

let primeiroFilhoDoElemento = elementoOndeEstou.previousSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

let atencao = elementoOndeEstou.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

let terceiroFilhoDoElemento = elementoOndeEstou.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.

let terceiroFilhoDoPai = pai.childNodes[3];