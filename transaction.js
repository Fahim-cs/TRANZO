// TRANZO Transaction Manager

function getTransactions() {

    return JSON.parse(localStorage.getItem("transactions")) || [];

}



// ===============================

function saveTransactions(data) {

    localStorage.setItem(

        "transactions",

        JSON.stringify(data)

    );

}

// ===============================

function createTransaction(

    type,

    receiver,

    amount

) {

    const transactions = getTransactions();



    const now = new Date();



    const transaction = {

        id:

            "TXN" +

            Date.now(),

        type:

            type,

        receiver:

            receiver,

        amount:

            Number(amount),

        status:

            "Success",

        date:

            now.toLocaleDateString(),

        time:

            now.toLocaleTimeString()

    };



    transactions.unshift(transaction);



    saveTransactions(transactions);

}

function sendMoney(receiver, amount) {

    createTransaction(

        "Send Money",

        receiver,

        amount

    );

}

// Add Money
function addMoney(source, amount) {

    createTransaction(

        "Add Money",

        source,

        amount

    );

}

// Cash Out

function cashOut(agent, amount) {

    createTransaction(

        "Cash Out",

        agent,

        amount

    );

}

// Money Transfer

function moneyTransfer(destination, amount) {

    createTransaction(

        "Money Transfer",

        destination,

        amount

    );

}

// Pay Bill=

function payBill(company, amount) {

    createTransaction(

        "Pay Bill",

        company,

        amount

    );

}
// Mobile Recharge

function mobileRecharge(number, amount) {

    createTransaction(

        "Mobile Recharge",

        number,

        amount

    );

}

// Generate Transaction ID

function generateTransactionID() {

    return "TXN" + Math.floor(
        100000000 + Math.random() * 900000000
    );

}

// Current Date

function getCurrentDate() {

    const now = new Date();

    return now.toLocaleDateString("en-GB", {

        day: "2-digit",

        month: "short",

        year: "numeric"

    });

}

// Current Time

function getCurrentTime() {

    const now = new Date();

    return now.toLocaleTimeString("en-US", {

        hour: "2-digit",

        minute: "2-digit",

        hour12: true

    });

}

// Transaction Object

function createTransaction(type, receiver, amount) {

    const transactions = getTransactions();

    const transaction = {

        id: generateTransactionID(),

        type: type,

        receiver: receiver,

        amount: Number(amount),

        status: "Success",

        date: getCurrentDate(),

        time: getCurrentTime()

    };

    transactions.unshift(transaction);

    saveTransactions(transactions);

}
// ===============================
// Get Recent Transactions
// ===============================

function getRecentTransactions(limit = 5) {

    const transactions = getTransactions();

    return transactions.slice(0, limit);

}



// ===============================
// Render Dashboard Recent Activity
// ===============================

function loadRecentTransactions(containerId = "recentTransactions") {

    const container = document.getElementById(containerId);

    if (!container) return;

    const transactions = getRecentTransactions();

    if (transactions.length === 0) {

        container.innerHTML = `

        <div class="text-center py-10 text-gray-400">

            <i class="fa-solid fa-clock-rotate-left text-4xl mb-3"></i>

            <p>No recent transactions found.</p>

        </div>

        `;

        return;

    }

    container.innerHTML = "";

    transactions.forEach(item => {

        container.innerHTML += `

        <div class="flex justify-between items-center p-4 rounded-2xl border border-base-300 mb-3">

            <div>

                <h3 class="font-semibold">${item.type}</h3>

                <p class="text-sm text-gray-500">

                    ${item.receiver}

                </p>

                <p class="text-xs text-gray-400">

                    ${item.date} • ${item.time}

                </p>

            </div>

            <div class="text-right">

                <h3 class="font-bold text-primary">

                    ৳${item.amount}

                </h3>

                <span class="badge badge-success">

                    ${item.status}

                </span>

            </div>

        </div>

        `;

    });

}

// Clear All Transactions

function clearHistory() {

    if (confirm("Are you sure you want to delete all transaction history?")) {

        localStorage.removeItem("transactions");

        location.reload();

    }

}




// Auto Load

document.addEventListener("DOMContentLoaded", () => {

    loadRecentTransactions();

});