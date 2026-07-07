function RecipeForm({ ingredients, setIngredients, onSubmit, loading }) {
  return (
    <div className="form-container">
      <textarea
        className="ingredients-input"
        rows={4}
        placeholder="Enter ingredients (e.g. chicken, garlic, lemon...)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        disabled={loading}
      />
      <button className="generate-btn" onClick={onSubmit} disabled={loading || !ingredients.trim()}>
        {loading ? 'Generating...' : 'Generate Recipe'}
      </button>
    </div>
  );
}

export default RecipeForm;
