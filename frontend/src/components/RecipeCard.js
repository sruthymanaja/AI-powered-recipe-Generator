function RecipeCard({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="recipe-card">
      <h2>Your Recipe</h2>
      <pre className="recipe-content">{recipe}</pre>
    </div>
  );
}

export default RecipeCard;
