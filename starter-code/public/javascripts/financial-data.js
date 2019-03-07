

axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json`)
    .then(response => printTheChart(response.data.bpi))
    .catch(error => console.log(error))


const printTheChart = currencyData => {
console.log(currencyData)
    const valueDate = Object.keys(currencyData)
    const coinValue = Object.values(currencyData)

    const ctx = document.getElementById('myChart').getContext('2d')
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: valueDate,
            datasets: [{
                label: 'bitcoin',
                backgroundColor: 'rgb(255, 200, 132)',
                borderColor: 'rgb(255, 20, 112)',
                data: coinValue,
            }]
        }
    });
};