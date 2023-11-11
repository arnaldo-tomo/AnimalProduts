import { ImageBackground } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"
import { GRAY, LIGHT, PRIMARY, ROSA, SPACING, height, user, width } from "../../configs"
import { Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

export const Account = () => {
    return (
        <View style={{ flex: 1, alignContent: 'center', backgroundColor: LIGHT }}>
            <ImageBackground source={user.Bgprofile} style={{ width: width, height: 200 }}>

                <Image source={user.profile} style={{ width: 100, height: 100, position: 'absolute', top: 150, borderRadius: SPACING * 2, left: SPACING * 2 }} />
            </ImageBackground>
            <View style={{ flexDirection: 'row', left: 200, padding: SPACING * 2 }}>
                <TouchableOpacity style={{
                    flexDirection: 'row', justifyContent: 'center',
                    alignItems: 'center', alignContent: 'center',
                    backgroundColor: '#FBE9EB', padding: SPACING * 2, borderRadius: SPACING
                }}>
                    <Ionicons name="pencil" color={'red'} size={SPACING * 3} style={{ marginRight: SPACING }} />
                    <Text style={{ fontWeight: 'bold', color: 'red' }}>Edit profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    justifyContent: 'center', marginLeft: SPACING * 2,
                    backgroundColor: '#EEF0F2', width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: SPACING
                }}>
                    <Ionicons name="ellipsis-horizontal" size={SPACING * 4} />
                </TouchableOpacity>
            </View>
            <View style={{ padding: SPACING * 2 }}>
                <Text style={{ fontWeight: 'bold', fontSize: SPACING * 4 }}>{user.name}</Text>
            </View>
            <View style={{ padding: SPACING }} >
                <Text style={{ fontWeight: 'bold', fontSize: SPACING * 4 }}> About  </Text>
                <Text style={{ padding: SPACING }}>Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SPACING, padding: SPACING * 2 }}>
                <Ionicons name="heart-outline" size={SPACING * 4} />
                <Text style={{ fontWeight: 'bold', fontSize: SPACING * 3, marginLeft: SPACING }}>Favorites</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: SPACING, backgroundColor: PRIMARY, height: 1, marginRight: SPACING * 2, marginLeft: SPACING * 2 }}></Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SPACING, padding: SPACING * 2 }}>
                <Ionicons name="car-outline" size={SPACING * 4} />
                <Text style={{ fontWeight: 'bold', fontSize: SPACING * 3, marginLeft: SPACING }}>Orders</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: SPACING, backgroundColor: PRIMARY, height: 1, marginRight: SPACING * 2, marginLeft: SPACING * 2 }}></Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SPACING, padding: SPACING * 2 }}>
                <Ionicons name="cart-outline" size={SPACING * 4} />
                <Text style={{ fontWeight: 'bold', fontSize: SPACING * 3, marginLeft: SPACING }}>Cart</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: SPACING, backgroundColor: PRIMARY, height: 1, marginRight: SPACING * 2, marginLeft: SPACING * 2 }}></Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SPACING, padding: SPACING * 2 }}>
                <Ionicons name="sync-outline" size={SPACING * 4} />
                <Text style={{ fontWeight: 'bold', fontSize: SPACING * 3, marginLeft: SPACING }}>CLear Cache</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: SPACING, backgroundColor: PRIMARY, height: 1, marginRight: SPACING * 2, marginLeft: SPACING * 2 }}></Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SPACING, padding: SPACING * 2 }}>
                <Ionicons name="trash-outline" size={SPACING * 4} />
                <Text style={{ fontWeight: 'bold', fontSize: SPACING * 3, marginLeft: SPACING }}>Delete Account</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: SPACING, backgroundColor: PRIMARY, height: 1, marginRight: SPACING * 2, marginLeft: SPACING * 2 }}></Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: SPACING, padding: SPACING * 2 }}>
                <Ionicons name="power-outline" size={SPACING * 4} />
                <Text style={{ fontWeight: 'bold', fontSize: SPACING * 3, marginLeft: SPACING }}>Logout</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: SPACING, backgroundColor: PRIMARY, height: 1, marginRight: SPACING * 2, marginLeft: SPACING * 2 }}></Text>

        </View>
    )
}