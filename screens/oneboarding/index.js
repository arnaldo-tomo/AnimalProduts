import { Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, Text, View } from "react-native"
import { GRAY, LIGHT, PRIMARY, ROSA, SPACING, imagOneboard } from "../../configs"
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get('screen');
export const Oneboarding = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: LIGHT, flex: 1 }} >
            <StatusBar animated showHideTransition={'fade'} translucent backgroundColor={LIGHT} barStyle={"dark-content"} />
            <View >
                <ImageBackground source={imagOneboard}
                    style={{
                        width: 300, height: 350,
                        alignContent: 'center',
                        alignSelf: 'center', marginTop: SPACING * 10
                    }} >

                </ImageBackground>
                <View>
                    <Text style={{
                        fontWeight: 'bold', fontSize: SPACING * 6, width: 260,
                        padding: SPACING, marginLeft: SPACING, marginTop: SPACING * 10, color: PRIMARY
                    }}>We deliver pet products worldwide</Text>
                    <Text style={{
                        fontWeight: '400', fontSize: 17,
                        marginLeft: SPACING * 2, marginRight: SPACING * 2, color: GRAY
                    }}>We deliver pet products worldwide, we never delay, we provide product on time</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: SPACING * 2, alignItems: "center", justifyContent: 'space-between', marginRight: SPACING, marginTop: SPACING * 20 }}>
                    <View style={{ flexDirection: 'row', padding: SPACING * 2 }}>
                        <Text style={{ backgroundColor: PRIMARY, borderRadius: SPACING * 3, width: SPACING * 2, height: SPACING * 2, marginLeft: SPACING }}></Text>
                        <Text style={{ backgroundColor: GRAY, borderRadius: SPACING * 3, width: SPACING * 2, height: SPACING * 2, marginLeft: SPACING }}></Text>
                        <Text style={{ borderWidth: SPACING, borderColor: GRAY, borderRadius: SPACING * 3, width: SPACING * 2, height: SPACING * 2, marginLeft: SPACING }}></Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: PRIMARY, padding: SPACING, borderRadius: SPACING * 5 }} onPress={() => navigation.push('Tabs')}>
                        <Ionicons name="arrow-forward" color={LIGHT} size={SPACING * 6} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}