import {
    CardContent,
    CardActions,
    Button,
    Card,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}
const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount(count + 1)
    }

    const onDecrement = () => {
        setCount(count - 1)
    }
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">Capacity:{capacity}</div>
                <div className="product-price">Price:{price}</div>
                <div className="product-quantity">
                    <Button variant="outlined" onClick={() => onDecrement()}>
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button variant="outlined" onClick={() => onIncrement()}>
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
