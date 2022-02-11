import { BASE_URL } from './api/apiUrl';

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/${bookId}`, options).then(res => res.json().then(console.log));
}

const update1 = {
  rating: 8.5,
};
const update2 = {
  rating: 8.5,
  author: 'repeta',
};
const update3 = {
  rating: 8.5,
  title: 'Сон смешного человека :-)',
};
updateBookById(update1, 9);
updateBookById(update2, 7);
updateBookById(update3, 6);
