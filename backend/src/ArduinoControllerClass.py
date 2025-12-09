# built in

from serial import Serial
from serial.tools.list_ports import comports
import time

class ArduinoController():

    baud_rate: int = 9600
    arduino = Serial()

    def __init__(self, baud_rate):
            
        self.baud_rate = baud_rate

        ports_list = comports()
        for port in ports_list:
            if "Arduino" in str(port):
                port_addr = str(port).split(" ")[0]

                self.arduino = Serial(port_addr, self.baud_rate, timeout=2)
                break
        time.sleep(2)

    
    def send_msg(self, msg: str):
        self.arduino.write((msg + "\n").encode())
        time.sleep(1)