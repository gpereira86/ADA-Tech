// import products from './produtos.json'
import { writeFileSync } from 'node:fs'
import path from 'node:path'

const productJson = JSON.stringify([
    {
      "name": "Pair of Socks",
      "amountInStock": 100,
      "unitValue": 5
    },
  
    {
      "name": "T-Shirt",
      "amountInStock": 500,
      "unitValue": 45
    }
  ], null, 0) 

  const foleOutPath = path.join(__dirname, 'generated-products.json')

  
  const products = JSON.parse(productJson)
  
  writeFileSync(foleOutPath, productJson)
  console.log(productJson)
  console.log(products)

// console.log(products)
// products.map(product => console.log(product.name))