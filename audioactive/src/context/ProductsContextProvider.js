import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";

export const ProductContext = createContext()

export default function ProductsContextProvider({ children }) {

    const [products, setProducts] = useState()

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts())
        }

        fetchAPI()
    }, [])



    return (
        <ProductContext.Provider value={products}>
            { children }
        </ProductContext.Provider>
    )
}