import React, { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

///////  Base ///////

const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image: {
        width: 180,
        height: 100
    }
});

/////// TextInput ///////

class TextInputComponent extends  Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return <View>
            <TextInput style={{padding:10, height:60, color:'red'}}
                       placeholder="Please type here!"
                       onChangeText={(text)=>this.setState({text}) }
            />
            <Text>{this.state.text}</Text>
        </View>
    }
}

///////  Layout ///////

class LayoutComponent extends  Component {
    render() {
        return <View style={layoutStyle.style1}>
            <Text style={layoutStyle.style2}>A testing text</Text>
            <Text style={layoutStyle.style3}>A testing text with width was setted</Text>
            <View style={layoutStyle.style4}></View>
        </View>;
    }
}

const  layoutStyle = StyleSheet.create({
    style1: {
        backgroundColor: 'powderblue',
        // padding:18,
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'stretch'
    },
    style2: {
        backgroundColor: 'blue',
        // flex:1,
        // height:100
        height: 50,
    },
    style3: {
        backgroundColor: 'gray',
        // flex:2,
        // height:100,
        // width: 200,
        height: 50,
    },
    style4: {
        backgroundColor: 'red',
        // flex:3,
        // height:100
        height: 50,
    },
});


///////  Staff ///////


class StaffItemComponent extends  Component {
    constructor(props) {
        super(props);
        this.state = {showName:true};
        setInterval(()=>{
            this.setState({showName:!this.state.showName})
        }, 1000);
    }
    render() {
        let display = this.state.showName ?  this.props.name : '';
        return (
            //数组中后面样式的优先级比前面的高
            <Text style={staffStyle.item,staffStyle.item2}>Hello {display}</Text>
        );
    }
}

class StaffListComponent extends  Component {
    render() {
        return <View style={staffStyle.list}>
            <StaffItemComponent name='A'></StaffItemComponent>
            <StaffItemComponent name='B'></StaffItemComponent>
            <StaffItemComponent name='C'></StaffItemComponent>
        </View>;
    }
}

const  staffStyle = StyleSheet.create({
    list: {
        alignItems:'center',
        backgroundColor:'gray',
    },
    item: {
        color:'blue',
    },
    item2: {
        fontSize:20,
    },
});


export default class BaseComponent extends Component {
    render() {
        let image = {
            'uri':'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={containerStyles.container}>
                <Text style={containerStyles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={containerStyles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={containerStyles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <Image source={image} style={containerStyles.image} />
                <TextInputComponent />
                <StaffListComponent/>
                <LayoutComponent/>
            </View>
        );
    }
}
