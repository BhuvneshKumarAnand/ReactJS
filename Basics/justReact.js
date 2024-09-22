// const header = (
//     <div>
//         <h1 className='header'>Hello</h1>
//         <p>World!!!</p>
//     </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(header);

/** React **/

// const reactHeading=React.createElement("h1", {
//     className: "head", 
//     id: "reactHead", 
//     children: "Hello React!!!"
// });

// const jsxHeading=(
//     <h1>Hello React JSX!!!</h1>
// );


// Basics of JSX
// function App() {
//     var name = "World";
//     var age = 7;
//     var demo1 = undefined;
//     var demo2 = Boolean;
//     return (
//         // React Fragment
//         <>
//             <h1>Hello {name}!</h1>
//             {header}
//             <h1>You are {age}!</h1>
//             <h1>You are {demo1}!</h1>
//             <h1>You are {demo2}!</h1>
//             <p>Calling a function {Sum()}!</p>
//         </>
//     )
// }

// const header= <h2>JSX Expression</h2>;

// function Sum() {
//     var a = 1;
//     var b = 2;
//     return (
//         <>
//             <h1>Subtract : {a - b}</h1>
//             <h1>Sum : {a + b}</h1>
//             <h1>Multiply : {a * b}</h1>
//             <h1>Divide : {a / b}</h1>
//         </>
//     )
// }



function App() {
    let a = [1, 2, 3];
    let obj = {
        name: "Alexa",
        age: 10
    }
    let filteredArray = a.filter(num => num%2 === 1);

    let cars=['BMW', 'Audi', 'Defender'];
    
    return (
        <>
        <h1>List of Cars: </h1>
        <ul>
            {cars.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
            </ul>
        </>
    );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);