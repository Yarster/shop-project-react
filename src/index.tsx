import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement(
//     'h1',
//     {
//         id:"test-1"
//         className: "test-2"
//         name:"test-3"
//             },
// 'Hello world')

// console.log(title)

// let content = React.createElement('p', null, 'Hello world blab bald ald')

// jsx

// const title = (
//     <h1 id="title" className="test">
//         Hello world
//     </h1>
// )
// const content = (
//     <div>
//         <p>
//             <span>Hello</span>p
//         </p>
//         <p>Hello p2</p>
//     </div>
// )

const Header = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, facilis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                accusamus.
            </p>
        </React.Fragment>
    )
}
conts App = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, facilis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                accusamus.
            </p>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Header />
        <Content />
        <App />
    </React.StrictMode>
)
