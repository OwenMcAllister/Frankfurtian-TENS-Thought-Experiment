# built in

# internal
from .intervention import intervene
from .dependencies import get_arduino_contoller

# external
from fastapi import FastAPI, Depends, Request

def setup_routes(app: FastAPI):
    @app.get("/intervention")
    async def intervention_endpoint(request: Request, controller = Depends(get_arduino_contoller)):
        await intervene(controller)
        return {"message": "Intervened"}