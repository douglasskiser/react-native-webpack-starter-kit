import {AppRegistry} from 'react-native';
import App from './components/app/app';

class Root extends App {
  static defaultProps = {
    ...App.defaultProps,
    instructions: 'Shake or press menu button for dev menu'
  };
}

AppRegistry.registerComponent('App', () => Root);
