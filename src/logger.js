const SerialPort = require('serialport')

const port = new SerialPort('/dev/cu.usbmodem1411', {
  baudRate: 9600,
  parser: SerialPort.parsers.readline('\r')
})

port.on('open', function () {
  console.log('port opened')
})

port.on('data', function (data) {
  console.log('got data: ', data.toString('ascii'))
})

