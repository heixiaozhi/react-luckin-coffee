import { productList as mockProductList } from '../data'
import { ProductListType } from '../types/product'

const fetchData = async (): Promise<ProductListType[]> => {
  // 模拟网络请求
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

  return mockProductList
}
export default fetchData
