type Product =  {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: Product[] = [
    {
        title: 'iPhone 14 Pro Max',
        description: 'This is iPhone 14 Pro Max',
        type: 'phone',
        capacity: '512',
        price: 2500,
    },
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 2000,
    },
    {
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '256',
        price: 1500,
    },
    {
        title: 'iPhone 13 Pro Max',
        description: 'This is iPhone 13 Pro Max',
        type: 'phone',
        capacity: '256',
        price: 2100,
    },
    {
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 1700,
    },
    {
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '256',
        price: 1200,
    },
]

export default productsArray