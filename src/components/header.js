import React from 'react'
import { View, Text, } from 'react-native'

export default function Header({ headerText }) {
    return (
        <View style={styles.viewStyle}>
            <Text> {headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        

    }
}
