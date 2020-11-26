import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Sizing from '@styles/Sizing'
import PropTypes from 'prop-types'

/* 
TODO

![ ] Handle Array Input Style Props
*/


type Space = 0 | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ViewProps = View['props']
type StyleProp = View['props']['style']
type Props = {
    spacing?: Space | Number | String
    style?: StyleProp
}



const Container: React.FC<Props & ViewProps> = ({ style, spacing, children, ...props }) => {

    const space = {
        0: Sizing['px'],
        xs: Sizing['1'],
        sm: Sizing['2'],
        md: Sizing['4'],
        lg: Sizing['8'],
        xl: Sizing['10'],
    }

    const styles = StyleSheet.create({
        ContainerBase: {
            paddingHorizontal: space[`${spacing}`]
        }
    })

    return (
        <View style={[styles.ContainerBase, style]} {...props}>
            {children}
        </View>
    )
}

Container.defaultProps = {
    spacing: "md"
}

Container.propTypes = {
    spacing: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf([0, 'xs', 'sm', 'md', 'lg', 'xl'])
    ]),
}



export default Container

