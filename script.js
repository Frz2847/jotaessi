<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>


</body>
<script>
    var pedido = 1;
    alert("olá, seja bem vindo ao estoque!");
    var peca = parseInt(prompt("qual o saldo de peças?"));
    var soma = peca;
    while (pedido != 0) {
        var escolha = parseInt(prompt("quer abastecer o estoque(1) ou vender peças(2)? "));
        if (escolha == 1) {
            soma = soma + parseInt(prompt("quantas peças quer adicionar ao estoque?"));
            alert("estoque atual: " + soma);
            var continua = parseInt(prompt("quer continuar com a entrada de dados(1) ou não(2)?"))
            if (continua == 2) {
                pedido = 0
            }
        }
        else if (escolha == 2) {
            venda = parseInt(prompt("quantas unidades deseja vender?"));
            if (venda <= soma) {
                soma = soma - venda;
                alert("estoque atual: " + soma);
                var continua = parseInt(prompt("quer continuar com a entrada de dados(1) ou não(2)?"))
                if (continua == 2) {
                    pedido = 0
                }
            }
            else {
                alert("saldo insuficiente!");
                var continua = parseInt(prompt("quer continuar com a entrada de dados(1) ou não(2)?"))
                if (continua == 2) {
                    pedido = 0
                }
            }
        }
        else {
            pedido = 0
        }
    }
    alert("sistema encerrado!")
</script>


</html>

