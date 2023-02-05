import {
    CardContent,
    CardActions,
    Button,
    Card,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

class ProductListItem extends Component<Props> {
    render() {
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className="product-title">{this.props.title}</div>
                    <div className="product-description">
                        {this.props.description}
                    </div>
                    <div className="product-features">
                        Type:{this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity:{this.props.capacity}
                    </div>
                    <div className="product-price">
                        Price:{this.props.price}
                    </div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value="1" />
                        <Button variant="outlined">+</Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

// const ProductListItem = ({
//     title,
//     description,
//     type,
//     capacity,
//     price,
//     image,
// }: Props) => {}

export default ProductListItem
