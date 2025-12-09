#!/bin/bash

echo "Starting backend (uvicorn/Poetry)..."
cd backend
poetry run uvicorn app:app --reload &

BACKEND_PID=$!

echo "Starting frontend (npm dev)..."
cd ../frontend
npm run dev &

chromium --start-fullscreen --app="http://localhost:5173"

echo "Frontend terminated. Killing backend process (PID: $BACKEND_PID)..."
kill $BACKEND_PID

echo "All processes stopped."