<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS</title>

    <!-- Criando uma página com JS-->
    <script>

    //  alert('Olá, sejam todos bem-vindos!')
        
    /*  var empresa = "Gama Academy";
        var mensagem = "Olá, sejam todos bem-vindos!";
        alert(mensagem+empresa); */

    /*  var nome = prompt('Olá, seja bem-vindo. Qual é seu nome?')
        alert('Muito prazer, '+nome+'! Vamos fazer o curso juntos?') */
    
    function teste() {
        alert('Oieeee');
    }

    function validar() {
        var nome=contato.nome.value;
        var email=contato.email.value;

     // alert(nome+' '+email)

        if (nome =='') {
            alert('O preenchimento do campo é obrigatório');
            contato.nome.focus();
            return false;
        }

        if (nome.length <= 3) {
            alert('Por favor, informe o nome completo');
            contato.nome.focus();
            return false;
        }

        if (email =='') {
            alert('Por favor, preencha o campo email.')
            contato.email.focus();
            return false;
        }

        if (email.indexOf('@')==-1) {
            alert('Digite um @ no seu e-mail')
            contato.email.focus();
            return false;
        }

        alert('Olá ' + nome + ', seja bem-vindo! Iremos te enviar nosso portfolio de cursos para o email ' + email);
    }

    </script>
</head>
<body>
    <!--
    <h5>Olá, sejam todos bem-vindos!</h5>
    <input type="button" onclick="teste()" value="Click"> -->

    <form id="contato" method="POST">

        Nome:<input type="text" name="nome"><br><br>
        Email:<input type="text" name="email"><br><br>
        <input type="submit" onclick="return validar()" value="Enviar">


    </form>

</body>
</html>