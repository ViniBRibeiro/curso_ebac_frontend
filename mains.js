const form = document.getElementById('form_valores');

form_valores.addEventListener('submit', function (e){
    let primeiroValor = parseInt(document.getElementById('primeiro-valor').value);
    let segundoValor = parseInt(document.getElementById('segundo-valor').value);
    const confirmação = document.getElementById('envio-confirmado');
    const mensagemErro = document.getElementById('error-message');
    e.preventDefault();

    if((primeiroValor) < (segundoValor)){
        confirmação.style.display = '';
        confirmação.innerHTML = 'Confirmado, você digitou os valores corretos!';
        confirmação.style.backgroundColor = '#129912';
        confirmação.style.color = '#fff';

        mensagemErro.style.display = 'none';
    } else {
        mensagemErro.style.display = '';
        mensagemErro.innerHTML = 'O segundo valor deve ser maior que o primeiro, tente novamento.';
        mensagemErro.style.color = '#fff';
        mensagemErro.style.backgroundColor = '#ff3e3e';
        
        confirmação.style.display = 'none';
    }
});

