import { ContaPoupanca } from './src/model/ContaPoupanca';
import readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { ContaController } from "./src/controller/ContaController";
import { ContaCorrente } from "./src/model/ContaCorrente";


export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas =  ['conta Corrente', 'Conta Poupança']
    
    const contas: ContaController = new ContaController();

    while (true) {

        console.log(colors.bg.blue, colors.fg.gray,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Conta\n\n", colors.reset);

                    console.log('Digite o número da Agência: ');
                    agencia = readlinesync.questionInt("");

                    console.log('Digite o nome do Titular da Conta : ');
                    titular = readlinesync.question("");

                    console.log('Digite o Tipo da Conta: ');
                    tipo = readlinesync.keyInSelect(tipoContas,"",{cancel : false}) + 1;
                    
                    console.log('Digite o saldo da conta: ');
                    saldo = readlinesync.questionFloat("");

                    switch(tipo){
                        case 1:
                                console.log('Digite o Limite da conta: ');
                                limite = readlinesync.questionFloat("");
                                contas.cadastrar(
                                    new ContaCorrente(contas.gerarNumero(),agencia, tipo, titular, saldo, limite)
                                )
                            break;
                        case 2:
                                console.log('Digite a Data de Aniversário da conta: ');
                                aniversario = readlinesync.questionInt("");
                                contas.cadastrar(
                                    new ContaPoupanca(contas.gerarNumero(),agencia, tipo, titular, saldo, aniversario)
                                )
                            break;
                    }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                    contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                    console.log("Digite o número da Conta: ")
                    numero = readlinesync.questionInt("");
                    contas.procurarPorNumero(numero);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }1
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Pamela Salgado ");
    console.log("E-mail : contatopamela@outlook.com");
    console.log("https://github.com/pamelalmeidaa");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();