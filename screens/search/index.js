import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { GRAY, LIGHT, PRIMARY, ROSA, SPACING, user, width } from "../../configs"
import { TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { useState } from "react"


export const Search = () => {

    const [busca, setBusca] = useState('');
    return (
        <SafeAreaView style={{ backgroundColor: LIGHT, flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, padding: 15, }}>
                <Ionicons name="grid" color={PRIMARY} size={20} />
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Explore</Text>
                <Image source={user.profile} style={{ width: 50, height: 50, borderRadius: 15 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{
                    backgroundColor: PRIMARY, width: width - SPACING * 15, height: 50,
                    padding: SPACING * 2, marginLeft: SPACING * 2, borderRadius: SPACING, flexDirection: 'row',
                }}>
                    <Ionicons name="search" color={LIGHT} size={20} />
                    <TextInput value={busca} style={{ color: LIGHT }} onChangeText={(text) => setBusca(text)} placeholder="Find the best product for your pet" placeholderTextColor={LIGHT} />

                </View>

                <TouchableOpacity style={{ backgroundColor: PRIMARY, borderRadius: SPACING, padding: SPACING * 2, marginLeft }}>
                    <Ionicons name="filter" color={LIGHT} size={20} />
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <Text>Resulatdo:{busca}</Text>
            </View>
        </SafeAreaView>
    )
}