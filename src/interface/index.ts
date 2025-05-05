import { TProductNameTypes } from "../Type"

export interface IProduct {
    id?: string | undefined,
    title: string,
    description: string,
    imageURL: string,
    price: string,
    colors : string[]
    category: {
        name: string
        imageURL : string
    },
}


export interface IFormInputs {
    id: string,
    name: TProductNameTypes
    label: string,
    type: string,
  
}


export interface ICategory {
    id?: string ,
    name: string,
    imageURL: string
}