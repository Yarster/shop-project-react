import React from 'react'
import ReactDOM from 'react-dom/client'

const title = React.createElement('h1', null, 'Hello world')
console.log(title)

let content = React.createElement('p', null, 'Hello world blab bald ald')

// jsx

const title = (
    <h1 id="title" className="test">
        Hello world
    </h1>
)
const content = (
    <div>
        <p>
            <span>Hello</span>p
        </p>
        <p>Hello p2</p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {title}
        {content}
    </React.StrictMode>
)
