import { StyleSheet } from "react-native";
import { Color } from "../../helper";

export const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Color.White },
    subContainer: { paddingHorizontal: 20, marginTop: 100, },
    earningBox: { flexDirection: 'row', marginTop: 20 },
    withdrawalBox: {
        alignItems: 'center', backgroundColor: Color.mainOrange,
        flex: 0.5, height: 150, paddingHorizontal: 5,
        marginHorizontal: 10, justifyContent: 'space-evenly',
        borderRadius: 10, paddingBottom: 20,
    },
    withdrawalHeader: { color: Color.White, fontSize: 15, textAlign: 'center' },
    withdrawalValue: { color: Color.White, fontSize: 25 },
    withdrawButtonBox: {
        flexDirection: 'row', width: '90%', marginTop: 25,
        backgroundColor: Color.mainOrange, paddingVertical: 15,
        borderRadius: 10, justifyContent: 'center',
        alignItems: 'center', alignSelf: 'center',
    }
})