import productsArray from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productID) => (
                <div key={productID}>
                    {productsArray[parseInt(productID) - 1].title}:{' '}
                    {productsInCart[parseInt(productID)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
