import React, { useState } from 'react'
import Button from '@atoms/Button'
import Typograph from '@atoms/Typograph'
import Container from '@atoms/Container'
import { StyleSheet, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { StatusBar as Status } from 'expo-status-bar'
import Animeted from 'react-native-reanimated'

const STATUS_HEIGHT = StatusBar.currentHeight
export default function App({ ...props }) {
    const styleRef = React.useRef(new Animeted.Value(0)).current
    const onPress = () => {
        console.log("nano")
    }
    return (
        <SafeAreaView style={{ paddingTop: STATUS_HEIGHT }}>
            <Status style="dark" />
            <Container spacing="md">
                {/* <Typograph >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit ut laudantium nisi! Quam voluptates recusandae laboriosam facere quo neque.
                </Typograph>
                <Button children="hello" /> */}
                <View>

                </View>
            </Container>
        </SafeAreaView>
    )
}

