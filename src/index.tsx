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

type HeaderProps = {
    title: string
}

type ContentProps = {
    text1: string
    text2: string
}

const Header = (props: HeaderProps) => {
    console.log(props)
    return <h1>Hello {props.title}</h1>
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Header title="React" />
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
