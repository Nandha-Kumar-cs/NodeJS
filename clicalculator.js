const readline = require('readline');
let r1 = readline.createInterface({
    input : process.stdin , 
    output: process.stdout
});

// using readline 
r1.question('Enter 2 number and operaion ' ,(asnwer) => {
    const [astr , bstr , operand] = asnwer.split(' '); 
    var a = Number(astr);
    var b = Number(bstr);
    switch(operand){
        case '+': {console.log(a+b);break;}
        case '-': {console.log(a-b);break;}
        case '/': {console.log(a/b);break;}
        case '*': {console.log(a*b);break;}
        default : {console.log('Invalid operand');}
    }    
    r1.close();
});

// using process.argv
const args = process.argv.slice('2').map(Number);
const [a, b ] = args ; 
console.log(a +b );