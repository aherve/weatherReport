$.ajax({url: '/data', success: function (rawData) {
  var reports = rawData.reports
  var categories = reports.map(r => new Date(r.date))
  var data = reports.map(r => parseFloat(r.temperature))
  Highcharts.chart('container', {
    title: {
      text: 'Temperature in my room',
      x: -20 //center
    },
    subtitle: {
      text: 'As measured by super fancy arduino setup',
      x: -20
    },
    xAxis: {
      categories: categories
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: '°C'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Temperature',
      data: data
    }]
  });
}})
