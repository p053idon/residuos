// ----- SIDEBAR -----
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

// ----- GRÁFICO TIPOS -----
new Chart(document.getElementById("chartTipos"), {
    type: "bar",
    data: {
        labels: ["Orgânicos", "Oleosos", "Contaminados"],
        datasets: [{
            label: "Toneladas",
            data: [41, 32, 79],
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } }
    }
});

// ----- GRÁFICO DESTINO -----
new Chart(document.getElementById("chartDestino"), {
    type: "doughnut",
    data: {
        labels: ["Coprocessamento", "Compostagem", "Re-refino"],
        datasets: [{
            data: [52, 41, 59]
        }]
    },
    options: {
        responsive: true
    }
});

// ----- TABELA -----
const movimentacoes = [
    { data: "17/11/2025", tipo: "Contaminado", qtd: "3.2 t", transp: "EcoTrans", dest: "Coprocessamento" },
    { data: "16/11/2025", tipo: "Orgânico", qtd: "1.1 t", transp: "BioPort", dest: "Compostagem" },
    { data: "15/11/2025", tipo: "Oleoso", qtd: "2.7 t", transp: "TransOil", dest: "Re-refino" },
];

const tableBody = document.getElementById("tableBody");

movimentacoes.forEach(mov => {
    const row = `
        <tr>
            <td>${mov.data}</td>
            <td>${mov.tipo}</td>
            <td>${mov.qtd}</td>
            <td>${mov.transp}</td>
            <td>${mov.dest}</td>
        </tr>
    `;
    tableBody.innerHTML += row;
});
