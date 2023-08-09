import React, { PureComponent } from 'react';
import { View } from 'react-native';

class LabelContainer extends PureComponent {

  state = {
    value: Number.NaN,
  };
   //TODO
    //here i add types for value
  setValue = (value:number)  => {
    this.setState({ value });
  }

  render() {
    const { renderContent, ...restProps } = this.props;
    const { value } = this.state;
    return (
      <View {...restProps}>
        {renderContent(value)}
      </View>
    );
  }
}

export default LabelContainer;
