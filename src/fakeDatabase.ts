export interface Book {
  id: number;
  title: string;
  author: string;
  publishedDate: Date;
}
export const fakeDatabase: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedDate: new Date('1925-04-10'),
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishedDate: new Date('1960-07-11'),
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    publishedDate: new Date('1949-06-08'),
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publishedDate: new Date('1813-01-28'),
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publishedDate: new Date('1951-07-16'),
  },
  {
    id: 6,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publishedDate: new Date('1937-09-21'),
  },
  {
    id: 7,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    publishedDate: new Date('1953-10-19'),
  },
  {
    id: 8,
    title: 'Moby Dick',
    author: 'Herman Melville',
    publishedDate: new Date('1851-10-18'),
  },
  {
    id: 9,
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    publishedDate: new Date('1890-07-01'),
  },
  {
    id: 10,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedDate: new Date('1925-04-10'),
  },
];
