from fastapi import APIRouter

router = APIRouter(prefix="/questions", tags=["questions"])


@router.get("")
async def get_questions():
    return {"questions": "Insert Questions from DB"}


@router.get("/{question_id}")
async def get_question(question_id: int):
    return {"question": f"Insert Question {question_id} from DB"}
