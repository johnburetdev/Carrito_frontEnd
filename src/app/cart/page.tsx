"use client";

import { useContext } from "react";
import { cartContext } from "@/context/CartContext";
import { Table, TableCell, TableRow } from "flowbite-react";
import PageHeader from "../components/PageHeader";

const Cart = () => {
  const {
    cartProducts,
    addCartProducts,
    desceaseQuantity,
    increaseQuantity,
    totaPriceProduct,
    totalQuantityPoduct,
  } = useContext(cartContext);

  return (
    <div className="space-y-8 mb-5">
      <PageHeader tittle="Sneaker cart" />
      <Table>
        <Table.Head className="text-left">
          <Table.HeadCell className="pl-2">Product name</Table.HeadCell>
          <Table.HeadCell> </Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {cartProducts.map((product) => (
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className=" pl-2 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.Marca} {product.modelo}
              </TableCell>
              <TableCell>
                <div className="flex justify-end items-center">
                  <button
                    className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={() => desceaseQuantity(product.id)}
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <div className="ms-3">
                    <span className="bg-gray-50 w-14 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      {product.quantity}
                    </span>
                  </div>
                  <button
                    className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}

          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 font-extrabold">
            <Table.Cell className="whitespace-nowrap font-extrabold text-gray-800 dark:text-white">
              Total
            </Table.Cell>
            <Table.Cell className="text-right">
              <span className="text-gray-900 dark:text-white">
                $ {totaPriceProduct.toLocaleString("en-EN")} USD
              </span>
            </Table.Cell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 font-extrabold">
            <Table.Cell className="whitespace-nowrap font-extrabold text-gray-800 dark:text-white">
              Quantity
            </Table.Cell>
            <Table.Cell className="text-right">
              <span className="text-gray-900 dark:text-white">
                {totalQuantityPoduct}
              </span>
            </Table.Cell>
          </TableRow>
        </Table.Body>
      </Table>
    </div>
  );
};
export default Cart;
