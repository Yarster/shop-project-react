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
                    {productID}: {productsInCart[parseInt(productID)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
