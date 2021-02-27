import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements';
import styles from 'estore/components/ProductListLayout/styles';

type Product = {
    name: string
    price: string
    image: string
    sale?: string | undefined | null
}

type ProductListProps = {
    products: Product[]

}

const ProductListLayout = ({ products }: ProductListProps) => {
    return (
        <View style={styles.productsLayoutContainer}>
            {
                products.map((product, index) => (
                    <View style={styles.productItem} key={index}>
                        {product.sale ? (
                            <View style={styles.productSale}>
                                <Text style={styles.saleText}>{'-' + product.sale + '%'}</Text>
                            </View>
                        ): null}
                        <View>
                            <Image resizeMode="cover" style={styles.productImage} source={{ uri: product.image }}/>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>{product.price + ' ₫'}</Text>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}
export default ProductListLayout;