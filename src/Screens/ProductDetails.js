import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import {
    Container, Content, View, Body, Left, Button, Right
} from 'native-base';
import * as Font from 'expo-font';
import { AppHeader } from '../Components/AppHeader';
import { AppFooter } from '../Components/AppFooter';
import NumericInput from 'react-native-numeric-input';
import axios from 'axios';
class ProductDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            value: 1,
            minValue: 1,
            price: 1,
            totalPrice: 1,
            list: {}
        };
    }
    static navigationOptions = {
        header: null,
    };
    componentDidMount() {
        console.log('selected item', this.props.navigation.state.params.item)
        this.setState({
            list: this.props.navigation.state.params.item,
            price: this.props.navigation.state.params.item.price,
            totalPrice: this.props.navigation.state.params.item.price,
            id: this.props.navigation.state.params.item.id,
        })
    }
    priceCount = (e) => {
        let totalPrice = (this.state.price * e)
        this.setState({ value: e, totalPrice: totalPrice })
    }
    onAddToCart = () => {
        axios.post('http://farmilky.herokuapp.com/api/addtocartcreate', {
            "user_id": 4,
            "qty": this.state.value,
            "milk_id": this.state.id,
            "status": true
        })
            .then((response) => {
                // handle success
                this.props.navigation.push('CartDetailsScreen')
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }
    render() {
        const { list } = this.state;
        return (
            <Container>
                <AppHeader {...this.props} />
                <Content style={{ flex: 1 }}>
                    <View>
                        <Image square source={require('../../assets/images/product.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.details} >
                        <Text style={styles.title}>{list.milk_name}</Text>
                        <Text note>{list.description}</Text>
                        <View style={styles.counter}>
                            <NumericInput
                                onChange={e => this.priceCount(e)}
                                minValue={this.state.minValue}
                                value={this.state.value}
                            />
                            <Text style={styles.price} > ₹. {this.state.totalPrice} {list.price}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonWrap}>
                        <Button style={styles.button} onPress={this.onAddToCart}>
                            <Text style={styles.buttonColor}>Add To Cart</Text></Button>
                    </View>
                </Content>
                <AppFooter {...this.props} />
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    details: { padding: 10 },
    image: { height: 300, width: '100%' },
    title: { fontSize: 16, fontWeight: '500', paddingBottom: 10 },
    button: { backgroundColor: '#07F676', width: '40%', color: 'white', justifyContent: 'center', margin: 20 },
    buttonColor: { color: 'black', fontWeight: '500' },
    counter: { textAlign: 'center', justifyContent: "flex-start", flexDirection: 'row', alignItems: 'center', marginTop: 20 },
    price: { textAlign: 'right', marginLeft: 10 },
    buttonWrap: { justifyContent: 'center', flexDirection: 'row' }
});
export default ProductDetails;