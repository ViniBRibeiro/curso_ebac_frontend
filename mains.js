const form = document.getElementById('form_valores');

function confirmaValores(primeiroValor, segundoValor){
    const primeiroValor = document.getElementById('primeiroValor')
    const segundoValor = document.getElementById('segundoValor')

    if(segundoValor > primeiroValor){
        return true;
        
    }else{
        return false;
    }
}

form.addEventListener('submit', function (e){
    e.preventDefault();
})
