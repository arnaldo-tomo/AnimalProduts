import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { GRAY, LIGHT, PRIMARY, ROSA, SPACING, user, width } from "../../configs"
import { TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"


export const Search = () => {
    return (
        <SafeAreaView style={{ backgroundColor: LIGHT, flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, padding: 15, }}>
                <Ionicons name="grid" color={PRIMARY} size={20} />
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Explore</Text>
                <Image source={user.profile} style={{ width: 50, height: 50, borderRadius: 15 }} />
            </View>

            <View style={{
                backgroundColor: PRIMARY, width: width - SPACING * 3, height: 50,
                padding: SPACING * 2, marginLeft: SPACING * 2, borderRadius: SPACING, flexDirection: 'row', justifyContent: 'space-between'
            }}>
                <TouchableOpacity style={{ backgroundColor: PRIMARY }}>
                    <Ionicons name="search" color={LIGHT} size={20} />
                </TouchableOpacity>
                <TextInput placeholder="Find the best product for your pet" placeholderTextColor={LIGHT} />
                <Ionicons name="filter" color={LIGHT} size={20} />
            </View>
        </SafeAreaView >
    )
}