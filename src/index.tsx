import { render } from "react-dom";
import { App } from "./App";

// const headStyle = { color: 'blue', padding: 10 };

// first react component, function that returns html

// HTML vs JSX
/*
    HTML                | JSX
    class               | className
    for                 | htmlFor
    inline are strings  | inline styles are objects, numbers = px.
    <!-- comments -->   | { \/* comments*\/ } 
*/
// function Heading(props: any) {
//     return <h1 className="head" style={headStyle}>{props.children}</h1>;
// }

// <h1 className="head">Hello</h1>
// JSX - compiled down to javascript, syntax sugar
// React.createElement("h1", {className: "head"}, "Hello");
render(<App />, document.getElementById("root"));
