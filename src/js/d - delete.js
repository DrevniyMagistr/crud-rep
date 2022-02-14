import { BASE_URL } from './api/apiUrl';

function removeBook(bookId) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/${bookId}`, options).then(res => res.json());
}

removeBook(8);
