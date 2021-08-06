import { Dimensions, StyleSheet } from "react-native";
import { Color, Font } from "../../helper";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },

    TextTag: {
        marginVertical: '8%',
        textAlign: 'center',
        fontFamily: Font.LatoBold,
        color: Color.Black,
        fontSize: 25,
        fontWeight: 'bold'

    },
    listHeaderText: {
        color: Color.Black,
        fontFamily: Font.OpenSansRegular,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '8%',
        marginTop: '3%'
    },

    button: {
        flexDirection: 'row',
        backgroundColor: Color.mainOrange,
        width: windowWidth * 0.9,
        height: windowWidth * 0.16,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20,
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
        borderRadius: 5,
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
    dateText: { marginHorizontal: 10, fontSize: 13, fontWeight: 'bold', color: Color.White },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.mainLightOrange,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        width: '13%'
    },
    chatCardStyle: {
        backgroundColor: Color.mainDarkBrown,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        width: '13%',
    },
    changeCardStyle: {
        backgroundColor: Color.mainOrange,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        width: '13%'
    },
    // Modal Styles
    changeModalContainer: {
        backgroundColor: Color.White,
        borderColor: Color.mainNavyBlue,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    changeModalHeaderBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        // backgroundColor: 'pink',
    },
    changeModalHeaderText: {
        fontSize: 21,
        color: Color.mainNavyBlue,
        fontWeight: 'bold',
        
    },
    changeModalDateLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.mainOrange,
        marginVertical: 5,
    },
    changeModalDateTimeBox: {
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: Color.mainOrange,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cancelModalButtonText: { color: Color.White, fontWeight: 'bold', fontSize: 18 },
    modalOkButton: {
        width: '40%', paddingVertical: 15,
        borderRadius: 10, justifyContent: 'center',
        alignItems: 'center', alignSelf: 'center',
    }

})
