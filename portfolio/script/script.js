var ctx = document.getElementById('chart');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Individuality', 'Flexibility', 'Support', 'Organization',],
        datasets: [{
            data: [17, 13, 34, 36],
            backgroundColor: [
                'rgba(241,189,0, 0.9)',
                'rgba(241,150,0, 0.6)',
                'rgba(241,130,0, 0.4)',
                'rgba(241,110,0, 0.2)',

            ],
            borderColor: [
                'rgba(241,189,0, 0)',
                'rgba(241,189,0, 0)',
                'rgba(241,189,0, 0)',
                'rgba(241,189,0, 0)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        animation: {
            duration: 3000,
            easing: 'easeOutBounce',
        },
        plugins: {
            tooltip: {
                title: 'inpercentage',
                backgroundColor: 'rgba(30,30,30,0.5)',
                
            }
        }
    }
});