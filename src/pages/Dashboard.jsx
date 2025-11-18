import React, {useEffect} from 'react'
import { Chart, BarController, BarElement, CategoryScale, LinearScale, DoughnutController, ArcElement } from 'chart.js'

Chart.register(BarController, BarElement, CategoryScale, LinearScale, DoughnutController, ArcElement)

export default function Dashboard(){
  useEffect(()=>{
    const ctx = document.getElementById('chartTipos')
    if(ctx){
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Orgânicos','Oleosos','Contaminados'],
          datasets: [{ label: 't', data: [41,32,79], backgroundColor: ['#3c8d48','#bf7a2e','#b94b4b'] }]
        },
        options: { responsive:true, plugins:{legend:{display:false}} }
      })
    }
    const ctx2 = document.getElementById('chartDestino')
    if(ctx2){
      new Chart(ctx2, {
        type: 'doughnut',
        data: { labels: ['Coprocessamento','Compostagem','Re-refino'], datasets:[{ data:[52,41,59], backgroundColor:['#71b881','#9ab79f','#cfe6dd'] }] },
        options:{ responsive:true }
      })
    }
  },[])

  const movimentacoes = [
    { data:'17/11/2025', tipo:'Contaminado', qtd:'3.2 t', transp:'EcoTrans', dest:'Coprocessamento' },
    { data:'16/11/2025', tipo:'Orgânico', qtd:'1.1 t', transp:'BioPort', dest:'Compostagem' },
    { data:'15/11/2025', tipo:'Oleoso', qtd:'2.7 t', transp:'TransOil', dest:'Re-refino' },
  ]

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-[#0a6c5f]">Dashboard Ambiental</h1>
        <p className="text-[#677a67]">Visão geral — resíduos portuários</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-[#71b881]">
          <div className="text-sm text-[#6a7b6a]">Resíduos no mês</div>
          <div className="text-2xl font-bold">152 t</div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-[#3c8d48]">
          <div className="text-sm text-[#6a7b6a]">Orgânicos</div>
          <div className="text-2xl font-bold text-[#3c8d48]">41 t</div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-[#bf7a2e]">
          <div className="text-sm text-[#6a7b6a]">Oleosos</div>
          <div className="text-2xl font-bold text-[#bf7a2e]">32 t</div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-[#b94b4b]">
          <div className="text-sm text-[#6a7b6a]">Contaminados</div>
          <div className="text-2xl font-bold text-[#b94b4b]">79 t</div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-sm text-[#6a7b6a] mb-2">Geração por tipo (mês)</h3>
          <canvas id="chartTipos"></canvas>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-sm text-[#6a7b6a] mb-2">Destinação</h3>
          <canvas id="chartDestino"></canvas>
        </div>
      </section>

      <section className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-sm text-[#6a7b6a] mb-2">Movimentações recentes</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Data</th><th>Tipo</th><th>Quantidade</th><th>Transportador</th><th>Destinação</th>
            </tr>
          </thead>
          <tbody>
            {movimentacoes.map((m,i)=>(
              <tr key={i} className="border-b">
                <td className="py-2">{m.data}</td>
                <td>{m.tipo}</td>
                <td>{m.qtd}</td>
                <td>{m.transp}</td>
                <td>{m.dest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
