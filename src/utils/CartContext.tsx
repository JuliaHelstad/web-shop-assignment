import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react'
import { CartItem } from '../types/types'

type CartContextType = {
  cartList: CartItem[]
  setCartList: Dispatch<SetStateAction<CartItem[]>>
}

const defaultValue: CartContextType = {
  cartList: [],
  setCartList: () => {},
}

export const Context = createContext<CartContextType>(defaultValue)

export const CartContext = ({ children }: { children: ReactNode }) => {
  const [cartList, setCartList] = useState<CartItem[]>([])

  return (
    <Context.Provider value={{ cartList, setCartList }}>
      {children}
    </Context.Provider>
  )
}

export const useCartContext = () => useContext(Context)
