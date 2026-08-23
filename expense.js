// Get Expenses

function getExpenses() {

    return JSON.parse(
        localStorage.getItem("expenses")
    ) || [];

}


// Save Expenses

function saveExpenses(data) {

    localStorage.setItem(
        "expenses",
        JSON.stringify(data)
    );

}


// Generate Expense ID

function generateExpenseID() {

    return "EXP" + Math.floor(
        100000000 + Math.random() * 900000000
    );

}


// Get Current Date

function getCurrentDate() {

    const now = new Date();

    return now.toLocaleDateString("en-GB", {

        day: "2-digit",

        month: "short",

        year: "numeric"

    });

}


// Create Expense

function createExpense(
    amount,
    category,
    date,
    note
) {

    const expenses = getExpenses();

    const expense = {

        id: generateExpenseID(),

        amount: Number(amount),

        category: category,

        date: date,

        note: note || "No note",

        createdAt: getCurrentDate()

    };

    expenses.unshift(expense);

    saveExpenses(expenses);

}
// Add Expense Form

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("expenseForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const amount =
            document.getElementById("expenseAmount").value;

        const category =
            document.getElementById("expenseCategory").value;

        const date =
            document.getElementById("expenseDate").value;

        const note =
            document.getElementById("expenseNote").value;

        if (!amount || !category || !date) {

            alert("Please fill in all required fields.");

            return;

        }

        createExpense(
            amount,
            category,
            date,
            note
        );

        alert("Expense added successfully!");

        form.reset();

    });

});
// Load Expenses

function loadExpenses(filter = "All") {

    const tableBody =
        document.getElementById("expenseTableBody");

    if (!tableBody) return;

    const expenses = getExpenses();

    let filteredExpenses = expenses;

    if (filter !== "All") {

        filteredExpenses = expenses.filter(
            expense => expense.category === filter
        );

    }

    if (filteredExpenses.length === 0) {

        tableBody.innerHTML = `

            <tr>

                <td colspan="5">

                    <div class="text-center py-10 text-gray-400">

                        <i class="fa-solid fa-receipt text-4xl mb-3"></i>

                        <p>
                            No expenses found.
                        </p>

                    </div>

                </td>

            </tr>

        `;

        return;

    }

    tableBody.innerHTML = "";

    filteredExpenses.forEach(expense => {

        tableBody.innerHTML += `

            <tr>

                <td>

                    <span class="badge badge-outline">

                        ${expense.category}

                    </span>

                </td>

                <td>

                    ${expense.note}

                </td>

                <td>

                    ${expense.date}

                </td>

                <td class="font-semibold">

                    ৳${expense.amount.toFixed(2)}

                </td>

                <td>

                    <button
                        class="btn btn-sm btn-error text-white"
                        onclick="deleteExpense('${expense.id}')">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </td>

            </tr>

        `;

    });

}
// Delete Expense

function deleteExpense(id) {

    const expenses = getExpenses();

    const updatedExpenses = expenses.filter(
        expense => expense.id !== id
    );

    saveExpenses(updatedExpenses);

    loadExpenses();

    loadExpenseSummary();

}


// Expense Filter

document.addEventListener("DOMContentLoaded", () => {

    const filter =
        document.getElementById("expenseFilter");

    if (!filter) return;

    filter.addEventListener("change", function () {

        loadExpenses(this.value);

    });

});
// Expense Summary

function loadExpenseSummary() {

    const expenses = getExpenses();

    let totalExpense = 0;
    let monthlyExpense = 0;
    let todayExpense = 0;

    const now = new Date();

    const currentMonth = now.getMonth();

    const currentYear = now.getFullYear();

    const today = now.toISOString().split("T")[0];

    expenses.forEach(expense => {

        const amount = Number(expense.amount);

        totalExpense += amount;

        if (expense.date === today) {

            todayExpense += amount;

        }

        const expenseDate = new Date(expense.date);

        if (
            expenseDate.getMonth() === currentMonth &&
            expenseDate.getFullYear() === currentYear
        ) {

            monthlyExpense += amount;

        }

    });


    const totalElement =
        document.getElementById("totalExpense");

    const monthlyElement =
        document.getElementById("monthlyExpense");

    const todayElement =
        document.getElementById("todayExpense");

    if (totalElement) {

        totalElement.textContent =
            "৳" + totalExpense.toFixed(2);

    }

    if (monthlyElement) {

        monthlyElement.textContent =
            "৳" + monthlyExpense.toFixed(2);

    }

    if (todayElement) {

        todayElement.textContent =
            "৳" + todayExpense.toFixed(2);

    }

}
// Remaining Budget

function loadRemainingBudget() {

    const expenses = getExpenses();

    const savedBudget =
        Number(localStorage.getItem("monthlyBudget")) || 0;

    let monthlyExpense = 0;

    const now = new Date();

    const currentMonth = now.getMonth();

    const currentYear = now.getFullYear();

    expenses.forEach(expense => {

        const expenseDate = new Date(expense.date);

        if (
            expenseDate.getMonth() === currentMonth &&
            expenseDate.getFullYear() === currentYear
        ) {

            monthlyExpense += Number(expense.amount);

        }

    });

    const remainingBudget =
        savedBudget - monthlyExpense;

    const budgetElement =
        document.getElementById("remainingBudget");

    if (budgetElement) {

        budgetElement.textContent =
            "৳" + Math.max(remainingBudget, 0).toFixed(2);

    }

}
// Load All Expense Data

document.addEventListener("DOMContentLoaded", () => {

    loadExpenses();

    loadExpenseSummary();

    loadRemainingBudget();

});
// Set Today's Date Automatically

document.addEventListener("DOMContentLoaded", () => {

    const dateInput =
        document.getElementById("expenseDate");

    if (!dateInput) return;

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.value = today;

});
// Final Expense Page Initialization

document.addEventListener("DOMContentLoaded", () => {

    loadExpenses();

    loadExpenseSummary();

    loadRemainingBudget();

});
