const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['20',' ', '25', ' ', '30', ' ', '35', ' ','40' ,' ','60',' ','65'],
    datasets: [{
      label: '',
      data: [4,6,8,10,12,14,16,18,20,22,24,26,28],
      borderWidth: 0
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
 
 
