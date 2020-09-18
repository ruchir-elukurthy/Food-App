import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.status) {
    case "SUCCESS":
      return {
        data: action.info.meals,
        loading: false,
        error: "",
      };
    case "FAILURE":
      return {
        data: [],
        loading: false,
        error: "Fetch was not successful",
      };
    default:
      return state;
  }
};

function Ameal() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const get_data = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
      .then((response) => dispatch({ info: response.data, status: "SUCCESS" }))
      .catch((error) => dispatch({ status: "FAILURE" }));
  };

  useEffect(() => {
    get_data();
  }, []);

  return (
    <div>
      {state.loading
        ? "Loading.."
        : state.data.map((item) => {
            return <div>{item.idMeal}</div>;
          })}
      {state.error ? state.error : null}
    </div>
  );
}

export default Ameal;
