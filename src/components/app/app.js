import React, {Component, PropTypes} from 'react-native';
import HomeView from '../../views/home-view/home-view';

const {
  Platform,
  Navigator,
  StyleSheet,
  Text
  } = React;

export default class App extends Component {
  static propTypes = {
    instructions: PropTypes.string
  };

  static defaultProps = {
    ...Component.defaultProps,
    instructions: 'Usage instructions not provided.'
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      platform: Platform.OS
    };
  }

  _renderHomeView() {
    const {instructions} = this.props;
    const {platform} = this.state;
    return (
      <HomeView instructions={instructions}
          platform={platform}
      />
    );
  }

  _renderScene(route) {
    return {
      home: this._renderHomeView()
    }[route.name];
  }

  _renderNavigationBar() {
    const navigationBarRouteMapper = {
      LeftButton: () => {

      },
      RightButton: () => {

      },
      Title: (route) => {
        return {
          home: (
            <Text style={styles.navBarTitleText}>
              Welcome
            </Text>
          )
        }[route.name];
      }
    };
    return (
      <Navigator.NavigationBar routeMapper={navigationBarRouteMapper}
          style={styles.navBar}
      />
    );
  }

  render () {
    const initialRoute = {name: 'home'};
    return (
      <Navigator initialRoute={initialRoute}
          navigationBar={this._renderNavigationBar()}
          renderScene={(route, navigator) => this._renderScene(route, navigator)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navContainer: {
    flex: 1
  },
  navBar: {
    backgroundColor: '#3F51B5',
    borderBottomColor: '#1A237E',
    borderBottomWidth: 1
  },
  navBarTitleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 9
  },
  navBarLeftButton: {
    paddingLeft: 10
  },
  navBarRightButton: {
    paddingRight: 10
  },
  navBarButtonText: {
    color: '#EEE',
    fontSize: 16,
    marginVertical: 10
  }
});