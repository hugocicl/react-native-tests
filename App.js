import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default class LotsOfStyles extends Component {
  constructor(){
    super();
    this.state = {
      total: 0
    }
  }
  render() {
    const {total} = this.state;

    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={styles.totalLabel} >Total {total}</Text>
        <View style={styles.containerButtons}>
          <Button 
            onPress={() => console.log('ok')} 
            color={'green'} style={styles.buttonStyle} 
            title={'+'} 
          />
          <Button 
            onPress={() => this.setState({total : total + 1})} 
            style={styles.buttonStyle} 
            title={'-'} 
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  totalLabel: {
    paddingTop: 10,
    paddingBottom: 40,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center'
  },
  containerButtons: {
    flexDirection: 'column',
  },
  buttonStyle: {
    marginTop: 10,
  }
});











