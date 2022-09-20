import { createGlobalStyle} from 'styled-components';

import { Theme } from 'types/theme';

interface Props {
  theme: Theme
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props: Props) => props.theme.body};
    color: ${(props: Props) => props.theme.text};
    transition: all 0.50s linear;
  }

  a {
    color: ${(props: Props) => props.theme.text};
  }
`