const pessoa = {
    nome: 'Oksana',
    sobrenome: 'Astankova',
    codinome: 'Villanelle',
    obsessao: 'Eve Polastri',

    eve: true,

    imgSemEve: 'https://64.media.tumblr.com/e600be5a1d17de6bd7a05b867f560aa2/tumblr_p8c4l84kOr1sjinpqo6_400.gif',
    imgComEve: 'https://i.pinimg.com/originals/60/21/38/60213864c0eab625bfbc01d4aa8d9d4b.gif',
}

const elementoNome = document.getElementById('nome');
const elementoSobrenome = document.getElementById('sobrenome');
const elementoCodinome = document.getElementById('codinome');
const elementoObsessao = document.getElementById('obsessao');

elementoNome.innerText = pessoa.nome;
elementoSobrenome.innerText = pessoa.sobrenome;
elementoCodinome.innerText = pessoa.codinome;
elementoObsessao.innerText = pessoa.obsessao;

function atualizarHumor(){
    const elementoImagem = document.getElementById('imagem');
    const blocoHumor = document.getElementById('bloco_humor');

    if (pessoa.obcecada) {
        elementoImagem.src = pessoa.imgComEve;
        blocoHumor.innerText = pessoa.codinome + ' junto com a Eve!';
    } else {
        elementoImagem.src = pessoa.imgSemEve;
        blocoHumor.innerText = pessoa.codinome + ' está triste sem a Eve ):';
    }
}

atualizarHumor();

const botaoAlterarHumor = document.getElementById('alterarHumor');
botaoAlterarHumor.addEventListener('click', function () {
    pessoa.obcecada = !pessoa.obcecada;

    atualizarHumor();
});
