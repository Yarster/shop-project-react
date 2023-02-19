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
    })

    const addProductToCart = (id: number, count: number) => {
        setproductsInCart((prevState) => ({
            [id]: prevState[id] + count,
        }))
    }
    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(2, 1)}>
                add to cart (2 id, count 1)
            </button>
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
export default App
