import { CartItem } from '../types/types'

export const findIndexOfProductInCart = (
  cartList: CartItem[],
  productId: number,
) => {
  let index: number = -1

  if (cartList && productId) {
    cartList.findIndex((item) => item.product.id === productId)
  }

  return index
}
