import { Grid, Typography } from '@mui/material'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartProductsListItemExtended from 'components/CartProductsList/CartProductsListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductsFromCart: (id: number) => void
}

const CartPage = ({ productsInCart, removeProductsFromCart }: Props) => {
    return (
        <div>
            <Typography component="h1" variant="h4">
                Cart
            </Typography>
            <Grid container spacing={4} sx={{ margin: 0 }}>
                <CartProductsList
                    productsInCart={productsInCart}
                    CartItem={CartProductsListItemExtended}
                    removeProductsFromCart={removeProductsFromCart}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
