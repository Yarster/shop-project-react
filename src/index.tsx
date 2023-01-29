import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header'
import Content from './Content'
import List from './List'

const App = () => {
    return (
        <>
            <Header title="React" year={2023} />
            <Header title="TS" />
            <Content text1="lorem" text2="lorem2" />
            <List item1="App" item2="React" item3="TS" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
