import { BASE_URL } from './api/apiUrl';

const newBook = {
  title: 'JS it`s cool',
  author: 'Sam Druk',
  genres: ['JS-study'],
  rating: 7.2,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}`, options).then(res => res.json());
}

addBook(newBook)
  .then(book => {
    console.log('Відповідь від backend,  лупаш розмітку');
    console.log('book :>> ', book);
  })
  .catch(error => console.log(error));
