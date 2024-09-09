import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const validationErrors = {};
    if (!title) validationErrors.title = 'Title is required';
    if (!ingredients) validationErrors.ingredients = 'Ingredients are required';
    if (!steps) validationErrors.steps = 'Preparation steps are required';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form data can be submitted here
      const newRecipe = { title, ingredients, steps };
      console.log(newRecipe);
      // Clear form
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="List the ingredients"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        <div>
          <label htmlFor="steps" className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="6"
            placeholder="Describe the preparation steps"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
