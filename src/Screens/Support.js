import React, { Component } from 'react';
import { Text, View, StyleSheet, Icon, Linking } from 'react-native';
import { Container, Content, Button, Form, Item, Picker, Accordion } from 'native-base';
import * as Font from 'expo-font';
import { AppFooter } from '../Components/AppFooter'
import { AppHeader } from '../Components/AppHeader'
import RBSheet from "react-native-raw-bottom-sheet";
import ActionSheet from 'react-native-actionsheet'

export default class Support extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            selected2: undefined,
            open: true
        };
    }
    async componentWillMount() {

        // const stripe = Stripe.setOptionsAsync({
        //     publishableKey: "pk_test_q0bUSMkc6OHSyFedJlxb1Ya000tz2z1wJK"
        // });


        // const params = {
        //     // mandatory
        //     number: '4242424242424242',
        //     expMonth: 11,
        //     expYear: 17,
        //     cvc: '223',
        //     // optional
        //     name: 'Test User',
        //     currency: 'usd',
        //     addressLine1: '123 Test Street',
        //     addressLine2: 'Apt. 5',
        //     addressCity: 'Test City',
        //     addressState: 'Test State',
        //     addressCountry: 'Test Country',
        //     addressZip: '55555',
        // };
        // const token = await Stripe.createTokenWithCardAsync(params);
    }
    static navigationOptions = {
        header: null,
    };
    showActionSheet = () => {
        this.ActionSheet.show()
    }
    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }
    render() {
        const numbers = ['814027675', '7990448105', 'cancel'];
        return (
            <Container>
                <AppHeader {...this.props}></AppHeader>
                <View>
                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        title={'Contact With us'}
                        options={numbers}
                        cancelButtonIndex={2}
                        destructiveButtonIndex={2}
                        onPress={(index) => { (index != 2) ? Linking.openURL(`tel:${numbers[index]}`) : '' }}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={styles.button} onPress={() => { this.showActionSheet() }}>
                        <Text>Contect Us</Text>
                    </Button>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={50}
                        // duration={250}
                        customStyles={{
                            container: {
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }}
                    >
                        <Text>822372797932749</Text>
                    </RBSheet>

                    <Button style={styles.button} onPress={() => this.props.navigation.push('FAQScreen')}>
                        <Text style={{ textAlign: "center" }}>FAQ</Text>
                    </Button>

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