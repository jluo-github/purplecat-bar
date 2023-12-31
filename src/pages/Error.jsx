import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found 404" />
          <Link to="/">back home </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>not 404, but Error</div>
    </Wrapper>
  );
};

export default Error;
