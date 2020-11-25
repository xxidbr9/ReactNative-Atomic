import React from 'react'
import { StyleSheet, Text } from 'react-native'
import FontScale from '@styles/FontScale'
import PropType from 'prop-types'


type Scale = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = {
    style?: any
    fontScale?: Scale | Number
    children?: any
    props?: any
}

const getFontScale = (T) => FontScale[T];

/**
 * Change text size base on typograph with base text 14px
 * @param {{'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}} fontScale
 */
const Typograph: React.FC<Props> = ({ style, fontScale, children, ...props }) => {
    let styleProps;
    styleProps = !!style ? Object.create(style) : null;
    const fontSize = typeof fontScale === 'number' ? fontScale : getFontScale(fontScale);
    return (
        <Text style={[{ fontSize }, styleProps]}>
            {children}
        </Text >
    )
}

Typograph.defaultProps = {

}

Typograph.propTypes = {

}
const styles = StyleSheet.create({})

export default Typograph
