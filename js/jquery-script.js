//efeito de esconder formulário de cadastro

$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("show");
        $("#section-login").slideToggle("show");
        $("#bitao-cadastrar").hide();

    }); /* O equivalente no javascritp puro seria:"document.getElementById("botao-cadastrar").click" */
}); /* comando padrão para o Jquery*/




