import { CardContent, CardActions, Button, Card } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}
const ProductListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">{props.title}</div>
                <div className="product-description">{props.description}</div>
                <div className="product-features">Type:{props.type}</div>
                <div className="product-features">
                    Capacity:{props.capacity}
                </div>
                <div className="product-price">Price:{props.price}</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
