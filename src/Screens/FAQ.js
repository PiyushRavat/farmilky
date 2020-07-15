import React, { Component } from 'react';
import { Text, View, StyleSheet, Icon } from 'react-native';
import { Container, Content, Button, Form, Item, Picker, Accordion } from 'native-base';
import * as Font from 'expo-font';
import { AppFooter } from '../Components/AppFooter'
import { AppHeader } from '../Components/AppHeader'
const dataArray = [
    { title: "Is there any delivery charge?", content: "There is no delivery charge on any orders placed with us." },
    { title: "How does the subscrioption work?", content: "Its simple. You choose your favorite brand, quantity and frequency. You make a payment for as little as 3 deliveries(trial) or a full month (30 deliveries). Sit back and enjoy products delivered right to your doorstep very morning." },
    { title: "Which milk brands do you deliver", content: "We deliver all common milk brans including Amul, Gokul, Mother Dairy, Mahanada, Aarey, Warna and many more. You can see the full list on our app or contect us on 820093517 or 9484643093" },
    { title: "I need delivery at 6am in the morning. Is it possible?", content: "We diliver all order between 5am - 7am in the morning. However, we cannot promise an exact time of delivery." },
    { title: "What payment options  can I use?", content: "We currently support payment via Debit/Credit card, Netbanking, Wallets and UPI." },
    { title: "What's your cancellation policy?", content: "You can cancel anytime before 11pm on the day before the delivery with just a few taps on the app" }
];
export default class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            selected2: undefined,
            open: true
        };
    }
    static navigationOptions = {
        header: null,
    };
    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <Container>
                <AppHeader {...this.props}></AppHeader>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',margin:20 }}>
                    <Accordion
                        dataArray={dataArray}
                        icon="add"
                        expandedIcon="remove"
                        iconStyle={{ color: "green" }}
                        expandedIconStyle={{ color: "red" }}
                    />
                </View>
                <AppFooter {...this.props} />
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        textAlign: 'center'
    },
    button: {
        width: 100,
        backgroundColor: '#07f676',
        padding: 5,
        margin: 5,
        justifyContent: 'center',

    }
});