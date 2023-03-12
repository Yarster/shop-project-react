import { CardContent, CardActions, Button, Card } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

type Props = {
    id: number
    addProductToCart: (id: number, count: number) => void
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
    isLiked?: boolean
}
const ProductListItem = ({
    id,
    title,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState: number) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState: number) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.productLike[id])
    const dispatch = useAppDispatch()

    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch({
                                  type: 'REMOVE_LIKE',
                                  id,
                              })
                            : dispatch({
                                  type: 'ADD_LIKE',
                                  id,
                              })
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type:{type}</div>
                <div className="product-features">Capacity:{capacity}</div>
                <div className="product-price">Price:{price}</div>
                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                    minCount={1}
                />
            </CardContent>
            <CardActions className="btns-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductListItem
