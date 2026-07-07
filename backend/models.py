from pydantic import BaseModel, field_validator

class RecipeRequest(BaseModel):
    ingredients: str

    @field_validator("ingredients")
    @classmethod
    def validate_ingredients(cls, v):
        v = v.strip()
        if not v:
            raise ValueError("Ingredients cannot be empty.")
        if v.replace(" ", "").isnumeric():
            raise ValueError("Ingredients must contain actual ingredient names, not numbers.")
        if len(v) < 3:
            raise ValueError("Please enter valid ingredients.")
        return v
