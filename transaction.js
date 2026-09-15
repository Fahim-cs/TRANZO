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

    const currentUser = getCurrentUser();

    if (!currentUser) {
        return;
    }

    const currentBalance = Number(currentUser.balance);
    const sendAmount = Number(amount);

    if (sendAmount > currentBalance) {
        alert("You don't have enough balance.");
        return false;
    }

    const newBalance = currentBalance - sendAmount;

    updateUserBalance(newBalance);

    createTransaction(
        "Send Money",
        receiver,
        sendAmount
    );

    return true;
}

// Add Money
function addMoney(source, amount) {

    const currentUser = getCurrentUser();

    if (!currentUser) {
        return;
    }

    const newBalance = Number(currentUser.balance) + Number(amount);
        
    updateUserBalance(newBalance);

    createTransaction(
        "Add Money",
        source,
        amount
    );

}

// Cash Out

function cashOut(agent, amount) {

    const currentUser = getCurrentUser();

    if (!currentUser) {
        return;
    }

    const currentBalance = Number(currentUser.balance);
    const cashoutAmount = Number(amount);

    if (cashoutAmount > currentBalance) {
        alert("You don't have enough balance.");
        return false;
    }

    const newBalance = currentBalance - cashoutAmount;

    updateUserBalance(newBalance);

    createTransaction(
        "Cash Out",
        agent,
        cashoutAmount
    );

    return true;
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

    const currentUser = getCurrentUser();

    if (!currentUser) {
        return;
    }

    const currentBalance = Number(currentUser.balance);
    const rechargeAmount = Number(amount);

    if (rechargeAmount > 500) {
        alert("You cannot recharge more than ৳500 at once.");
        return false;
    }

    if (rechargeAmount > currentBalance) {
        alert("You don't have enough balance.");
        return false;
    }

    const newBalance =
        currentBalance - rechargeAmount;

    updateUserBalance(newBalance);

    createTransaction(
        "Mobile Recharge",
        number,
        rechargeAmount
    );

    return true;
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
// ================= DASHBOARD EXPENSE =================

function updateDashboardExpense() {

    const expenseElement =
        document.getElementById("totalExpense");

    if (!expenseElement) {
        return;
    }

    const expenses =
        JSON.parse(localStorage.getItem("expenses")) || [];

    let totalExpense = 0;

    expenses.forEach(expense => {

        totalExpense += Number(expense.amount);

    });

    expenseElement.textContent =
        "৳ " + totalExpense.toFixed(2);
}
// Update dashboard when page loads
document.addEventListener("DOMContentLoaded", function () {

    updateDashboardExpense();

});
// ================= BALANCE MANAGEMENT =================

function getCurrentUser() {

    const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

    return loggedInUser;
}


function updateUserBalance(newBalance) {

    const currentUser = getCurrentUser();

    if (!currentUser) {
        return;
    }

    currentUser.balance = Number(newBalance);

    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(currentUser)
    );

    // Update users list
    let users = JSON.parse(
        localStorage.getItem("users")
    ) || [];

    const userIndex = users.findIndex(
        user => user.id === currentUser.id
    );

    if (userIndex !== -1) {

        users[userIndex].balance =
            Number(newBalance);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
    }
};
// Update Available Balance

function updateDashboardBalance() {

    const balanceElement =
        document.getElementById("availableBalance");

    if (!balanceElement) {
        return;
    }

    const currentUser = getCurrentUser();

    if (!currentUser) {
        return;
    }

    balanceElement.textContent =
        "৳ " + Number(currentUser.balance).toFixed(2);
}


// Load balance when dashboard opens

document.addEventListener("DOMContentLoaded", function () {

    updateDashboardBalance();

});