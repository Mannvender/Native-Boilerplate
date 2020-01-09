import React from 'react'
import {Text as NativeText} from 'react-native'
import styled, {withTheme} from 'styled-components'

const StyledText = styled(NativeText)`
  color: ${props =>
    props.theme.global.colors[props.color] ||
    props.color ||
    props.theme.global.colors['text'][props.theme.mode]};
  background-color: ${props =>
    props.theme.global.colors[props.background] || props.background};
`

function Text({background = 'transparent', ...props}) {
  return <StyledText background={background} {...props} />
}

export default withTheme(Text)
