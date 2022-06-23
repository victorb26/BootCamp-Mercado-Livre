process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});


process.stdin.on("end", function () {
   verificaNumero(_input);
});

function verificaNumero(maxDigitInput){
    var maxDigit = parseInt(maxDigitInput);
    if (maxDigit <= 5){
        console.log("null");
    }else{
        // checar numero por numero
        for(i = 1000; i < 10000; i++){
            const numeroConvertido = i+"";
            const a = Number.parseInt( numeroConvertido[0]);
            const b = Number.parseInt( numeroConvertido[1]);
            const c = Number.parseInt( numeroConvertido[2]);
            const d = Number.parseInt( numeroConvertido[3]);
            if (a <= maxDigit && b <= maxDigit && c <= maxDigit && d <= maxDigit){
                const soma = a + b + c + d;
                if (soma == 21){
                    console.log(i)
                }
            }
        }
    }
}
verificaNumero(6);