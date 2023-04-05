const readline = require('readline');

const prompt = readline.createInterface({ input: process.stdin, output: process.stdout });

const missingFunds = (debitCardBalance, debitCardMaintainingBalance, creditCardBill, transferFee, cash) => {
    const shortfall = debitCardMaintainingBalance - debitCardBalance;
    const totalAmountToSend = parseFloat(shortfall) + parseFloat(creditCardBill) + parseFloat(transferFee);
    if (totalAmountToSend <= parseFloat(cash)) {
        return `You need to send ${totalAmountToSend.toFixed(2)} to debit card.`;
    } else {
        return `Insufficient funds. Cannot transfer ${totalAmountToSend.toFixed(2)} from cash to debit card.`;
    }
}

const processTopUp = async () => {
    const cash = await new Promise(resolve => prompt.question('Enter your cash: ', resolve));
    const debitCardBalance = await new Promise(resolve => prompt.question('Enter your debit card balance: ', resolve));
    const debitCardMaintainingBalance = await new Promise(resolve => prompt.question('Enter your debit card maintaining balance: ', resolve));
    const creditCardBill = await new Promise(resolve => prompt.question('Enter your credit card bill: ', resolve));
    const transferFee = await new Promise(resolve => prompt.question('Enter the transfer fee: ', resolve));
    const result = missingFunds(debitCardBalance, debitCardMaintainingBalance, creditCardBill, transferFee, cash);
    console.log(result);
    prompt.close();
}

processTopUp();
