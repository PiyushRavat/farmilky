import React from 'React';
import { Button, Icon, FooterTab, Footer, Text } from 'native-base';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';
export class AppFooter extends React.Component {
    render() {
        return (
            <Footer >
                <FooterTab style={styles.header}>
                    <Button active
                        onPress={() => this.props.navigation.push('Home')}>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button >
                        <Image source={require('../../assets/images/subscribe.jpg')}
                            style={{ height: 25, width: 25 }}></Image>
                        <Text>Subscribe</Text>
                    </Button>
                    <Button transparent style={{ color: 'white' }}
                        onPress={() => this.props.navigation.push('SupportScreen')}>
                        <Icon name="camera" />
                        <Text>Support</Text>
                    </Button>
                    <Button transparent onPress={() => this.props.navigation.push('Details')}>
                        <Icon name="person" />
                        <Text>Profile</Text>
                    </Button>
                </FooterTab>
            </Footer>)
    }
}
const styles = {
    header: { backgroundColor: '#07F676' }
}
