import classes from './Content.module.css'

const { content, purple, peru } = classes

type ContentProps = {
    text1: string
    text2: string
}

const Content = ({ text1, text2 }: ContentProps) => {
    let data = false
    return (
        <>
            <p className={`${content} ${data ? purple : peru}`}>{text1}</p>
            <p>{text2}</p>
        </>
    )
}

export default Content
