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
        totalCount: 10,
        totalPrice: 100,
    })
    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main />
            <Footer />
        </>
    )
}
export default App
