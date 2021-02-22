
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Januari', 'Februari', 'Maart', 'Mei', 'Juni', 'Juli'],
        datasets: [{
            label: '# Hoeveelheid water voorraad',
            data: [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700],
            backgroundColor: [
                '#828FEF',
                '#828FEF',
                '#828FEF',
                '#828FEF',
                '#828FEF',
                '#828FEF'
            ],
            
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});
var ctx = document.getElementById('myChart2');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});
