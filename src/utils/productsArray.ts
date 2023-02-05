type Product =  {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: Product[] = [
    {
        id:1,
        title: 'iPhone 14 Pro Max',
        description: 'This is iPhone 14 Pro Max',
        type: 'phone',
        capacity: '512',
        price: 2500,
    },
    {
        id:2,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 2000,
    },
    {
        id:3,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '128',
        price: 1500,
    },
    {
        id:4,
        title: 'iPhone 13 Pro Max',
        description: 'This is iPhone 13 Pro Max',
        type: 'phone',
        capacity: '512',
        price: 2100,
    },
    {
        id:5,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 1700,
    },
    {
        id:6,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '128',
        price: 1200,
    },
]

export default productsArray