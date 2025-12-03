# built in

# internal
from .intervention import intervene

# external
from fastapi import FastAPI, Depends

def setup_routes(app: FastAPI):
    @app.get("/intervention")
    async def test():
        await intervene()
        return {"message": "test intervention route"}