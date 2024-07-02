import { useState } from 'react'
import { useCartContext } from '../utils/CartContext'
import shoppingCart from '../images/shoppingCart.png'
import styles from '../styles/cart.module.css'
import CartProduct from './CartProduct'

const Cart = () => {
  const [expanded, setExanded] = useState<boolean>(false)
  const cartContext = useCartContext()

  const { cartList } = cartContext
  //TODO: Change design if there is more of the same product. Ex: 3 x Lipstick....
  return (
    <div className={styles.cartContainer}>
      <img
        alt={'Shopping cart'}
        onClick={() => setExanded(!expanded)}
        className={styles.shoppingCartImage}
        src={shoppingCart}
      ></img>
      {expanded && (
        <div className={styles.cartList}>
          {cartList.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cartList?.map((item) => (
              <CartProduct key={item.product.id} product={item.product} />
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default Cart
