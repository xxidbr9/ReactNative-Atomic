import React, { ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropsType from 'prop-types'

type TypeEnum = "dots" | "dash" | "ghost" | "link" | "button"
type ColorEnum = "primary" | "secondary" | "info" | "success" | "danger"
type Align = "center" | "left" | "right"

type Props = {
    block?: Boolean,
    width?: Number | String,
    prefix?: String | Number | ReactNode,
    suffix?: String | Number | ReactNode,
    link?: Boolean,
    type?: TypeEnum | String,
    color?: ColorEnum | String,
    disable?: Boolean,
    align?: Align,
    children?: String,
}

const Button: React.FC<Props> = ({
    block,
    width,
    prefix,
    suffix,
    link,
    type,
    color,
    disable,
    align,
    children,
    ...props }) => {


    const baseStyle: Object = StyleSheet.create({
        dasar: {

        }
    });

    const textStyle: Object = StyleSheet.create({
        dasar: {

        }
    });

    return (
        <View>
            <Text>
                {children}
            </Text>
        </View>
    )
}

Button.defaultProps = {
    block: false,
    width: 0,
    prefix: "",
    suffix: "",
    link: false,
    type: "button",
    color: "primary",
    disable: false,
    align: "center",
}

Button.propTypes = {
    block: PropsType.bool,
    width: PropsType.oneOfType([
        PropsType.number,
        PropsType.string
    ]),
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
    disable: PropsType.bool,
    align: PropsType.oneOf(["center", "left", "right"]),
    children: PropsType.string

}


export default Button
