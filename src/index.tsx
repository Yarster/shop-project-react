import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'

type ContentProps = {
    text1: string
    text2: string
}

const Content = ({ text1, text2 }: ContentProps) => {
    return (
        <React.Fragment>
            <p>{text1}</p>
            <p>{text2}</p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Header title="React" year={2023} />
            <Header title="TS" />
            <Content text1="lorem" text2="lorem2" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
