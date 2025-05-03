import { IProduct } from "../interface";
import { txtSLicer } from "../utils/functions";
import Button from "./Button";
import Image from "./Image";
import CricleColor from "./ui/CricleColor";

interface IProps {
  product: IProduct;
}

const ProductCard = ({
  product: { title, description, imageURL, price, colors, category },
}: IProps) => {
  // const {title , description , imageURL , price , color , category} = product


  const renderProductColors = colors.map((color) => {
    return (
      <CricleColor
        key={color}
        color={color}
       
      />
    );
  });



  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col ">
      <Image imageURL={imageURL} className="logo" alt={title} />
      <h3>{title}</h3>
      <p>{txtSLicer(description, 50)}</p>
      <div className="flex items-center my-4 space-x-2">
        {
        renderProductColors
        
        

        
        
        }
      </div>

      <div className="flex items-center justify-between ">
        <span>{price}</span>
        <span className="flex items-center space-x-2">
          <Image
            imageURL={category.imageURL = "https://placehold.co/600x400"}
            alt={category.name ="category"}
            className="w-5 h-5 rounded-full"
          />
          <span>{category.name}</span>
        </span>
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          className="bg-indigo-700"
          onClick={() => {
            console.log("edit");
          }}
          width="w-full"
        >
          Edit
        </Button>
        <Button className="bg-red-700 p-2 w-full">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
