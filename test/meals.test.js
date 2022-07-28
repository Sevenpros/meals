import { commentCounter } from '../src/modules/views/comment-show.js';

const commentListTemplate = [
  {
    creation_date: '2022-07-27',
    username: 'Est deserunt ad est',
    comment: 'Dolores pariatur Od',
  },
  {
    username: 'Quaerat officia quas',
    comment: 'Eiusmod sunt deserun',
    creation_date: '2022-07-27',
  },
  {
    username: 'Molestiae in dolor t',
    creation_date: '2022-07-27',
    comment: 'Et et voluptatum qui',
  },
  {
    creation_date: '2022-07-27',
    comment: 'Ea iusto iusto cum p',
    username: 'Qui ea sed et ea eni',
  },
  {
    creation_date: '2022-07-28',
    username: 'Do ut aut saepe aliq',
    comment: 'Possimus quisquam q',
  },
  {
    creation_date: '2022-07-28',
    comment: 'Nisi est quis unde i',
    username: 'Qui nisi provident ',
  },
];
test('Should return the number of items in the array', () => {
  expect(commentCounter(commentListTemplate)).toBe(commentListTemplate.length);
});