import {v4 as uuidv4} from 'uuid';

import { IFormInputs, IProduct } from '../interface';
// import { v4 as uuidv4 } from 'uuid';
export const productsList: IProduct[] = [
  {
    id: uuidv4(),
    title: 'Tesla Model 3',
    description: 'The Tesla Model 3 is an electric compact luxury sedan developed by Tesla, Inc. The Model 3 is the third generation of Tesla vehicles, after the Roadster and Model S, and is designed to be more affordable than the Model S and Model X.',
    imageURL: 'https://placehold.co/600x400',
    price: '$35,000',
    colors: ['indigo', 'gray', 'amber'],
    category: {
      name: 'Electric Cars',
      imageURL: 'https://placehold.co/200x200',
    },
  },
  {
    id: uuidv4(),
    title: 'Toyota Camry',
    description: 'The Toyota Camry is a mid-size car manufactured by Toyota. It was introduced in Japan in 1980 and has since become one of the most popular cars in the world.',
    imageURL: 'https://placehold.co/600x400',
    price: '$25,000',
    colors: ['indigo', 'gray', 'amber'],
    category: {
      name: 'Gasoline Cars',
      imageURL: 'https://placehold.co/200x200',
    },
  },
  {
    id: uuidv4(),
    title: 'BMW 3 Series',
    description: 'The BMW 3 Series is a line of compact luxury vehicles manufactured by BMW since 1975. It is one of the best-selling luxury cars of all time.',
    imageURL: 'https://placehold.co/600x400',
    price: '$40,000',
    colors: ['indigo', 'gray', 'amber'],
    category: {
      name: 'Luxury Cars',
      imageURL: 'https://placehold.co/200x200',
    },
  },
  {
    id: '5',
    title: 'BMW 3 Series',
    description: 'The BMW 3 Series is a line of compact luxury vehicles manufactured by BMW since 1975. It is one of the best-selling luxury cars of all time.',
    imageURL: 'https://placehold.co/600x400',
    price: '$40,000',
    colors: ['indigo', 'gray', 'amber'],
    category: {
      name: 'Luxury Cars',
      imageURL: 'https://placehold.co/200x200',
    },
  },
  {
    id: '4',
    title: 'BMW 3 Series',
    description: 'The BMW 3 Series is a line of compact luxury vehicles manufactured by BMW since 1975. It is one of the best-selling luxury cars of all time.',
    imageURL: 'https://placehold.co/600x400',
    price: '$40,000',
    colors: ['indigo', 'gray', 'amber'],
    category: {
      name: 'Luxury Cars',
      imageURL: 'https://placehold.co/200x200',
    },
  },
];


export const formInputsList : IFormInputs[] = [
  {
    id: 'title',
    name: "title",
    label: 'Product Title',
    type: 'text',
  },
  {
    id: 'description',
    name: "description",
    label: 'Product Description',
    type: 'text',
  },
  {
    id: 'imageURL',
    name: "imageURL",
    label: 'Product Image URL',
    type: 'text',
  },
  {
    id: 'price',
    name: "price",
    label: 'Product Price',
    type: 'text',
  },


]


export const colors : string[] = [
  "#FFFFFF",
  "#F6FF33",
  "#33FFF6",
  "#33FF57",
  "#3357FF",
  "#FF33F6",
  "#FF33A1",
  "#FF5733",
  "#000000",

]