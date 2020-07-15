import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import styles from './style';

const { width } = Dimensions.get('window');
// import Header from '../../Components/Header';
import { AppHeader } from '../../Components/AppHeader';
import { AppFooter } from '../../Components/AppFooter';
import {
  Content, Card, CardItem, Button, Footer, List, ListItem, Thumbnail, Left,
  Body, Right, Container
} from 'native-base';
import axios from 'axios';
import { DangerZone } from 'expo';
const { Stripe } = DangerZone;
import { PaymentsStripe } from 'expo-payments-stripe';

// import Checkout from 'expo-stripe-checkout';
// var stripe = require('stripe-client')('pk_live_3gmgkvFYCfttqpSXOiCwby7j');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  async componentDidMount() {
    axios.get('http://farmilky.herokuapp.com/api/milk/')
      .then((response) => {
        // handle success
        console.log('response', response.data)
        this.setState({
          list: response.data
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }
  render() {
    const numbers = [1, 2, 3];
    const { list } = this.state;
    const doubled = numbers.map((number, key) =>
      <Card style={{ width: 200, borderRadius: 10, margin: 30 }} key={key}>
        <CardItem cardBody bordered style={{ borderRadius: 20, width: "100%" }}>
          <Image source={{ uri: "http://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/0496f21dbec249318ac3707447e0de78" }} style={{ height: 200, width: '100%', borderRadius: 10 }} />
        </CardItem>
      </Card>
    );
    const ProductList = list.map((list, key) =>
      <ListItem thumbnail onPress={() => this.props.navigation.push('ProductDetailsScreen', { item: list })} key={key}>
        <Left>
          <Thumbnail square source={require('../../../assets/images/product.jpg')} />
        </Left>
        <Body>
          <Text style={{ fontWeight: '500', fontSize: 18 }}>{list.milk_name}</Text>
          <Text note numberOfLines={1} >{list.description}</Text>
          <Text note numberOfLines={1}> ₹.{list.price} {list.available}</Text>
        </Body>
        <Right>
          <Text style={{ color: 'green' }} onPress={() => this.props.navigation.push('CartDetailsScreen')}>Add to Cart</Text>
        </Right>
      </ListItem>
    );
    return (
      <Container style={styles.container}>
        <AppHeader {...this.props} />
        <Content>
          <ScrollView horizontal={true} style={styles.container}>
            {doubled}
          </ScrollView>
          {/* product */}
          <ScrollView horizontal={true} >
            <View style={{ width: 100, margin: 10 }}>
              <Image source={require('../../../assets/images/product.jpg')} style={styles.image} />
              <View style={{ alignItems: 'center', justifyContent: 'center', flexWrap: "wrap" }}>
                <Text>Product Name</Text>
              </View>
            </View>
            <View style={{ width: 100, margin: 10 }}>
              <Image source={require('../../../assets/images/product.jpg')} style={styles.image} />
              <View style={{ alignItems: 'center', justifyContent: 'center', flexWrap: "wrap" }}>
                <Text>Product Name</Text>
              </View>
            </View>
            <View style={{ width: 100, margin: 10 }}>
              <Image source={require('../../../assets/images/product.jpg')} style={styles.image} />
              <View style={{ alignItems: 'center', justifyContent: 'center', flexWrap: "wrap" }}>
                <Text>Product Name</Text>
              </View>
            </View>
            <View style={{ width: 100, margin: 10 }}>
              <Image source={require('../../../assets/images/product.jpg')} style={styles.image} />
              <View style={{ alignItems: 'center', justifyContent: 'center', flexWrap: "wrap" }}>
                <Text>Product Name</Text>
              </View>
            </View>
            <View style={{ width: 100, margin: 10 }}>
              <Image source={require('../../../assets/images/product.jpg')} style={styles.image} />
              <View style={{ alignItems: 'center', justifyContent: 'center', flexWrap: "wrap" }}>
                <Text>Your Your</Text>
              </View>
            </View>
            {/* <StripeCheckout
              publicKey="sk_test_4eC39HqLyjWDarjtT1zdp7dc"
              amount={100000}
              imageUrl="https://pbs.twimg.com/profile_images/778378996580888577/MFKh-pNn_400x400.jpg"
              storeName="Stripe Checkout"
              description="Test"
              currency="USD"
              allowRememberMe={false}
              prepopulatedEmail="test@test.com"
              onClose={this.onClose}
              onPaymentSuccess={this.onPaymentSuccess}
            /> */}

          </ScrollView>
          <List>
            {ProductList}

          </List>

        </Content>
        <AppFooter {...this.props} />
      </Container>
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // margin: 5,
//     // padding: 5
//   },
//   content: {
//     margin: 20,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     position: 'relative'
//   },
//   image: { width: 100, height: 100, borderRadius: 50 }
// });