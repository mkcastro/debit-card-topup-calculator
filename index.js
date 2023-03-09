const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your cash amount: ', cash => {
    rl.question('Enter your debit card balance: ', debitCardBalance => {
        rl.question('Enter your debit card maintaining balance: ', debitCardMaintainingBalance => {
            rl.question('Enter your credit card bill: ', creditCardBill => {
                rl.question('Enter the transfer fee: ', transferFee => {
                    const shortfall = debitCardMaintainingBalance - debitCardBalance;
                    const totalAmountToSend = parseFloat(shortfall) + parseFloat(creditCardBill) + parseFloat(transferFee);

                    if (totalAmountToSend <= parseFloat(cash)) {
                        console.log(`You need to send ${totalAmountToSend.toFixed(2)} to debit card.`);
                    } else {
                        console.log(`Insufficient funds. Cannot transfer ${totalAmountToSend.toFixed(2)} from cash to debit card.`);
                    }
                    rl.close();
                });
            });
        });
    });
});
