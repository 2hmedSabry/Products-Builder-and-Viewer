import { IProduct } from "../interface";
import { txtSLicer } from "../utils/functions";
import Button from "./Button";
import Image from "./Image";
import CricleColor from "./ui/CricleColor";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: (value: boolean) => void;
  idx : number;
  setProductToEditIdx : (value: number) => void;
}

const ProductCard = ({product , setProductToEdit, openEditModal, setProductToEditIdx , idx}: IProps) => {

  const {title , description , imageURL , price , colors , category} = product




/* ---------- Render ---------- */
  const renderProductColors = colors.map((color) => {
    return (  
      <CricleColor
        key={color}
        color={color}
       
      />
    );
  });
/* ---------- Handler ---------- */
  const onEdit = () => {
    console.log("edit");
    setProductToEdit(product);
    openEditModal(true);
    setProductToEditIdx(idx);
  };

  const onDelete = () => {
    console.log("Delete");
  };


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
          <span>{category.name}</span>
          <Image
            imageURL={category.imageURL}
            alt={category.name }
            className="w-5 h-5 rounded-full"
          />
        </span>
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          className="bg-indigo-700"
          onClick={onEdit}
          width="w-full"
        >
          Edit
        </Button>
        <Button className="bg-red-700 p-2 w-full" onClick={onDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
