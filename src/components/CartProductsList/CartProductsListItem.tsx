import { Product } from 'utils/productsArray'

type Props = {
    product: Product
    productCount: number
}

const CartProductsListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title}: {productCount}
        </div>
    )
}
export default CartProductsListItem
