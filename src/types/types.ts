export interface ProductItem {
  id: number
  title: string
  image: string
  description: string
  category: string
  price: number
  discountPercentage: number
  stock: number
}

export interface CartItem {
  id: number
  product: ProductItem
  amount: number
}
