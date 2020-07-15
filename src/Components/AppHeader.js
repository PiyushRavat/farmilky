import React from 'React';
import { Header, Left, Button, Icon, Title, Right, Body } from 'native-base';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    SafeAreaView
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
// import logo from '../assets/images/Logo-1-01.png';
export class AppHeader extends React.Component {
    render() {
        return (
            <Header style={styles.header}>
                <Left>
                    <SafeAreaView>
                        <View style={styles.headerContainer}>
                            {/* <Text style={styles.titleText}>'hello</Text> */}
                            <TouchableWithoutFeedback
                                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                            >
                                <Button transparent onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                                    <Icon name='menu' />
                                </Button>
                                {/* <Text>menus</Text> */}
                                {/* <Image source={require('@images/Icons/menu.png')} resizeMode="contain" style={styles.drawerIcon} /> */}
                            </TouchableWithoutFeedback>
                        </View>
                    </SafeAreaView>
                    {/* <Button transparent>
                        <Icon name='menu' />
                    </Button> */}
                </Left>
                <Body>
                    <Image source={require('../../assets/images/Logo-1-01.png')}
                        style={{ height: 50, width: 50 }}></Image>
                </Body>

                <Right>
                    <Button transparent>
                        <Icon name="search" />
                    </Button>
                    <Button transparent onPress={() => this.props.navigation.push('CartDetailsScreen')}>
                        <Icon name="cart" />
                    </Button>
                </Right>
            </Header>
        )
    }
}
const styles = {
    header: { backgroundColor: '#07f676', height: 80, paddingTop: 20 }
}