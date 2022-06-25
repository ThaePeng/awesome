import React, { useState, useEffect } from "react";
import { add } from "@pt/utils";

const Add: React.FC = () => {
  const [first, setFirst] = useState(0);

  useEffect(() => {
    const sum = add(1, 2);
    setFirst(sum);
  }, []);

  return <div>{first}</div>;
};

export default Add;
