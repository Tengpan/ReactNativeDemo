
import React, { Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';


export default class ExpressSearch extends Component {
    render () {
        return(
          <View style={styles.main}>
            <SearchBar/>
          </View>
        );
    }

}

class SearchBar extends Component {
  render () {
      return(
        <View>
          <TextInput placeholder='请输入运单号'/>
          <View></View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  main:{
    flex:1
  }
});
