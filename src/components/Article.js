import React from "react";
import "./Article.css";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const Article = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: article } = useFetch(url);
  console.log(article);
  return article ? (
    <div className="article">
      <h1>{article.title}</h1>
      <h3>{article.cookingTime}</h3>
      {article.ingredients.map((ing) => (
        <ul>
          <li>{ing}</li>
        </ul>
      ))}
      <p>{article.method}</p>
      <p>{article.body}</p>
    </div>
  ) : (
    <div>nothing</div>
  );
};

export default Article;
