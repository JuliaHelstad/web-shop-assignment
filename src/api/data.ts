import { ProductItem } from '../types/types'

export const GetProducts = async () => {
  const productList: ProductItem[] = []
  try {
    const response: any = await fetch('https://dummyjson.com/products')

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const result = await response.json()

    result.products.map((p: any) => {
      productList.push(ParseProduct(p))
    })
  } catch (error: any) {
    console.error('Error fetching data:', error.message)
  }
  return productList
}

const ParseProduct = (data: any): ProductItem => {
  const product: ProductItem = {
    id: data.id,
    title: data.title,
    category: data.category,
    description: data.description,
    discountPercentage: data.discountPercentage,
    image: data.thumbnail,
    price: data.price,
    stock: data.stock,
  }
  return product
}
