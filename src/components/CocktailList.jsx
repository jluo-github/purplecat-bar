import React from "react";
import Wrapper from "../assets/wrappers/CocktailList.js";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No drinks to display</h4>;
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {" "}
      <div>
        {formattedDrinks.map((item) => {
          return <CocktailCard key={item.id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default CocktailList;
