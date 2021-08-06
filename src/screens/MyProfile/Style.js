import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { Color, Font } from "../../helper";


export default StyleSheet.create({
    headercontainner: {
        backgroundColor: Color.White,
        marginTop: -65,
    },
    headerTextView: {
        alignSelf: "center",
    },
    tabStyle: {
        flexDirection: "row",
        marginTop: -40,
        paddingHorizontal: 20,
    },
    icon: {
        left: 15,
        marginRight: 25,
        color: Color.Black
    },

    tabChalStyle: {
        flexDirection: "row",
        width: "50%",
        alignItems: "center",
        paddingBottom: 5,
    },
    tabTextStyle: {
        fontFamily: Font.RobotoBold,
        fontSize: 20,
    },
});
