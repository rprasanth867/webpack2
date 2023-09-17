import React from "react";
import { render } from "react-dom";

import "./style/index.scss";
import App from "./App";

render(<App />, document.getElementById('root'));

const details = {
    name: "Prasanth",
    mobile: "9985702662",
    occupation: "Frontend Developer"
};

const moreDetails = {
    ...details,
    age: 26
}


console.log(details);
console.log(moreDetails?.age);
