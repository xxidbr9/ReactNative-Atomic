import React from 'react'
import { StyleSheet, Text } from 'react-native'
import FontScale from '@styles/FontScale'
import PropType from 'prop-types'


type Scale = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type Style = Text['props']['style']
type TextProp = Text['props']

type Props = {
    style?: Style
    fontScale?: Scale | Number | String
    children?: any
}

const getFontScale = (P) => FontScale[P];

/**
 * Change text size base on typograph with base text 14px
 * @param {{Number | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}} fontScale  a font scale or change that as a decimal number
 */

/* 
! TODO 
[ ] Detect Style is array an parse the array
*/
const Typograph: React.FC<Props & TextProp> = ({ style, fontScale = 'h5', children, ...props }) => {
    let styleProps;
    styleProps = !!style ? Object.create(style) : null;
    const fontSize = typeof fontScale !== 'number' ?
        getFontScale(fontScale) :
        fontScale;
    return (
        <Text style={[{ fontSize }, styleProps]} {...props}>
            {children}
        </Text >
    )
}

Typograph.defaultProps = {
    fontScale: 'h5'
}

Typograph.propTypes = {
    fontScale: PropType.oneOfType([
        PropType.number,
        PropType.string,
        PropType.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6',])
    ])
}
// const styles = StyleSheet.create({})

export default Typograph
