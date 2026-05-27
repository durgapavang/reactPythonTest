from fastapi import FastAPI, HTTPException, Query
from models import PromptRequest
from service import (
    validate_language,
    requires_clarification,
    fetch_ai_response
)
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Middleware AI API"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/api/prompt")
def process_prompt(request: PromptRequest):

    print(request)

    language_error = validate_language(
        request.targetLanguage
    )

    print("language_error =", language_error)

    if language_error:
        raise HTTPException(
            status_code=400,
            detail=language_error
        )

    return {
        "status": "SUCCESS"
    }