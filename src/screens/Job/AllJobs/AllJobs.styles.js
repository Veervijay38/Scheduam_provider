import React from 'react'
import { StyleSheet } from 'react-native'
import { Color } from '../../../helper'


export const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: Color.White,
        marginHorizontal: 15
    },
    mainHeaderView: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, },
    mainHeaderText: { color: Color.Black, fontWeight: 'bold', fontSize: 25 },
    jobDataView: { paddingHorizontal: 20, paddingVertical: 20, marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderTopColor: 'black', borderTopWidth: 1 },
    jobCustText: { color: Color.mainOrange, fontWeight: 'bold', fontSize: 20 },
    jobTimeText: { color: Color.mainOrange, fontWeight: 'bold', fontSize: 20 }
})