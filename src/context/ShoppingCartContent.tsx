import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react'
import coffee from '../assets/images/coffee-2.png'
import { ProductType } from '../types/product'

type ShoppingCarProviderChildren = {
  children: React.ReactNode
}

type ActionType =
  | {
      type: 'increase_quantity' | 'decrease_quantity' | 'change_selected'
      payload: ProductType
    }
  | {
      type: 'total_selected' | 'clear_cart'
      payload: boolean
    }

const initialArg: ProductType[] = [
  {
    productId: 1,
    img: coffee,
    name: '生椰拿铁',
    subtitle: '3年突破7亿杯, 原创YYDS!',
    price: {
      current: 13.9,
      original: 19.9,
    },
    tag: '爆款返场',
    sku: '大杯16oz/冰/少甜/不含轻咖',
    quantity: 1,
    selected: true,
  },
]

function reducer(state: ProductType[], { type, payload }: ActionType) {
  switch (type) {
    case 'increase_quantity': {
      // 第一次添加该商品
      if (
        state.find((item) => item.productId === payload.productId) === undefined
      ) {
        return [...state, { ...payload, quantity: 1 }]
      }
      return state.map((item) => {
        if (item.productId === payload.productId) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    }
    case 'decrease_quantity': {
      if (
        state.find((item) => item.productId === payload.productId)?.quantity ===
        1
      ) {
        return state.filter((item) => item.productId !== payload.productId)
      }
      return state.map((item) => {
        if (item.productId === payload.productId) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    }
    case 'change_selected': {
      return state.map((item) => {
        if (item.productId === payload.productId) {
          return { ...item, selected: !item.selected }
        }
        return item
      })
    }
    case 'total_selected': {
      return state.map((item) => {
        return { ...item, selected: payload }
      })
    }
    case 'clear_cart': {
      if (payload) return []
      return state
    }
    default:
      return state
  }
}

type ShoppingCartType = {
  carts: ProductType[]
  increaseQuantity: (item: ProductType) => void
  decreaseQuantity: (item: ProductType) => void
  changeSelected: (item: ProductType) => void
  totalSelected: (payload: boolean) => void
  clearCart: (payload: boolean) => void
  getTotalPrice: number
  getCheapTotalPrice: number
  getTotalQuantity: number
  getProductQuantity: number
  getSelectedQuantity: number
  getCurrentProductQuantity: (item: ProductType) => number
}

export const ShoppingCartContent = createContext<ShoppingCartType>(
  {} as ShoppingCartType
)

export function useShoppingCart() {
  return useContext(ShoppingCartContent)
}

const ShoppingCartProvider = ({ children }: ShoppingCarProviderChildren) => {
  const [carts, dispatch] = useReducer(reducer, initialArg)

  const increaseQuantity = useCallback((item: ProductType) => {
    dispatch({ type: 'increase_quantity', payload: item })
  }, [])

  const decreaseQuantity = useCallback((item: ProductType) => {
    dispatch({ type: 'decrease_quantity', payload: item })
  }, [])

  const changeSelected = useCallback((item: ProductType) => {
    dispatch({ type: 'change_selected', payload: item })
  }, [])

  const totalSelected = useCallback((payload: boolean) => {
    dispatch({ type: 'total_selected', payload })
  }, [])

  const clearCart = useCallback((payload: boolean) => {
    dispatch({ type: 'clear_cart', payload })
  }, [])

  const getTotalPrice = useMemo(() => {
    return carts.reduce((sum, item) => {
      if (!item.selected) return sum
      return sum + item.price.current * item.quantity
    }, 0)
  }, [carts])

  const getCheapTotalPrice = useMemo(() => {
    return carts.reduce((sum, item) => {
      if (!item.selected) return sum
      return sum + item.price.original * item.quantity
    }, 0)
  }, [carts])

  const getTotalQuantity = useMemo(() => {
    return carts.reduce((sum, item) => {
      if (!item.selected) return sum
      return sum + item.quantity
    }, 0)
  }, [carts])

  const getProductQuantity = useMemo(() => {
    return carts.length
  }, [carts.length])

  const getSelectedQuantity = useMemo(() => {
    return carts.reduce((sum, item) => {
      if (item.selected) return sum + 1
      return sum
    }, 0)
  }, [carts])

  const getCurrentProductQuantity = useCallback(
    (product: ProductType) => {
      // 得到当前产品数量
      const currentProduct = carts.find(
        (cart) => cart.productId === product.productId
      )
      if (!currentProduct) return 0
      return currentProduct.quantity
    },
    [carts]
  )

  return (
    <ShoppingCartContent.Provider
      value={{
        carts,
        increaseQuantity,
        decreaseQuantity,
        changeSelected,
        getTotalPrice,
        getCheapTotalPrice,
        getTotalQuantity,
        getProductQuantity,
        totalSelected,
        getSelectedQuantity,
        clearCart,
        getCurrentProductQuantity,
      }}
    >
      {children}
    </ShoppingCartContent.Provider>
  )
}
export default ShoppingCartProvider
