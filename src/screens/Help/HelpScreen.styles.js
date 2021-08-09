import { StyleSheet } from "react-native";
import { Color } from "../../helper";

export const styles = StyleSheet.create({

    container: {
        marginHorizontal: 15,
        marginTop: 100,
        flex: 1,
        backgroundColor: Color.White,
    },
    mainHeaderView: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, },
    listMainView: { marginVertical: 5, paddingVertical: 5, paddingHorizontal: 10, },
    listHeaderText: { color: Color.mainOrange, fontWeight: 'bold', fontSize: 15, marginVertical: 5 },
    listDescText: { color: Color.Black, fontSize: 15, marginVertical: 5 },
})