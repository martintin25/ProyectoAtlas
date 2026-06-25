const ctxVentas = document.getElementById('graficoVentas');
 
new Chart(ctxVentas,{
    type: 'bar',
    data:{
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets:[{
            label: 'Ventas en pesos',
            data:[ 25000000, 30000000, 28000000, 42000000, 39000000, 52000000],
            backgroundColor: '#DD403A'
        }]
    },
 
    options:{
        responsive:true,
        plugins:{
            legend:{
                display:true
            },
            title:{
                display:false
            }
        }
    }
 
});

const ctsServicios = document.getElementById('graficoServicios')


new Chart(ctsServicios,{
      type: 'doughnut',
      data: {
        labels:[ 'Consulta', 'Vacunación', 'Baño', 'Peluqueria', 'Urgencias'],
        datasets:[{
            label:'Servicios',
            data:[35, 25, 20, 15, 5],
            backgroundColor:[
                '#DD403A',
                '#3e363f',
                '#f4a261',
                '#e9c46a',
                '#2a9d8f',
            ]
        }]
     
    },
    options:{
        responsive: true,
        cutout:'55%',
        plugins:{
            legend:{
                position:'bottom'
            }
        }
    }
});
const ctxClientes = document.getElementById('graficoClientes');
 
new Chart(ctxClientes,{
    type: 'line',
    data:{
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets:[{
            label: 'Clientes Registrados',
            data:[ 100, 230, 43, 98, 110, 24],
            backgroundColor: '#DD403A'
        }]
    },
 
    options:{
        responsive:true,
        plugins:{
            legend:{
                display:true
            },
            title:{
                display:false
            }
        }
    }
 
});
