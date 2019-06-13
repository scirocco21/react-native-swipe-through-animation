import React, {Component} from 'react'
import {View, Animated,StyleSheet} from 'react-native'

export default class Deck extends Component {
  renderCards() {
    return this.props.data.map(item => this.props.renderCard(item))
  }
  render() {
    return (
      <View style={styles.deck}
      >
        {this.renderCards()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    deck: {
      width: '75%'
    }
});