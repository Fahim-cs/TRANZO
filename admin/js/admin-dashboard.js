// TRANZO Admin Dashboard

// Welcome Name

const adminName = document.getElementById("adminName");

const adminEmail = localStorage.getItem("adminEmail");

if(adminEmail){

    adminName.textContent = adminEmail;

}



// Dashboard Cards

const totalUsers = document.getElementById("totalUsers");

const totalTransactions = document.getElementById("totalTransactions");

const walletBalance = document.getElementById("walletBalance");

const todayActivity = document.getElementById("todayActivity");



// Tables

const transactionTable = document.getElementById("recentTransactionTable");

const userTable = document.getElementById("latestUsersTable");



// Read Local Storage

const users = JSON.parse(localStorage.getItem("tranzoUsers")) || [];

const transactions = JSON.parse(localStorage.getItem("tranzoTransactions")) || [];



// Statistics

totalUsers.textContent = users.length;

totalTransactions.textContent = transactions.length;



let totalWallet = 0;

transactions.forEach(item=>{

    totalWallet += Number(item.amount);

});

walletBalance.textContent = "৳ " + totalWallet;



todayActivity.textContent = transactions.length;