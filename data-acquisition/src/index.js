const SerialPort = require('serialport')
const MongoClient = require( 'mongodb').MongoClient


const dbURI = process.env.DB_URI

MongoClient.connect(dbURI, (err, db) => {
  if (err) { throw err }
  console.log('Connected to database')

  const port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600,
    parser: SerialPort.parsers.readline('\r')
  })

  port.on('open', () => {
    console.log('port opened')
  })

  port.on('data', data => {
    const [humidity, temperature] = data.trim().split('\t')
    if (!humidity || !temperature ) { return }
    db.collection('reports').insert({
      humidity,
      temperature,
      date: new Date(),
    }, (err) => {
      if (err) { console.error(err) }
    })
  })

})
