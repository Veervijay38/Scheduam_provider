import { Dimensions, StyleSheet } from "react-native";
import { Color, Font } from "../../../helper";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: Color.White
    },
    backHeaderContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 },
    backHeaderBox: { flexDirection: 'row', alignItems: 'center' },
    backHeaderText: { color: Color.Black, fontSize: 22, fontWeight: 'bold', fontWeight: 'bold' },
    totalHoursBox: { alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: Color.mainOrange, padding: 7, },
    totalHoursText: { color: Color.Black, fontWeight: 'bold', fontSize: 15 },

    addressLabel: { color: Color.Black, fontWeight: 'bold', fontFamily: Font.OpenSansRegular, fontSize: 22, },
    addressDescView: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    addressValue: { color: Color.mainOrange, fontFamily: Font.OpenSansRegular, fontSize: 18, fontWeight: 'bold' },
    PriceTextTag: {
        fontFamily: Font.LatoBold,
        color: '#79cb8f',
        fontSize: 20,


    },
    PriceBox: {
        width: '30%', height: '100%',
        borderColor: '#083464',
        borderRadius: 10,
        marginLeft: "40%",
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },


    button: {
        flexDirection: 'row',
        backgroundColor: Color.mainOrange,
        width: '90%',
        // height: windowWidth * 0.16,
        marginTop: 0,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20,
        marginTop: '5%',
        paddingVertical: 15,
        marginVertical: 15,


    },
    buttonText: {
        fontSize: 22,
        fontFamily: Font.Font,
        color: '#fff'
    },
    subbox: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowWidth * 0.25,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '05%'

    },
    innerCardContainer: {
        backgroundColor: '#fff',
        width: windowWidth * 0.90,
        height: windowWidth * 0.20,
        borderRadius: 10,
        // borderWidth: 1,
        // borderColor: 'black',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '05%',
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 5
    },
    subInnerCard: {
        borderColor: 'black',
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingVertical: 5,
        backgroundColor: Color.mainOrange,
        elevation: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    custNameText: { marginHorizontal: 10, fontSize: 20, fontWeight: 'bold', color: Color.White },
    dateText: { marginHorizontal: 10, fontSize: 15, fontWeight: 'bold', color: Color.White },

    chatCardStyle: {
        backgroundColor: Color.mainDarkBrown,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderWidth: 0.5,
        borderColor: 'black',
        width: '15%'
    },
    plantext: {
        color: Color.mainOrange,
        fontWeight: 'bold',
        fontFamily: Font.OpenSansRegular,
        fontSize: 18,

    },
    container1: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },



})