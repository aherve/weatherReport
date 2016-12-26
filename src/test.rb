require 'serialport'

p "hello, world"

sp = SerialPort.new "/dev/ttyACM0", 9600

while s = sp.gets
  p s
end
