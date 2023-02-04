import { CardContent, CardActions, Button, Card } from '@mui/material'
import './ProductListItem.scss'

type Props = {}
const ProductListItem = (props: Props) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-title">iPhone 14 Pro</div>
                <div className="product-description">This iPhone 14 Pro</div>
                <div className="product-features">Type: Phone</div>
                <div className="product-features">Capacity: 256 Gb</div>
                <div className="product-price"> Price: 1500$</div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
