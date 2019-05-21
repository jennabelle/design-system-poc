import styled from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});

const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

const BaseButton = styled.button`
  background-color: ${backgroundColor};
  color: ${textColor};
  border: 2px solid ${props => props.theme.main}
`

BaseButton.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
}

export default BaseButton;
