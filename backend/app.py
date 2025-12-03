# built in
from contextlib import asynccontextmanager

# external
from fastapi import FastAPI

# internal
from src.routes import setup_routes

def setup_modules(app: FastAPI):
    setup_routes(app)

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Starting up")
    setup_modules(app)
    yield
    print("Shutting down")

app = FastAPI(lifespan=lifespan)

@app.get("/")
async def root():
    return {"message": "Sanity Check"}