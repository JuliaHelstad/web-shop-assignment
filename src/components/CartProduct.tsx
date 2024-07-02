import { ProductItem } from '../types/types'
import styles from '../styles/cart.module.css'
import { useCartContext } from '../utils/CartContext'

const CartProduct = ({ product }: { product: ProductItem }) => {
  const cartContext = useCartContext()

  const { cartList, setCartList } = cartContext

  const deleteProductFromCart = () => {
    //TODO: Make it possible to only remove one of the same product if there is more than one of the same.
    const newItems = cartList.filter((item) => item.id !== product.id)
    setCartList(newItems)
  }

  return (
    <div className={styles.productContainer}>
      <img alt={'Image of product'} className={styles.productImage} src={product.image} />
      <div className={styles.productText}>
        {product.title}
        <button
          className={styles.deleteProductButton}
          onClick={() => deleteProductFromCart()}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default CartProduct
