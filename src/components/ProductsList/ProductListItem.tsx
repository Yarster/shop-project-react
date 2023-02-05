import { CardContent, CardActions, Button, Card } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}
const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
}: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">Capacity:{capacity}</div>
                <div className="product-price">Price:{price}</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
