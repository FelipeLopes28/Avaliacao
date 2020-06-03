        var trocaFundo = document.querySelector('.trocaFundo')
        var trocaLogoSI = document.querySelector('.trocaLogoSI')
        var trocaRodape = document.querySelector('.trocaRodape')
        var apagacancelar = document.querySelector('.apagacancelar')
        var enviar = document.querySelector('.enviar')
        var cancelar = document.querySelector('.cancelar')

        var matricula = document.querySelector('.matricula');
        var senha = document.querySelector('.senha');



trocaFundo.addEventListener('click', trocaFundoTodo);
trocaRodape.addEventListener('click', trocaFundoRodape);
trocaLogoSI.addEventListener('click', trocaLogotipo);
apagacancelar.addEventListener('click', apagaCancelar);

cancelar.addEventListener('click', limpar);
enviar.addEventListener('click', verificaNumero);  
        
        
// function onlynumber(evt) {
//     var theEvent = evt || window.event;
//     var key = theEvent.keyCode || theEvent.which;
//     key = String.fromCharCode( key );
//     //var regex = /^[0-9.,]+$/;
//     var regex = /^[0-9.]+$/;
//     if( !regex.test(key) ) {
//         alert("somente numeros")
//        theEvent.returnValue = false;
//        if(theEvent.preventDefault) theEvent.preventDefault();
//     }
//  }


        function verificaNumero(){
        var regra = /^[0-9]+$/;
        console.log(matricula.value);
        if (!matricula.value.match(regra)){       
            alert('Somente números!!');
            limpar();
            } 
        }

        function limpar(){
            senha.value = '';
            matricula.value = '';
        }

        function apagaCancelar(){
            cancelar.hidden = true;
        }


        function trocaFundoTodo(){
            document.body.style.backgroundColor = "#001111";
        }

        function trocaFundoRodape(){
            document.querySelector('.rodape').style.backgroundColor = "#112255";
        }

        function trocaLogotipo(){
            document.querySelector('.logoSI').src="./imagens/logo-si.png";
        }





        

        
