# external 
from fastapi import Request
from .ArduinoControllerClass import ArduinoController

def get_arduino_contoller(request: Request) -> ArduinoController:
    return request.app.state.arduino_controller