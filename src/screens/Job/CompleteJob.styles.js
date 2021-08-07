import { Dimensions, StyleSheet } from "react-native";
import { Color, Font } from "../../helper";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: Color.white
    },
    headerBox: {

        flexDirection: 'row', alignItems: 'center', width: '100%',
        height: '10%', marginBottom: '0%',
        justifyContent: 'space-evenly'
    },
    backHeaderContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 },
    backHeaderBox: { flexDirection: 'row', alignItems: 'center' },
    backHeaderText: { color: Color.Black, fontSize: 20, fontWeight: 'bold', fontFamily: Font.LatoBold },
    totalHoursBox: { alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: Color.mainOrange, padding: 7, },
    totalHoursText: { color: Color.Black, fontWeight: 'bold', fontSize: 15 },
    wellDoneText: { textAlign: 'center', color: Color.Black, marginVertical: 25, fontSize: 20, fontWeight: 'bold', fontFamily: Font.LatoBold },
    jobTimeBox: {
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'center', backgroundColor: Color.maingreen,
        paddingVertical: 10, marginVertical: 2
    },
    jobTimeText: { color: Color.White, fontSize: 15, marginLeft: 10, fontWeight: 'bold', fontFamily: Font.LatoBold },
    rateCustomerText: { color: Color.Black, marginVertical: 25, fontSize: 20, fontFamily: Font.LatoBold, fontWeight: 'bold' },
    expAndRatingBox: {
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
    },
    expText: {
        color: Color.mainOrange,
        fontSize: 20, fontWeight: 'bold', fontFamily: Font.LatoBold
    },
    expDesc: {
        paddingVertical: 10,
        color: Color.mainOrange,
        fontSize: 17
    },
    commentText: {
        color: Color.mainOrange,
        fontSize: 20, fontWeight: 'bold'
    },
    TextTag: {
        fontFamily: Font.LatoBold,
        color: '#79cb8f',
        fontSize: 20,


    },


    continueBtnView: { justifyContent: 'flex-end', alignSelf: 'flex-end', marginHorizontal: 20, marginVertical: '5%' },
    continueButton: {
        backgroundColor: Color.mainOrange,
        width: windowWidth * 0.5,
        height: windowWidth * 0.13,
        marginTop: 0,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 20,
        flexDirection: 'row',
        paddingRight: 10

    },
    continueButtonText: {
        fontSize: 22,
        fontFamily: Font.OpenSansRegular,
        color: '#fff',
        marginBottom: 5,
        marginLeft: "30%"
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
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '05%'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        width: '13%'
    },
    chatCardStyle: {
        backgroundColor: '#083464',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        width: '13%'
    },
    changeCardStyle: {
        backgroundColor: '#083464',
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
    changeModalHeaderText: { fontSize: 18, color: Color.mainNavyBlue },
    changeModalDateTimeBox: {
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.mainNavyBlue,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalOkButton: {
        width: '40%', paddingVertical: 15,
        borderRadius: 10, justifyContent: 'center',
        alignItems: 'center', alignSelf: 'center',
    },
    emailTextStyle: {
        marginTop: 20,
        marginLeft: '8%',
        marginBottom: 8,
        fontFamily: Font.OpenSansRegular,
        // fontWeight: 'bold',
        color: '#083464'

    },
    textInputStyle: {
        backgroundColor: '#fff',
        // width: windowWidth * 0.9,
        height: windowWidth * 0.30,
        // padding: 10,
        borderRadius: 5,
        borderWidth: 0.9,
        borderColor: Color.mainOrange,


        // shadowColor: "black",
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // shadowOffset: {
        //     height: 1,
        //     width: 0,
        // },
        // elevation: 5
    },

})
