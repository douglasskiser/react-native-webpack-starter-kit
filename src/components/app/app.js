import React, {Component, PropTypes} from 'react-native';
import HomeView from '../../views/home-view/home-view';

const {
  Platform
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

  render () {
    const { instructions } = this.props;
    let { platform } = this.state;

    return (
      <HomeView instructions={instructions}
          platform={platform}
      />
    );
  }
}