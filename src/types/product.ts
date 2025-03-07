export type ProductType = {
  productId: number
  img: string
  name: string
  subtitle: string
  price: {
    current: number
    original: number
  }
  tag: string
  sku: string
  quantity: number
  selected: boolean
}

export type ProductListType = {
  categoryId: string
  title: string
  summary: string
  coverImg?: string
  products: ProductType[]
}
