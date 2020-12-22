import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import Animated from 'react-native-reanimated'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

const { height, width } = Dimensions.get('screen')

const CIRCLE_SIZE = 70

const { cond, eq, add, set, Value, event, interpolate, Extrapolate } = Animated

const PlayGround = () => {
    const x = useRef(new Value(0)).current
    const y = useRef(new Value(0)).current
    const offsetX = useRef(new Value(width / 2)).current
    const offsetY = useRef(new Value(width / 2)).current
    const gestureState = useRef(new Value(-1)).current

    const onGestureEvent = event([
        {
            nativeEvent: {
                translationX: x,
                translationY: y,
                state: gestureState,
            },
        },
    ])

    const translateX = cond(
        eq(gestureState, State.ACTIVE),
        add(offsetX, x),
        set(offsetX, add(offsetX, x))
    )
    const translateY = cond(
        eq(gestureState, State.ACTIVE),
        add(offsetY, y),
        set(offsetY, add(offsetY, y))
    )
    const opacity = interpolate(translateY, {
        inputRange: [0, height],
        outputRange: [0, 2],
    })
    const scale = interpolate(translateY, {
        inputRange: [0, height],
        outputRange: [1, 1.5],
    })

    return (
        <View style={styles.container}>
            <PanGestureHandler
                maxPointers={1}
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onGestureEvent}
            >
                <Animated.View
                    style={[
                        styles.box,
                        {
                            transform: [
                                { translateX },
                                { translateY },
                                { scale },
                            ],
                            opacity,
                        },
                    ]}
                />
            </PanGestureHandler>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bcd4d3',
    },
    box: {
        backgroundColor: 'red',
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        marginLeft: -(CIRCLE_SIZE / 2),
        marginTop: -(CIRCLE_SIZE / 2),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 8,
    },
})
export default PlayGround
