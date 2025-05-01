import "./App.css";
import ProductCard from "./components/ProductCard";
import { formInputsList, productsList } from "./data";
import Modal from "./components/ui/Modal";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./components/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interface";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  /* ------- State  ------- */
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    color: [],
    category: {
      name: "",
      imageURL: "",
    },
  });
  const [isOpen, setIsOpen] = useState(true);
const [errors , setErrors] = useState({title:  "" , description: "" , imageURL: "" , price: ""})
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
    })

  };

  const oncancel = () => {
    setProduct({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      color: [],
      category: {
        name: "",
        imageURL: "",
      },
    });

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
    console.log("SEND THIS PRODUCT TO THE SERVER");
  };

  /* ------- Render  ------- */
  const renderProductList = productsList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  const renderFormInputs = formInputsList.map((input) => {
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
            {renderFormInputs}

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
