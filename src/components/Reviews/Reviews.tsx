import { Typography } from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews = [
        {
            name: 'Ольга',
            text: 'Брали телефон чоловіку. Дуже задоволений!! Варто брати, якщо ви хочете обновити свій наприклад 8й чи 11й айфон.Швидкий, батарея гарно тримає. ',
        },
        {
            name: 'Макс',
            text: 'Дуже продуктивний телефон, всі відповідає всім моїм вимогам. Це дійсно гарна річ',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{ margin: '30px 0' }}>
                Reviews
            </Typography>
            {reviews.map((item) => (
                <div>
                    <div>{item.name}:</div>
                    <div>{item.text}</div>
                </div>
            ))}
        </div>
    )
}
export default Reviews
