import React from 'react'
import { StyleSheet } from 'react-native'
import { Color } from '../../helper'

export const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: Color.White,
        marginHorizontal: 15
    },
    mainHeaderView: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, },
    mainHeaderText: { color: Color.Black, fontWeight: 'bold', fontSize: 25 },
    switchView: { flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' },
    swithText: { color: Color.Black, fontSize: 15, fontWeight: 'bold' },
})