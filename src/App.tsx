import React from 'react'
import Button from '@atoms/Button'
import Typograph from '@atoms/Typograph'
import Container from '@atoms/Container'
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import { StatusBar as Status } from 'expo-status-bar'
import Animeted from 'react-native-reanimated'

// const STATUS_HEIGHT = StatusBar.currentHeight
// console.log(STATUS_HEIGHT)
export default function App({ ...props }) {
    // const { } = Animeted
    const styleRef = React.useRef(new Animeted.Value(0)).current
    return (
        <SafeAreaView>
            <Status style="dark" />
            <Container spacing="md">
                <Typograph >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit ut laudantium nisi! Quam voluptates recusandae laboriosam facere quo neque.
                </Typograph>
            </Container>
        </SafeAreaView>
    )
}

