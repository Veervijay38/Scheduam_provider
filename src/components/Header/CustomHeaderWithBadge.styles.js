import { Dimensions, StyleSheet } from "react-native";
import { padding, paddingBottom } from "styled-system";
import { Color, Font } from "../../helper";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.White
    },
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '94%',
        justifyContent: 'space-between',
        marginLeft: 15,
        position:"absolute",
        top:-65,
    },













})
