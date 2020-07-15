import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import {
    Container, Content, List, ListItem, Thumbnail, Left, View, Button,
    Body, Right, Card, CardItem
} from 'native-base';
import { withNavigation } from 'react-navigation';
import * as Font from 'expo-font';
import { AppHeader } from '../Components/AppHeader';
import { AppFooter } from '../Components/AppFooter';
import NumericInput from 'react-native-numeric-input';
import { forge } from 'node-forge';
import axios from 'axios';
class CartDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            value: 1,
            totalPrice: 0,
            item: {},
            price: 1
        };
    }
    static navigationOptions = {
        header: null,
    };

    cartList = () => {
        axios.get('http://farmilky.herokuapp.com/api/addtocartget')
            .then((response) => {
                // handle success
                // const arrItem = [{ id: 1, name: 'item1', qnt: 1, price: 3 }, { id: 2, name: 'item2', qnt: 2, price: 3 }];
                arrItem = response.data.data;
                let obj = {};
                arrItem.forEach((item, i) => {
                    obj[item.id] = item;
                    this.setState({
                        item: obj,
                        item_total: arrItem.length
                    })
                })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })

    }
    componentDidMount() {
        this.cartList()


    }
    priceCount = (e, data) => {
        let totalPrice = (this.state.price * e)
        this.setState({ value: e, totalPrice: totalPrice })
        if (e > 0) {
            axios.post('http://farmilky.herokuapp.com/api/addtocartcreate', {
                "user_id": 4,
                "qty": e,
                "milk_id": data.milk_id,
                "status": true
            })
                .then((response) => {
                    // handle success
                    this.cartList()
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                })
        } else {
            this.cartToRemoveItem(4, data)
            this.cartList()
        }

    }
    cartToRemoveItem = (userId, data) => {
        console.log('cartToRemoveItem', userId, data);
        axios.delete('http://farmilky.herokuapp.com/api/addtocartdelete', {
            data: {
                "user_id": data.user_id,
                "milk_id": data.milk_id
            }
        })
            .then((response) => {
                // handle success
                this.cartList()
                console.log('delete seccess', response)
                // this.props.navigation.push('CartDetailsScreen')
            })
            .catch((error) => {
                // handle error
                console.log('delete error');
            })
    }
    render() {
        const cartList = Object.entries(this.state.item).map(([key, data]) => {
            return (<ListItem thumbnail key={key}>
                {console.log(data)}
                <Left>
                    <Thumbnail square source={require('../../assets/images/product.jpg')}
                        style={{ height: 100, width: 100 }}
                    />
                </Left>
                <Body>
                    <Text style={{ fontWeight: '500', fontSize: 18 }}>{data && data.milk_name}</Text>
                    <Text note numberOfLines={1}> Qnty: {data && data.qty} ₹. {data && (data.qty * data.price)} /- | 500ml</Text>
                    <NumericInput
                        onChange={e => this.priceCount(e, data)}
                        minValue={this.state.minValue}
                        value={data.qty}
                    />
                </Body>
                <Right>
                    <Button danger style={styles.removeButton} onPress={() => this.cartToRemoveItem(4, data)}>
                        <Text>Remove</Text>
                    </Button>
                </Right>
            </ListItem>);
        });
        return (
            <Container>
                <AppHeader {...this.props} />
                <Content >
                    <List>
                        {cartList}
                    </List>
                    <Card>
                        <CardItem>
                            <Body>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'stretch',
                                    width: '100%'
                                }}>
                                    <View>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Delivery Address</Text>
                                    </View>
                                    <View ><Text style={{ color: 'green' }}>Edit</Text></View>
                                </View>
                                <Text>
                                    302/1 floor,street-1,sociaty,city
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                    Bill Details
                                </Text>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'stretch',
                                    width: '100%'
                                }}>
                                    <View>
                                        <Text>Item Total</Text>
                                    </View>
                                    <View ><Text>{this.state.item_total}</Text></View>
                                </View>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'stretch',
                                    width: '100%'
                                }}>
                                    <View>
                                        <Text>Delivery Fee</Text>
                                    </View>
                                    <View ><Text>00</Text></View>
                                </View><View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'stretch',
                                    width: '100%'
                                }}>
                                    <View>
                                        <Text>To Pay</Text>
                                    </View>
                                    <View ><Text>10</Text></View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <View style={styles.buttonWrap}>
                        <Button style={styles.button} onPress={() => this.props.navigation.push('CartDetailsScreen')}>
                            <Text style={styles.buttonColor}>Checkout</Text></Button>
                    </View>
                    <TouchableHighlight
                        onPress={() => {
                            var options = {
                                description: 'Credits towards consultation',
                                image: 'https://i.imgur.com/3g7nmJC.png',
                                currency: 'INR',
                                key: 'rzp_test_tTXg1gzPJB870G',
                                amount: '5000',
                                name: 'foo',
                                prefill: {
                                    email: 'void@razorpay.com',
                                    contact: '9191919191',
                                    name: 'Razorpay Software'
                                },
                                theme: { color: '#F37254' }
                            }
                            RazorpayCheckout.open(options).then((data) => {
                                // handle success
                                console.log('data', data)
                                // alert(`Success: ${data.razorpay_payment_id}`);
                            }).catch((error) => {
                                // handle failure
                                console.log('error', error)
                                // alert(`Error: ${error.code} | ${error.description}`);
                            });
                        }}
                    >
                        <Text> Touch Here </Text>
                    </TouchableHighlight>
                </Content>
                <AppFooter {...this.props} />
            </Container>
        );
    }
}
export default CartDetails;
const styles = StyleSheet.create({
    details: { padding: 10 },
    image: { height: 300, width: '100%' },
    title: { fontSize: 16, fontWeight: '500', paddingBottom: 10 },
    button: { backgroundColor: '#07F676', width: '40%', color: 'white', justifyContent: 'center', margin: 20 },
    buttonColor: { color: 'black', fontWeight: '500' },
    counter: { textAlign: 'center', justifyContent: "flex-start", flexDirection: 'row', alignItems: 'center', marginTop: 20 },
    price: { textAlign: 'right', marginLeft: 10 },
    buttonWrap: { justifyContent: 'center', flexDirection: 'row' },
    removeButton: { padding: 5 },
});