"use client";

import { Sneaker } from "../interfaces/snaker";
import Image from "next/image";
import { cn } from "../helpers/classname";
import { px } from "framer-motion";
import { useContext } from "react";
import { cartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";

interface Props {
  sneaker: Sneaker;
}

const PageCardStore = ({ sneaker }: Props) => {
  const { addCartProducts } = useContext(cartContext);
  const router = useRouter();

  const { id } = sneaker;
  const { Marca, image, price, stock, description, modelo } =
    sneaker.attributes;
  const { url, width, height } = image.data.attributes.formats.thumbnail;

  const handleClickAddToCart = () => {
    addCartProducts({ id, Marca, modelo, price });
    router.push("/cart");
  };

  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <Image
        className="rounded-t-lg items-center ml-11 mt-9"
        src={url}
        alt={`Imagen de ${modelo}`}
        width={width}
        height={height}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {Marca} - {modelo}
        </h5>
        <p className="text-gray-500 mb-2 text-lg">Precio: $ {price} USD</p>
        <p className="text-gray-500 mb-2 text-lg">Stock: {stock} Und</p>
        <p className=" text-justify mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button
          className={cn(
            "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            stock === 0 && "pointer-events-none opacity-50"
          )}
          onClick={handleClickAddToCart}
        >
          {stock === 0 ? "Sin stock" : "Comprar"}
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default PageCardStore;
