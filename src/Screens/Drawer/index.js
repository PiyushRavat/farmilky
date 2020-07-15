import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView, Image
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import styles from './style';

export default class Drawer extends Component {

    toggleDrawer(screen = '') {
        const { navigation } = this.props;
        navigation.dispatch(DrawerActions.toggleDrawer());
        if (screen && navigation.state.routeName !== screen) {
            navigation.navigate(screen);
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.drawerContainer}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {/* <TouchableOpacity
                        onPress={() => this.toggleDrawer("Home")}
                        style={styles.drawerItem}
                    >
                        <Text style={styles.textStyle}>Setting</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity
                        onPress={() => this.toggleDrawer("")}
                        style={{
                            paddingTop: 50,
                            paddingBottom: 25,
                            flexDirection: 'row',
                            alignContent: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <View style={{ textAlign: "center" }}>
                            <Image source={require('../../../assets/images/user.png')}
                                style={{ height: 50, width: 50 }}></Image>
                            <Text style={styles.textStyle}>User Name</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.toggleDrawer("")}
                        style={styles.drawerItem}
                    >
                        <Text style={styles.textStyle}>Subscribe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.toggleDrawer("")}
                        style={styles.drawerItem}
                    >
                        <Text style={styles.textStyle}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.toggleDrawer("")}
                        style={styles.drawerItem}
                    >
                        <Text style={styles.textStyle}>Setting</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}