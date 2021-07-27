import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground, FlatList } from 'react-native'
import { Color, Font } from '../../helper'
import { Icon, Col } from "native-base";
import { BaseScreen } from '../../components';
import { Actions } from 'react-native-router-flux';

const Home = () => {

    return (
        <BaseScreen>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                    <Text>Home</Text>
                </ScrollView>
            </View>
        </BaseScreen>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.White
    }

})