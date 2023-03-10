import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CartPage from 'pages/CartPage/CartPage'
import { Routes, Route } from 'react-router-dom'
import AboutPage from 'pages/AboutPage/AboutPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductsFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductsInCart = { ...prevState }
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container component="main" sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductsFromCart={removeProductsFromCart}
                            />
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                </Routes>
            </Container>
            <Footer />
        </>
    )
}
export default App
