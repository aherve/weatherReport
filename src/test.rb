require 'serialport'

p "hello, world"

sp = SerialPort.new "/dev/cu.usbmodem1411", 9600

while s = sp.gets
  p s
end
