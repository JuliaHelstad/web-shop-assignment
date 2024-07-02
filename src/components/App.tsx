import { useEffect, useState } from 'react'
import { ProductItem } from '../types/types'
import { GetProducts } from '../api/data'
import Product from './Product'
import Cart from './Cart'
import styles from '../styles/app.module.css'

const App = () => {
  const [products, setProducts] = useState<ProductItem[] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [allProducts, setAllProducts] = useState<ProductItem[]>([])

  const categories: string[] = [
    'all',
    'beauty',
    'fragrances',
    'furniture',
    'groceries',
  ]

  useEffect(() => {
    async function fetchProducts() {
      let productList = await GetProducts()
      setProducts(productList)
      setAllProducts(productList)
    }
    fetchProducts()
  }, [])

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setProducts(allProducts)
    } else {
      setProducts(allProducts.filter((p) => p.category == category))
    }
  }

  //TODO: More filters and search bar
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.title}>
          <h1>Shoppingly Shop</h1>
          <p>Everything and Nothing</p>
        </div>
        <div className={styles.filter}>
          <p>Filter by category</p>
          <select
            value={selectedCategory}
            onChange={(e) => handleSelectCategory(e.target.value)}
          >
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <div className={styles.cart}>
        <Cart />
      </div>
      <div className={styles.productList}>
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default App
