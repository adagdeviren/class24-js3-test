// VERSION 2

// 1.
// Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
// - Takes as an argument the following array of objects:
const books = [
  {
    bookName: "The Nature of Software Development",
    author: "Ron Jeffries",
    coverURL:
      "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
  },
  {
    bookName: "Clean Code",
    author: "Robert Cecil Martin",
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
  }
];
// - Iterates over the array and outputs the details of each item nto the DOM. 
// - Displays the items inside an unordered list (created programmatically using JavaScript)
function displayBookInfo(arr) {
  const ul = document.createElement('ul');
  document.body.appendChild(ul);

  arr.forEach(obj => {
    console.log(obj.bookName, obj.author);
    const li = document.createElement('li');
    ul.appendChild(li);
    const bookName = document.createElement('p');
    const author = document.createElement('p');
    const image = document.createElement('img');

    li.appendChild(bookName);
    li.appendChild(author);
    li.appendChild(image);

    bookName.textContent = "Book Name: " + obj.bookName;
    author.textContent = "Author: " + obj.author;
    image.src = obj.coverURL;
  });

}
displayBookInfo(books);



// 2.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users/1
// - Displays the "name", "email" and "city" of the first person inside an unordered list (created programmatically using JavaScript) 
const url = "https://jsonplaceholder.typicode.com/users/1";
function fetchData(url) {
  fetch(url)
    .then(res => res.json()
      .then(data => {
        console.log(data);

        const ul = document.createElement('ul');
        document.body.appendChild(ul);
        const name = document.createElement('li');
        name.textContent = data.name;
        ul.appendChild(name);

        const email = document.createElement('li');
        email.textContent = data.email;
        ul.appendChild(email);

        const city = document.createElement('li');
        city.textContent = data.address.city;
        ul.appendChild(city);

      }));

}
fetchData(url);


// 3.
// Write a function that:
// - Takes in an array of country names
// - Returns the country with the longest name. 
// - Uses the following array as an argument: 
const countries = ["The Netherlands", "Syria", "Turkey", "Mexico", "United States"]

function findLongest(arr) {
  let max = arr[0].length;
  arr.map(v => max = Math.max(max, v.length));
  result = arr.filter(v => v.length == max);
  return result;

}

findLongest(countries);