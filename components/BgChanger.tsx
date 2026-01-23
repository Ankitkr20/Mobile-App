import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { array } from 'zod'

export default function BgChanger() {
    const [randomBackground, setRandomBackground] = useState("#ffffff")

    const generateColor = () => {
        const hexRange = "0123456789ABCDEF"
        let color = "#"

        for(let i = 0;i < 6; i++){
            color += hexRange[Math.floor(Math.random() * 16)]
        }
        setRandomBackground(color)
    }
  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}></View>
            <View>
                <Text style={styles.actionBtnTxt}> Press me</Text>
            </View>
        </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:100
    },
    actionBtn:{
        height:29,
        borderRadius:8,
        backgroundColor: "#641B4D",
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    actionBtnTxt:{
        fontSize: 24,
        color: "#FFFFFF",
        textTransform: "uppercase"
    }
})