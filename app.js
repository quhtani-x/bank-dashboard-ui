// all fake data, this is just a front-end mock to show off the layout

// count the balance up so it looks alive
const target = 9620;
let shown = 0;
const balanceEl = document.getElementById("balance");
const timer = setInterval(() => {
  shown += 240;
  if (shown >= target) {
    shown = target;
    clearInterval(timer);
  }
  balanceEl.textContent = "$" + shown.toLocaleString();
}, 25);

// some fake transactions
const transactions = [
  { name: "Spotify", date: "today", amount: -9.99 },
  { name: "Salary", date: "yesterday", amount: 3200 },
  { name: "Amazon", date: "2 days ago", amount: -54.2 },
  { name: "Coffee", date: "2 days ago", amount: -4.5 },
  { name: "Refund", date: "3 days ago", amount: 22.0 },
];

const txEl = document.getElementById("tx");
transactions.forEach((t) => {
  const li = document.createElement("li");
  const sign = t.amount >= 0 ? "pos" : "neg";
  li.innerHTML = `
    <div>${t.name}<small>${t.date}</small></div>
    <div class="amt ${sign}">${t.amount >= 0 ? "+" : ""}${t.amount.toFixed(2)}</div>`;
  txEl.appendChild(li);
});

// the weekly spending chart
new Chart(document.getElementById("chart"), {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "spent",
      data: [120, 80, 200, 60, 310, 150, 90],
      backgroundColor: "#6c5ce7",
      borderRadius: 6,
    }],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  },
});
