import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./AddArticle.css";

const AddArticle = () => {
  //   const [recipe, setRecipe] = useState({
  //     title: "",
  //     ingredients: [],
  //     method: "",
  //     cookingTime: "",
  //   });
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [tempIngredient, setTempIngredient] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/recipes", {
        title,
        ingredients,
        method,
        cookingTime,
      })
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    history.push("/");
    resetFields();
  };

  const addIngredients = (e) => {
    e.preventDefault();

    setIngredients((prevState) => [...prevState, tempIngredient]);

    setTempIngredient("");
  };

  const resetFields = () => {
    setTitle("");
    setIngredients([]);
    setMethod("");
    setCookingTime("");
  };

  //   const handleChange = (e) => {
  //     setRecipe({ [e.target.name]: e.target.value });
  //   };

  console.log(ingredients);
  return (
    <section className="create-article">
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Recipe title:</label>
          <input
            id="title"
            value={title}
            // onChange={handleChange}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
          />
        </div>
        <div>
          <label>Recipe Ingredients:</label>
          <input
            name="ingredients"
            type="text"
            value={tempIngredient}
            // onChange={handleChange}
            onChange={(e) => setTempIngredient(e.target.value)}
            style={{ width: "85%" }}
          />
          <button className="add-button" onClick={addIngredients}>
            Add
          </button>
          <p>
            Current:
            {ingredients.length
              ? ingredients.map((ing) => <span key={ing}> {ing}</span>)
              : null}
          </p>
        </div>
        <div>
          <label>Recipe method:</label>
          <input
            name="method"
            type="text"
            value={method}
            // onChange={handleChange}
            onChange={(e) => setMethod(e.target.value)}
          />
        </div>
        <div>
          <label>Cooking cookingTime (minutes):</label>
          <input
            name="cookingTime"
            type="number"
            value={cookingTime}
            // onChange={handleChange}
            onChange={(e) => setCookingTime(e.target.value)}
          />
        </div>
        <button
          className="add-button"
          style={{ display: "block", margin: "auto" }}
          type="submit"
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default AddArticle;
