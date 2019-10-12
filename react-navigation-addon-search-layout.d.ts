declare module 'react-navigation-addon-search-layout' {
  import * as React from 'react';

  interface SearchLayoutProps {
    onChangeQuery: (query: string) => void;
    onSubmit?: (query: string) => void;
    headerBackgroundColor?: string;
    headerTintColor?: string;
    placeholderTextColor?: string;
    textColor?: string;
    searchInputUnderlineColorAndroid?: string;
    searchInputTintColor?: string;
    searchInputPlaceholderTextColor?: string;
    searchInputTextColor?: string;
    searchInputSelectionColor :string;
    customIosSearchContainerStyles: object;
    customIosTextInputStyles: object;
    customIosCancelButtonStyles: object;
    customIosCancelTextStyles: object;
    customAndroidTextInputStyles: object;
    customAndroidClearButton: object;
    customAndroidClearIcon: object;
    renderResults?: () => React.ReactElement | null;
  }

  export default class SearchLayout extends React.Component<SearchLayoutProps> {}
}
