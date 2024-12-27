import { Product } from "./01-produto";

const product1: Readonly<Product> ={
    name:'Pair of Socks',
    amountInStock: 100,
    unitValue: 5,
}

// product1.name = 'Socks'

const productAllOptional: Partial<Product> = {
    unitValue: 20
}

const productAllRequired: Required<Product> ={
    name: "Jackeet",
    amountInStock:30,
    unitValue: 180,
    barCode: 'xpto-xpto-xpto-xpto'
}

const productOmitStockAndBarCode: Omit<Product, "amountInStock" | "barCode"> = {
    name: "Shorts",
    unitValue: 80,
}

const productOnlyNameAndvalue: Pick<Product, "name" | "unitValue"> = {
    name: "Shorts",
    unitValue: 80,
}