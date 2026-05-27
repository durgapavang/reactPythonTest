from dummy_db import dummy_responses

SUPPORTED_LANGUAGES = {"en", "fr", "de", "es"}

def validate_language(language):

    if language not in SUPPORTED_LANGUAGES:
        return {
            "error": "INVALID_LANGUAGE",
            "message": "Target language is not supported"
        }

    return None


def requires_clarification(prompt):

    if len(prompt.strip()) < 5:
        return True

    vague_words = ["hi", "help", "test", "ok"]

    if prompt.lower().strip() in vague_words:
        return True

    return False


def fetch_ai_response(page=1, page_size=10):

    total = len(dummy_responses)

    start = (page - 1) * page_size
    end = start + page_size

    results = dummy_responses[start:end]

    return {
        "status": "SUCCESS",
        "data": results,
        "pagination": {
            "page": page,
            "pageSize": page_size,
            "totalRecords": total,
            "totalPages": (total + page_size - 1) // page_size
        }
    }