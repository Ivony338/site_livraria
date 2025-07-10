
// RESUMO: Clicou - Se for none passa para block e 
//se for block passa para none

//1- Usuário clica bo botão whatsApp - executa função showMessage()
const showMessage = ()=> {
    var divMessage = document.getElementById('whats-message');
    var propDisplay = window.getComputedStyle(divMessage).display;

    //2- Verifica se propriedade display tem valor "none" 
    
    if (propDisplay == 'none') {

        //3- Se valor for "none" modifica para "block"
        divMessage.style.display = 'block';
        //4- Caso contrário (valor está em "block") modifica para "none"
    } else {
        divMessage.style.display = 'none';

    }

}


/* Envia messagem para um numero de wathasApp */
const enviaMsg = ()=> {
    const numero = 5511976062338
    const mensagem = document.getElementById('msg').value;
    //aumentar a segurança
const msgCodificada = encodeURIComponent(mensagem);



    // Evita o envio se a caixa de texto estiver vazia contando com  espaços
    if(!mensagem.trim()){
        alert('Por favor digite uma mensagem!');
        //Interrope a função
        return
    }

    //concatenação usando interpolação de variaveis $(variavel)
    const url = `https: //wa.me/${numero}?${msgCodificada}`;
    
    /* Abre a URL do whatsAapp com os paramentros passados */
    window.open(url, '_blank');
}