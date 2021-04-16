import React from 'react';
import { Dimensions, View } from 'react-native';
import { withBadge, Icon, Header, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { RootState } from 'estore/redux/slice';
import { Order } from 'estore/graphql/generated';

const { width } = Dimensions.get('screen')

type HomeHeaderProps = {
    cart?: Partial<Order>
}

const HomeHeader = ({ cart }: HomeHeaderProps) => {
    const CartIcon = withBadge(cart?.totalQuantity, { status: 'error', containerStyle: { marginRight: 25 } })(Icon) as typeof Icon;
    const MessageIcon = withBadge(4, { status: 'error' })(Icon) as typeof Icon;
    const navigation = useNavigation();
    return (
        <Header
            placement="center"
            leftComponent={
                <Button
                    onPress={() => navigation.goBack()}
                    buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                    icon={<Icon name="search" type="font-awesome" color="black" />}
                />
            }
            leftContainerStyle={{ marginLeft: 0.05 * width }}
            rightComponent={
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        onPress={() => navigation.navigate("ViewCart")}
                        buttonStyle={{ backgroundColor: 'white', padding: 0 }}
                        icon={
                            cart && cart.totalQuantity ? (
                                <CartIcon
                                    type="font-awesome"
                                    name="shopping-cart"
                                    color="black"
                                />
                            ) : (
                                <Icon
                                    type="font-awesome"
                                    name="shopping-cart"
                                    color="black"
                                    containerStyle={{ marginRight: 30 }}
                                />
                            )
                        }
                    />
                    <MessageIcon type="antdesign" name="wechat" color="black" />
                </View>
            }
            rightContainerStyle={{ marginHorizontal: 0.05 * width }}
            backgroundColor="white"
        />
    )
}
const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, null)(React.memo(HomeHeader))