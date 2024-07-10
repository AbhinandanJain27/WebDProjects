const form = document.querySelector("form");
const amountInput = document.getElementById("amount");
const interestInput = document.getElementById("interest");
const yearsInput = document.getElementById("years");
const monthsInput = document.getElementById("months");
const pieChartCanvas = document.getElementById("pieChart");

function calculateEmi() {
  const principal = parseFloat(amountInput.value);
  const annualInterest = parseFloat(interestInput.value) / 100;
  const years = parseFloat(yearsInput.value);
  const months = parseFloat(monthsInput.value);
  // validation
  if (isNaN(principal) || principal <= 0) {
    alert("Please enter a valid amount greater than zero.");
    return;
  }
  if (isNaN(annualInterest) || annualInterest < 0 || interestInput.value === "") {
    alert("Please enter a valid interest rate (non-negative).");
    return;
  }
  if ((isNaN(years) || years < 0) || (isNaN(months) || months < 0) || (years === 0 && months === 0)) {
    alert("Please enter a valid tenure (years and months must be greater than zero).");
    return;
  }

  const totalMonths = (years * 12) + months;
  const monthlyInterest = annualInterest / 12;
  let emi = 0;

  if (monthlyInterest > 0) {
    emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
      (Math.pow(1 + monthlyInterest, totalMonths) - 1);
  } else {
    emi = principal / totalMonths;
  }

  displayResults(emi, principal, totalMonths);
  updatePieChart(principal, totalMonths, emi);
  generateTable(principal, monthlyInterest, emi,totalMonths);
}

function displayResults(emi, principal, totalMonths) {
  const installment = emi.toFixed(2);
  const totalInterest = (emi * totalMonths - principal).toFixed(2);
  const totalPayable = (emi * totalMonths).toFixed(2);

  document.querySelector(".results").innerHTML = `
        <div>Installment: ${installment} INR</div>
        <div>Interest: ${totalInterest} INR</div>
        <div>Total Payable: ${totalPayable} INR</div>
      `;
}

function updatePieChart(principal, totalMonths, emi) {
  const ctx = pieChartCanvas.getContext("2d");
  const totalAmount = emi * totalMonths;
  const principalPortion = principal;
  const interestPortion = totalAmount - principal;

  const data = [principalPortion, interestPortion];
  const labels = ["Principal", "Interest"];
  const colors = ["#4CAF50", "#FFC107"];

  if (window.myPieChart) {
    window.myPieChart.destroy();
  }

  window.myPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: colors,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
      },
    },
  });
}
function generateTable(principal, monthlyInterest, emi, totalMonths) {
  const tableBody = document.querySelector(".table tbody");
  tableBody.innerHTML = ""; // Clear previous table rows if any

  let remainingPrincipal = principal;
  let totalPrincipalPaid = 0;

  // Get the current date
  let currentDate = new Date();

  for (let i = 1; i <= totalMonths; i++) {
    let emiInterest = remainingPrincipal * monthlyInterest;
    let principalPaid = emi - emiInterest;

    // Update the remaining principal
    remainingPrincipal -= principalPaid;
    totalPrincipalPaid += principalPaid;

    // Prevent negative remaining principal
    if (remainingPrincipal < 0) {
      remainingPrincipal = 0;
    }

    // Format the current date to display as month and year
    let monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    tableBody.innerHTML += `
      <tr>
        <td>${monthYear}</td>
        <td>${principalPaid.toFixed(2)}</td>
        <td>${emiInterest.toFixed(2)}</td>
        <td>${emi.toFixed(2)}</td>
        <td>${remainingPrincipal.toFixed(2)}</td>
      </tr>`;

    // Move to the next month
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  calculateEmi();
});
