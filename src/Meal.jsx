// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import './meal.css';
const Meal = () => {
  const [mealData, setmealData] = useState([]);
  const [area, setArea] = useState("indian");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data);
      setmealData(data.meals);
    };
    fetchDataFromApi();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
      );
      const data = await api.json();
      console.log("search data", data);
      setmealData(data.meals);
      setInputData('');
  }
  return (
    <>
      <div className="my-3 mx-auto text-center ">
        <button
          onClick={() => setArea("indian")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Indian
        </button>
        <button
          onClick={() => setArea("canadian")}
          type="button"
          className="btn btn-outline-secondary mx-3"
        >
          Canadian
        </button>
        <button
          onClick={() => setArea("american")}
          type="button"
          className="btn btn-outline-success mx-3"
        >
          American
        </button>
        <button
          onClick={() => setArea("thai")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Thai
        </button>
        <button
          onClick={() => setArea("british")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          British
        </button>
        <button
          onClick={() => setArea("russian")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Russian
        </button>
        <button
          onClick={() => setArea("italian")}
          type="button"
          className="btn btn-outline-light mx-3"
        >
          Italian
        </button>
      </div>
      <form onSubmit={submitHandler} className="mx-auto text-center my-3">
        <input onChange={(e) => setInputData(e.target.value)}type="text" 
        value={inputData} />
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {mealData.map((data) => {
          return (
            <div
              key={data.idMeal}
              style={{ textAlign: "center", margin: "25px" }}
            >
              <div>
                <img
                  src={data.strMealThumb}
                  alt=""
                  style={{
                    width: "220px",
                    borderRadius: "10px",
                    border: "2px solid blue",
                  }}
                />
              </div>
              <h5>{data.strMeal}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Meal;
