from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import RecipeRequest
from chains import chain

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Hello from Recipe API"
    }


@app.post("/generate-recipe")
def generate_recipe(request: RecipeRequest):
    result = chain.invoke({"ingredients": request.ingredients})

    return {
        "ingredients": request.ingredients,
        "recipe": result.content
    }
