import { StyleSheet } from "react-native";
import { Color } from "../../../helper";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Color.White },
    subContainer: { paddingHorizontal: 20, marginTop: 100 },
    viewHeaderText: { color: Color.Black, fontWeight: 'bold', fontSize: 20 },
    custReviewText: { color: Color.Black, borderBottomColor: Color.Black, borderBottomWidth: 1, fontWeight: 'bold', fontSize: 10 },
    textValue: { color: Color.mainOrange, fontWeight: 'bold', fontSize: 15 },
    startChatButton: { width: '100%', borderRadius: 10, alignItems: 'center', paddingVertical: 25, backgroundColor: Color.mainOrange },
    AcceptRejectButton: { width: '45%', borderRadius: 10, alignItems: 'center', marginVertical: 25, paddingVertical: 10, backgroundColor: Color.mainOrange, },
    buttonText: { fontSize: 18, color: Color.White },
    earningBox: {
        // flexDirection: 'row',
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: Color.mainOrange
    },
    earningBox1: {
        flexDirection: 'row',
        // marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        // backgroundColor: Color.mainOrange
    },
    withdrawalBox: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',

        // paddingHorizontal: 5,
        // marginHorizontal: 10,
        justifyContent: 'space-evenly',
        // borderRadius: 10, paddingBottom: 20,
    },
    custNameText: { marginHorizontal: 5, fontSize: 20, fontWeight: 'bold', color: Color.White },
    withdrawalValue: { color: Color.White, fontSize: 25 },
    totalHoursBox: {
        alignItems: 'center',
        borderRadius: 10, borderWidth: 1, borderColor: Color.Black, backgroundColor: Color.White, padding: 7,
    },
    totalHoursText: { color: Color.Black, fontWeight: 'bold', fontSize: 15 },
    offerDesc: { marginLeft: 35, textAlign: 'left', color: Color.White, fontSize: 15 },
    cleaningPlanBox: { marginVertical: 25, flexDirection: 'row', justifyContent: 'space-between' },

    changeModalContainer: {
        backgroundColor: Color.mainOrange,
        borderColor: Color.mainNavyBlue,
        borderWidth: 1,
        borderRadius: 10,
        // justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        // height: '90%',
        flex: 1
    },
    userModalHeaderBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.White
    },
    closeIcon: {
        position: 'absolute',
        right: 5,
        top: 5,
        alignSelf: 'flex-end',

        paddingHorizontal: 5
    },
    icon: {
        marginRight: 25,
        color: Color.mainDarkBrow,
        backgroundColor: Color.White,
        borderRadius: 20,
        padding: 3
    },
})