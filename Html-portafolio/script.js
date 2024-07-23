function envio(){
    /* Catura dados */
    let email = document.querySelector('[type="email"]').value;
    let assunto = document.querySelector('[name="assunto"]').value;
    let menssagem = document.querySelector('[name="mensagem"]').value;
    let formL = document.querySelector('form');

    /* expresao regular email */
    let ValidaEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    /* Mensassgem enviado e error*/
    let mensajeEnvio = document.querySelector('.mensaje-envio');
    let errorDato = document.querySelector('.error-dato');
    
    

    formL.addEventListener('submit',function(event){
        event.preventDefault();
        document.querySelector('form >p').textContent = '';
        
        if(!ValidaEmail.test(email) === false && assunto.length >= 5 && menssagem.length >= 5){
            mensajeEnvio.textContent = 'Mensaje enviado';

            dataLayer.push({
                'event': 'evento_form_gtm_analytics'
            });

            setInterval(function(){
                mensajeEnvio.textContent = '';
            }, 2000);
            
        } else {
            errorDato.textContent = `Por favor verificar os dados ingressados`;
            setInterval(function(){
                errorDato.textContent = ''; 
            }, 10000);
        }
        formL.reset();
    })
}
