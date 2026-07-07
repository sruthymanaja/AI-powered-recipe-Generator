import { useState } from 'react';
import './App.css';
import RecipeForm from './components/RecipeForm';
import RecipeCard from './components/RecipeCard';
import Loading from './components/Loading';
import { generateRecipe } from './services/api';

function App() {
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setRecipe(null);
    try {
      const res = await generateRecipe(ingredients);
      setRecipe(res.data.recipe);
    } catch (err) {
      const detail = err.response?.data?.detail;
      const msg = Array.isArray(detail) ? detail[0]?.msg : detail;
      setError(msg || 'Failed to generate recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>🍽️ AI Recipe Generator</h1>
      <RecipeForm
        ingredients={ingredients}
        setIngredients={setIngredients}
        onSubmit={handleSubmit}
        loading={loading}
      />
      {error && <p className="error">{error}</p>}
      {loading && <Loading />}
      {recipe && <RecipeCard recipe={recipe} />}
    </div>
  );
}

export default App;
