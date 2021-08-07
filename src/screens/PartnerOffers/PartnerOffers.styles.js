import { StyleSheet } from "react-native";
import { Color } from "../../helper";

export const styles = StyleSheet.create({
    container: { marginTop: 100, flex: 1, backgroundColor: Color.White },
    subContainer: { paddingHorizontal: 20, },
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
})