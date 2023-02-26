import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import CartProductsListItem from './CartProductsListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    removeProductsFromCart?: (id: number) => void
}

const CartProductsList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductsListItem,
    removeProductsFromCart,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductsFromCart={removeProductsFromCart}
                />
            ))}
        </>
    )
}
export default CartProductsList
