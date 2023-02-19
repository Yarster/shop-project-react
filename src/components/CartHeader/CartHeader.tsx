import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productID) => (
                <div key={productID}>
                    {productsObject[parseInt(productID)].title}:{' '}
                    {productsInCart[parseInt(productID)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
