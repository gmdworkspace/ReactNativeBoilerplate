import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

type Props = {};
class Incrementor extends Component<Props> {

  constructor() {
    super();
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    const { incrementCount } = this.props;
    incrementCount();
  }

  render() {
    const { count } = this.props;
    return (
      <View>
        <Text style={styles.welcome}>
          Hello count:{count}
        </Text>

        <Button
          onPress={this.handleOnPress}
          title="Press Me"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

Incrementor.propTypes = {
  count: PropTypes.number
};

export default Incrementor;
