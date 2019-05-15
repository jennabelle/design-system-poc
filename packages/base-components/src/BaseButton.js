import styled from 'styled-components';
import {color} from 'styled-system';

const BaseButton = styled.button`
  ${color}
  border: 2px solid ${props => props.theme.main}
`

BaseButton.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
}

export default BaseButton;
