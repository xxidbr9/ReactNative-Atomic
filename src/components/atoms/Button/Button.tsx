import React, { ReactNode } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropsType from 'prop-types'


// import { FontScale } from '@app/styles'
import Colors from '@styles/Colors'
import Sizing from '@styles/Sizing'
import FontScale from '@styles/FontScale'

/* 
? Require Some Additional
*/

type TypeEnum = "dots" | "dash" | "ghost" | "link" | "button"
type ColorEnum = "primary" | "secondary" | "info" | "success" | "danger"
type Align = "center" | "left" | "right"
type ButtonProps = TouchableOpacity['props']
type TextProps = Text['props']
type Size = 'small' | 'medium' | 'big'

type Props = {
    block?: Boolean,
    // width?: Number | String,
    prefix?: String | Number | ReactNode,
    suffix?: String | Number | ReactNode,
    link?: Boolean,
    type?: TypeEnum | String,
    color?: ColorEnum | String,
    size?: Size,
    disable?: Boolean,
    buttonProps?: ButtonProps,
    textProps?: TextProps,
    align?: Align,
    children?: any | String | ReactNode | Number
}

const Button: React.FC<Props> = ({
    block,
    // width,
    prefix,
    suffix,
    link,
    type,
    color,
    disable,
    align,
    size,
    buttonProps,
    textProps,
    children,
    ...props }) => {


    const renderPrefix = () => {
        return !!(typeof prefix === 'number' || typeof prefix === 'string') ? <Text>{prefix}</Text> : null
    }

    const renderSuffix = () => {
        return !!(typeof suffix === 'number' || typeof suffix === 'string') ? <Text>{suffix}</Text> : null
    }

    const renderSize = (S) => {
        let s
        if (S === "small") s = Sizing['3']
        if (S === "medium") s = Sizing['5']
        if (S === "big") s = Sizing['6']
        return s
    }

    const baseStyle = StyleSheet.create({
        buttonBase: {
            backgroundColor: !!(`${color}` in Colors) ? Colors[`${color}`] : color,
            width: "100%",
            paddingVertical: renderSize(size),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5
        }
    });

    const textStyle = StyleSheet.create({
        textBase: {
            textAlign: "center",
            color: Colors['white'],
            fontWeight: "600",
            fontSize: FontScale['h5']
        }
    });

    return (
        <TouchableOpacity activeOpacity={.6} {...buttonProps} style={[baseStyle.buttonBase]}>
            {!!prefix && renderPrefix()}
            <Text {...textProps} style={[textStyle.textBase]}>
                {children}
            </Text>
            {!!suffix && renderSuffix()}
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    block: false,
    // width: 0,
    prefix: "",
    suffix: "",
    link: false,
    type: "button",
    color: "primary",
    size: "medium",
    disable: false,
    align: "center",
}

Button.propTypes = {
    block: PropsType.bool,
    // width: PropsType.oneOfType([
    //     PropsType.number,
    //     PropsType.string
    // ]),
    prefix: PropsType.oneOfType([
        PropsType.node,
        PropsType.string,
        PropsType.number
    ]),
    suffix: PropsType.oneOfType([
        PropsType.node,
        PropsType.string,
        PropsType.number
    ]),
    link: PropsType.bool,
    type: PropsType.oneOf(["dots", "dash", "ghost", "link", "button"]).isRequired,
    color: PropsType.oneOfType([
        PropsType.oneOf(["primary", "secondary", "info", "success", "danger"]),
        PropsType.string
    ]),
    size: PropsType.oneOf(["small", "medium", "big"]),
    disable: PropsType.bool,
    align: PropsType.oneOf(["center", "left", "right"]),

}




export default Button
