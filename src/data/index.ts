import coffee1 from '../assets/images/coffee-2.png'
import hero2 from '../assets/images/hero-2.jpg'
import { ProductListType } from '../types/product'

const navList = [
  {
    path: '',
    content: '经典菜单',
  },
  {
    path: 'week',
    content: '每周9.9',
  },
  {
    path: 'myOrder',
    content: '我的常点',
  },
]

const menuList = [
  {
    id: 1,
    name: '人气Top',
  },
  {
    id: 2,
    name: '轻轻茉莉',
  },
  {
    id: 3,
    name: '今日特价',
  },
  {
    id: 4,
    name: '下午茶',
  },
  {
    id: 5,
    name: '其他',
  },
  {
    id: 6,
    name: '其他',
  },
  {
    id: 7,
    name: '其他',
  },
  {
    id: 8,
    name: '其他',
  },
  {
    id: 9,
    name: '其他',
  },
  {
    id: 10,
    name: '其他',
  },
  {
    id: 11,
    name: '其他',
  },
  {
    id: 12,
    name: '其他',
  },
  {
    id: 13,
    name: '其他',
  },
]

const productList: ProductListType[] = [
  {
    categoryId: 'cat_1',
    title: '人气Top',
    summary: '瑞幸必喝爆款, 无限回购',
    products: [
      {
        productId: 1,
        img: coffee1,
        name: '生椰拿铁',
        subtitle: '3年突破7亿杯, 原创YYDS!',
        price: {
          current: 13.9,
          original: 19.9,
        },
        tag: '爆款返场',
        selected: true,
        quantity: 1,
        sku: '大杯16oz/冰/少甜/不含轻咖',
      },
      {
        productId: 2,
        img: coffee1,
        name: '丝绒拿铁',
        subtitle: '丝化感提升20.99%',
        price: {
          current: 16,
          original: 20.5,
        },
        tag: '',
        selected: true,
        quantity: 1,
        sku: '大杯16oz/冰/少甜/不含轻咖',
      },
    ],
  },
  {
    categoryId: 'cat_2',
    title: '轻轻茉莉',
    summary: '真奶好茶，轻负担',
    coverImg: hero2,
    products: [
      {
        productId: 3,
        img: coffee1,
        name: '鲜翠轻轻茉莉',
        subtitle: '鲜萃现泡0植脂末, 花香鲜灵奶香纯正',
        price: {
          current: 9.9,
          original: 18.8,
        },
        tag: '含总统黄油',
        selected: true,
        quantity: 1,
        sku: '大杯16oz/冰/少甜/不含轻咖',
      },
      {
        productId: 4,
        img: coffee1,
        name: '鲜翠轻轻茉莉(超大杯)',
        subtitle: '低卡，低糖，超大杯也不增加负担',
        price: {
          current: 12.9,
          original: 20.88,
        },
        tag: '',
        selected: true,
        quantity: 1,
        sku: '大杯16oz/冰/少甜/不含轻咖',
      },
    ],
  },
  {
    categoryId: 'cat_3',
    title: '今日特价',
    summary: '特价商品，一口价',
    products: [
      {
        productId: 5,
        img: coffee1,
        name: '橙C美式',
        subtitle: '0脂, 一杯相当于一个橘子',
        price: {
          current: 6.9,
          original: 19.9,
        },
        tag: '',
        selected: true,
        quantity: 1,
        sku: '大杯16oz/冰/少甜/不含轻咖',
      },
      {
        productId: 6,
        img: coffee1,
        name: '轻咖柠檬茶',
        subtitle: '低卡, 解暑夏天必点',
        price: {
          current: 6.9,
          original: 19.9,
        },
        tag: '',
        selected: true,
        quantity: 1,
        sku: '大杯16oz/冰/少甜/不含轻咖',
      },
    ],
  },
  {
    categoryId: 'cat_4',
    title: '下午茶',
    summary: '缓解工作压力，来一杯释放活力',
    products: [
      {
        productId: 7,
        img: coffee1,
        name: '橙C美式',
        subtitle: '0脂, 一杯相当于一个橘子',
        price: {
          current: 6.9,
          original: 19.9,
        },
        tag: '能量爆棚',
        selected: true,
        quantity: 1,
        sku: '大杯16oz/冰/少甜/不含轻咖',
      },
      {
        productId: 8,
        img: coffee1,
        name: '苹果C美式',
        subtitle: '0脂, 一杯相当于一个苹果',
        price: {
          current: 6.9,
          original: 19.9,
        },
        tag: '酸爽无比',
        selected: true,
        quantity: 1,
        sku: '大杯16oz/冰/少甜/不含轻咖',
      },
      {
        productId: 9,
        img: coffee1,
        name: '葡萄C美式',
        subtitle: '0脂, 一杯相当于200克葡萄',
        price: {
          current: 6.9,
          original: 19.9,
        },
        tag: '',
        selected: true,
        quantity: 1,
        sku: '大杯16oz/冰/少甜/不含轻咖',
      },
    ],
  },
  {
    categoryId: 'cat_5',
    title: '其他',
    summary: '曲奇，饼干，各种小吃',
    products: [
      {
        productId: 10,
        img: coffee1,
        name: '曲奇饼干',
        subtitle: '口感酥脆',
        price: {
          current: 6.9,
          original: 19.9,
        },
        tag: '',
        selected: true,
        quantity: 1,
        sku: '2*块, 200克',
      },
    ],
  },
]

export { navList, menuList, productList }
