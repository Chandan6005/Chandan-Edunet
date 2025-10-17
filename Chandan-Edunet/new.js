const readline = require('readline');

// Simple interactive calculator for Node.js
// Save as new.js and run with `node new.js`


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'calc> '
});

const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    },
    '%': (a, b) => a % b,
    '^': (a, b) => Math.pow(a, b)
};

function ask(question) {
    return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function run() {
    console.log('Simple Calculator');
    console.log('Enter "exit" to quit.');
    console.log('You can perform binary operations: +  -  *  /  %  ^\n');

    while (true) {
        try {
            let input = (await ask('Enter first number (or "exit"): ')).trim();
            if (input.toLowerCase() === 'exit') break;
            const a = Number(input);
            if (Number.isNaN(a)) {
                console.log('Not a valid number. Try again.\n');
                continue;
            }

            const op = (await ask('Operator (+ - * / % ^): ')).trim();
            if (!(op in ops)) {
                console.log('Unsupported operator. Try again.\n');
                continue;
            }

            input = (await ask('Enter second number: ')).trim();
            const b = Number(input);
            if (Number.isNaN(b)) {
                console.log('Not a valid number. Try again.\n');
                continue;
            }

            const result = ops[op](a, b);
            console.log(`Result: ${result}\n`);
        } catch (err) {
            console.log(`Error: ${err.message}\n`);
        }
    }

    rl.close();
    console.log('Goodbye.');
}

run();