import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                component={'h2'}
                variant="h4"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                Products List
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 14 Pro"
                        description="This iPhone 14 Pro"
                        type="Phone"
                        capacity="512 Gb"
                        price={1500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 13 Pro"
                        description="This iPhone 13 Pro"
                        type="Phone"
                        capacity="256 Gb"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 12 Pro"
                        description="This iPhone 12 Pro"
                        type="Phone"
                        capacity="128 Gb"
                        price={900}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
