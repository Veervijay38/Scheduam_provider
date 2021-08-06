import { Dimensions, StyleSheet } from "react-native";

import { Color, Font } from "../../../helper";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    inputTextTag: {
        // marginTop: 18,
        // marginLeft: '6%',
        // marginBottom: 8,
        fontFamily: Font.OpenSansRegular,
        color: '#79cb8f',
        fontSize: 25,
        fontWeight: 'normal'


    },
    textInputStyle: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.10,
        // padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',

    },

    button: {
        backgroundColor: '#083464',
        width: windowWidth * 0.5,
        height: windowWidth * 0.13,
        marginTop: 0,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20,


    },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.OpenSansRegular,
        color: '#fff'
    },
    servicebox: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.78,
        // padding: 10,


        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'flex-start'

    },
    subServicebox: {

        backgroundColor: 'green',
        width: '50%',
        height: '100%',
        alignItems: 'flex-start',
        paddingLeft: 20

    },
    subServiceboxItems: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25
    },
    subContainer2: {
        flexDirection: 'row',
        // justifyContent: 'space-between'
        // backgroundColor: 'pink',
        marginVertical: 5,
    },
    timerBoxContainer1: {
        // marginHorizontal: 10,
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        // marginVertical: 5,
        flexDirection: 'row',
        flex: 0.6,
        justifyContent: 'space-evenly',
        // backgroundColor: 'orange',
    },
    timerBoxContainer2: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    timerBox: {
        // flex: 0.5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Color.mainNavyBlue,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        //  marginHorizontal: 10,

    }

})