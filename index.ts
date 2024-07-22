import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';

function main(): void {
    const firstStr: string = question("insert first number:\n");
    const operator: string = question("insert operator:\n");
    const secondStr: string = question("insert second number:\n");

    const validInput: boolean = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
    if (validInput) {
        console.log('\nis valid\n')
        const firstNumber: number = parseInt(firstStr);
        const secondNumber: number = parseInt(secondStr);
        const result: number = calculate(firstNumber, operator as Operator, secondNumber);
        console.log(result);
    } else {
        console.log('\ninvalid input\n');
        main()
    }
}

function isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

function isOperator(str: string): boolean {
    switch(str) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
    switch(operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}

main();