import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useLocation } from 'react-router-dom';

function SpinnerFunction({logo}) {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [location]);

  return <>{isLoading ? <Spinner logo = {logo} /> : ''}</>;
}

export default SpinnerFunction;
