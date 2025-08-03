import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    background: string;
    color: string;
    fontFamily: string;
    cardBackground: string;
    layout: string;
  }
}
