import {BASE_URL} from './api/apiUrl'

function fetchBooks() {
  return fetch(`${BASE_URL}/1`).then(res => res.json());
}

function fetchBookById(bookID) {
  return fetch(`${BASE_URL}/${bookID}`).then(res => res.json());
}
fetchBooks();
fetchBookById(2);
fetchBookById(4);
