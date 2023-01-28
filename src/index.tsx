import React from 'react'
import ReactDOM from 'react-dom/client'

const title = React.createElement('h1', null, 'Hello world')
console.log(title)

let content = React.createElement('p', null, 'Hello world blab bald ald')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {content}
        {content}
    </React.StrictMode>
)
