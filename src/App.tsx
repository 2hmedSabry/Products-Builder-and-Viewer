import "./App.css";
import ProductCard from "./components/ProductCard";
import { colors, formInputsList, productsList } from "./data";
import Modal from "./components/ui/Modal";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./components/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interface";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CricleColor from "./components/ui/CricleColor";
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const defaultProductObj: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  }
  
  /* ------- State  ------- */
  const [products, setProducts] = useState<IProduct[]>(productsList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);

  /* ------- Handler  ------- */
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const onCHangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const oncancel = () => {
    setProduct(defaultProductObj);

    setIsOpen(false);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation({ title, description, imageURL, price });
    console.log(errors);
    // ** check if any property has a value of "" && check if any property has a value of "
    const hasErrors =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrors) {
      setErrors(errors);
      return;
    }


    setProducts((prev) => [
      {
        ...product,
        id: uuidv4(),
        colors: tempColors,
        category: {
          name: product.category.name,
          imageURL: product.category.imageURL,
        },
      },
      
      
      ...prev 
      ])

      setProduct(defaultProductObj);
      setTempColors([]);
      closeModal();

    console.log("SEND THIS PRODUCT TO THE SERVER");
  };

  /* ------- Render  ------- */
  const renderProductList = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const renderFormInputsList = formInputsList.map((input) => {
    return (
      <div className="flex flex-col" key={input.id}>
        <label htmlFor={input.id} className="mb-[2px]">
          {input.label}
        </label>
        <Input
          key={input.id}
          id={input.id}
          name={input.name}
          value={product[input.name]}
          onChange={onCHangeHandler}
        />
        <ErrorMessage msg={errors[input.name]} />
      </div>
    );
  });

  const renderProductColors = colors.map((color) => {
    return (
      <CricleColor
        key={color}
        color={color}
        onClick={() => {
          if (tempColors.includes(color)) {
            setTempColors((prev) => prev.filter((c) => c !== color));
            return;
          }
          setTempColors((prev) => [...prev, color]);
        }}
      />
    );
  });

  return (
    <main className="container px-9 mx-auto ">
      <Button
        onClick={openModal}
        className={"bg-indigo-700 hover:bg-indigo-800 w-full"}
      >
        Add{" "}
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 rounded-md">
        {renderProductList}

        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          title="ADD A NEW PRTODUCT"
        >
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInputsList}

            <div className="flex items-center space-x-1">
              {renderProductColors}
            </div>
            <div className="flex flex-wrap items-center space-x-1">
              {tempColors.map((color) => (
                <span
                  key={color}
                  className="mb-1 p-1 mr-1 text-xs rounded-md text-white"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="space-x-3">
              <Button
                className={"bg-indigo-700 hover:bg-indigo-800 w-40"}
                type="submit"
              >
                Submit
              </Button>
              <Button
                onClick={oncancel}
                className={"bg-gray-300 hover:bg-gray-400  w-40"}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  );
};

export default App;
