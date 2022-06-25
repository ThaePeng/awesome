import React, { useState, useEffect } from "react";
import { add } from "@pt/utils";

const Add: React.FC = () => {
  const [first, setFirst] = useState(0);

  useEffect(() => {
    const sum = add(1, 2);
    setFirst(3);
  }, []);

  return <div>{first}</div>;
};

console.log(add(1, 2));

export default Add;
