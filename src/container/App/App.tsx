import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setproductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
        3: 1,
    })

    const addProductToCart = (count: number, price: number) => {}
    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
export default App
