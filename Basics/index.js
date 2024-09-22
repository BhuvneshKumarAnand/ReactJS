const div = document.createElement('div');
const div2 = document.createElement('div');

const heading = document.createElement('h1');
heading.textContent = "Hello";
heading.className = 'header';

const para = document.createElement('p');
para.textContent = "Welcome";
para.className = 'para';

div.append(heading);  // Append heading to div
div.append(para);     // Append para to div

div2.textContent = "This is div2"; // Adding some text to div2
div2.append(para.cloneNode(true)); // Appending a cloned paragraph to div2

// Append div2 to the first div found in the document
document.getElementsByTagName('div')[0].append(div2);

// Append the first div (containing heading and para) to the root element
document.getElementById('root').append(div);
