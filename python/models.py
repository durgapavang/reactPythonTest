from pydantic import BaseModel, Field
from typing import Optional
from uuid import UUID

class PromptRequest(BaseModel):
    prompt: str = Field(..., min_length=1)
    targetLanguage: str
    contextId: Optional[UUID] = None


class ErrorResponse(BaseModel):
    error: str
    message: str