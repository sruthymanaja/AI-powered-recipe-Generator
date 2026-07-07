from langchain_core.prompts import PromptTemplate

def get_prompt():
    return PromptTemplate(
        input_variables=["ingredients"],
        template="""
You are an expert chef.

Create a recipe using these ingredients:
{ingredients}

Include:
- Recipe Name
- Ingredients
- Instructions
- Cooking Time
- Calories
- Tips
"""
    )