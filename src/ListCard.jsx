import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import "./ListCard.css";

const ListCard = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeal] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        console.log(res.data.meals);
        setMeal(res.data.meals);
      });
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your meal"
        onChange={handleChange}
      />
      <div className="containers">
        {meals && meals.map((meal, key) => <Card key={key} meal={meal} />)}
      </div>
    </div>
  );
};

export default ListCard;
