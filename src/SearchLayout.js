import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';
import Header from './Header';

const DEFAULT_TINT_COLOR = Platform.OS === 'ios' ? '#007AFF' : '#000';

export default class SearchLayout extends React.Component {
  static SearchBar = SearchBar;
  static Header = Header;
  static DefaultTintColor = DEFAULT_TINT_COLOR;

  static defaultProps = {
    debounce: 500,
    headerBackgroundColor: '#fff',
    headerTintColor: DEFAULT_TINT_COLOR,
  };

  state = {
    q: '',
  };

  _handleSubmit = q => {
    this.props.onSubmit && this.props.onSubmit(q);
  };

  // TODO: debounce
  _handleChangeQuery = q => {
    this.props.onChangeQuery && this.props.onChangeQuery(q);
    this.setState({ q });
  };

  render() {
    return (
      <View style={[styles.container, this.props.customContainerStyles]}>
        <Header
          backgroundColor={this.props.headerBackgroundColor}
          tintColor={this.props.headerTintColor}
          headerBorderBottomColor={this.props.headerBorderBottomColor}
          backButton={Platform.OS === 'android'}>
          <SearchBar
            onChangeQuery={this._handleChangeQuery}
            onSubmit={this._handleSubmit}
            placeholderText={this.props.placeholderText}
            cancelButtonText={this.props.cancelButtonText}
            placeholderTextColor={this.props.searchInputPlaceholderTextColor}
            textColor={this.props.searchInputTextColor}
            selectionColor={this.props.searchInputSelectionColor}
            underlineColorAndroid={
              this.props.searchInputUnderlineColorAndroid ||
              this.props.headerBackgroundColor
            }
            tintColor={
              this.props.searchInputTintColor || this.props.headerTintColor
            }
            customIosSearchContainerStyles={this.props.customIosSearchContainerStyles}
            customIosTextInputStyles={this.props.customIosTextInputStyles}
            customIosCancelButtonStyles={this.props.customIosCancelButtonStyles}
            customIosCancelTextStyles={this.props.customIosCancelTextStyles}
            customAndroidTextInputStyles={this.props.customAndroidTextInputStyles}
            customAndroidClearButton={this.props.customAndroidClearButton}
            customAndroidClearIcon={this.props.customAndroidClearIcon}
          />
        </Header>

        {this.props.renderResults
          ? this.props.renderResults(this.state.q)
          : this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
