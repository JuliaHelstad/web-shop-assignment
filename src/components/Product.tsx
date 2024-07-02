import { useState } from 'react'
import styles from '../styles/product.module.css'
import { ProductItem } from '../types/types'
import arrowDown from '../images/arrowDown.png'
import { useCartContext } from '../utils/CartContext'
import { findIndexOfProductInCart } from '../utils/findIndexOfProductInCart'

const Product = ({ product }: { product: ProductItem }) => {
  const [expanded, setExpanded] = useState(false)

  const cartContext = useCartContext()

  const { cartList, setCartList } = cartContext

  const addProductToCart = () => {
    const productIndex = findIndexOfProductInCart(cartList, product.id)
    if (productIndex !== -1) {
      const updatedCartList = cartList.map((item, index) =>
        index === productIndex ? { ...item, amount: item.amount + 1 } : item,
      )
      setCartList(updatedCartList)
    } else {
      setCartList([...cartList, { id: product.id, product, amount: 1 }])
    }
  }

  return (
    <div className={styles.container}>
      <img alt={'Image of product'} src={product.image} className={styles.image} />
      <div className={styles.textContainer}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>{product.price} SEK</div>
        {product.stock === 0 && (
          <div className={styles.notAvailable}>
            Sorry, this product is not available at the moment.
          </div>
        )}
        {product.stock < 5 && (
          <div className={styles.availabilityLessThanFive}>
            Hurry! Only {product.stock} more left of this product.
          </div>
        )}
        {product.stock > 5 && (
          <div className={styles.available}>{product.stock} left in stock.</div>
        )}
        {expanded && (
          <div className={styles.description}>{product.description}</div>
        )}
      </div>
      <div className={styles.buttons}>
        {!expanded && (
          <img
            onClick={() => setExpanded(!expanded)}
            src={arrowDown}
            className={styles.arrow}
          />
        )}
        {expanded && (
          <img
            onClick={() => setExpanded(!expanded)}
            src={arrowDown}
            className={styles.arrowRotate}
          />
        )}
        <button className={styles.addToCart} onClick={() => addProductToCart()}>
          + Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product
