#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; 
let myPin = 1234;

let pinAns = await inquirer.prompt(
    {      
    message: 'Enter Your PIN',
    type: 'number',
    name: 'pin'
    }
);

if (pinAns.pin === myPin) {
    console.log('Correct PIN code');
    let operationAns = await inquirer.prompt(
        [
            {
                name: 'operation',
                message: 'please select options from below',
                type:'list',
                choices: ['Withdraw','Quick Cash','Check Blance']
            }
        ]
    );
    
    if (operationAns.operation === 'Withdraw') {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: 'amount',
                    message: 'Enter your amount:',
                    type:'number'
                }
            ]
        );

        if (myBalance < amountAns.amount) {
            console.log('insufficient balance');
        }

       else if (myBalance -= amountAns.amount) {
        console.log(`Your remaining balance is: ${myBalance}`);
        }
    }

    else if (operationAns.operation === 'Check Balance') {
        console.log(`your balance is: ${myBalance}`);
    }

    else if (operationAns.operation === 'Quick Cash') {
        let fastCash = await inquirer.prompt(
            [
                {
                    name: 'cash',
                    message: 'Please select amount',
                    type: 'list',
                    choices: ['500', '1000', '2000', '3000', '4000', '5000'],
                }
            ]
        )

        if (fastCash.cash === '500') {
            console.log('Transaction Completed');
            console.log(`Your remaing balance is ${myBalance - 500}`);
        }
        else if (fastCash.cash === '1000') {
            console.log('Transaction Completed');
            console.log(`Your remaing balance is ${myBalance - 1000}`);
        }
        else if (fastCash.cash === '2000') {
            console.log('Transaction Completed');
            console.log(`Your remaing balance is ${myBalance - 2000}`);
        }
        else if (fastCash.cash === '3000') {
            console.log('Transaction Completed');
            console.log(`Your remaing balance is ${myBalance - 3000}`);
        }
        else if (fastCash.cash === '4000') {
            console.log('Transaction Completed');
            console.log(`Your remaing balance is ${myBalance - 4000}`);
        }
        else if (fastCash.cash === '5000') {
            console.log('Transaction Completed');
            console.log(`Your remaing balance is ${myBalance - 5000}`);
        };

    }
} 
else {
    console.log('Enter the correct PIN');
}
