# built in
from contextlib import asynccontextmanager

# external
from fastapi import FastAPI

# internal
from src.routes import setup_routes
from src.ArduinoControllerClass import ArduinoController 

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Starting up")
    app.state.arduino_controller = ArduinoController(baud_rate=9600)
    setup_routes(app)
    yield
    print("Shutting down")

app = FastAPI(lifespan=lifespan)

@app.get("/")
async def root():
    return {"message": "Sanity Check"}