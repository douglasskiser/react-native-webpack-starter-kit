import React, {Component, PropTypes} from 'react-native';

const {
  StyleSheet,
  Text,
  View
  } = React;

export default class HomeView extends Component {
  static propTypes = {
    instructions: PropTypes.string,
    platform: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { instructions, platform } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.{platform}.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
