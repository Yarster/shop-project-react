import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'

type Props = {}

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 1,
        totalPrice: 500,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))
    }
    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <button onClick={() => addProductToCart(5, 500)}>
                Add to cart (5 count, 500$ - price)
            </button>
            <Main />
            <Footer />
        </>
    )
}
export default App
