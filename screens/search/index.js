import { SafeAreaView } from "react-native"
import { Text, View } from "react-native"
import { GRAY, LIGHT, PRIMARY, ROSA, SPACING, user, width } from "../../configs"
import { TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { Image } from "react-native"
import { useState } from "react"
import { AnimalCategory, produts } from "../../data"
import { ScrollView } from "react-native"


export const Search = ({ navigation }) => {
    const [busca, setBusca] = useState('');
    const [buscaCatehory, setBuscaCatehory] = useState('');
    const [activeCategria, setActiveCategria] = useState(0);
    const pesquisado = produts.filter((data) => data.name.toLowerCase().includes(busca.toLowerCase()) && data.AnimalCategoryId.toString().includes(buscaCatehory.toString()))
    return (
        <SafeAreaView style={{ backgroundColor: LIGHT, flex: 1., bottom: 'auto' }}>

            <View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, padding: 15, }}>
                    <Ionicons name="grid" color={PRIMARY} size={20} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Explore</Text>
                    <Image source={user.profile} style={{ width: 50, height: 50, borderRadius: 15 }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>

                    <View style={{
                        backgroundColor: PRIMARY, width: width - SPACING * 15, height: 50,
                        padding: SPACING * 2, marginLeft: SPACING * 2, borderRadius: SPACING, flexDirection: 'row', alignContent: 'center', alignItems: 'center'
                    }}>
                        <Ionicons name="search" color={LIGHT} size={20} />
                        <TextInput value={busca} style={{ color: LIGHT, marginLeft: SPACING * 2, width: 220 }} onChangeText={(text) => setBusca(text)} placeholder="Find the best product for your pet" placeholderTextColor={LIGHT} />
                        {!busca ? <></> :

                            <TouchableOpacity onPress={() => { setBusca(''), setBuscaCatehory('') }} style={{ left: SPACING * 52, position: 'absolute', width: 36, padding: SPACING, justifyContent: 'center' }}>
                                <Ionicons name="close" color={LIGHT} size={SPACING * 4} />
                            </TouchableOpacity>
                        }
                    </View>
                    <TouchableOpacity style={{ backgroundColor: PRIMARY, borderRadius: SPACING, padding: SPACING * 3, marginRight: 7 }}>
                        <Ionicons name="filter" color={LIGHT} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: SPACING * 5, paddingTop: SPACING * 7 }}>
                    <TouchableOpacity onPress={() => { setActiveCategria(0), setBusca(''), setBuscaCatehory('') }} style={{ marginRight: SPACING * 4 }} >
                        <Text style={[activeCategria == 0 ? { fontWeight: 'bold', color: PRIMARY } : { fontWeight: 'bold', color: GRAY }]}>All</Text>
                        <Text style={[activeCategria == 0 && { backgroundColor: ROSA, height: 5, borderRadius: SPACING }]}></Text>
                    </TouchableOpacity>
                    {AnimalCategory.map((data) =>
                        <ScrollView key={data.id} horizontal>
                            <TouchableOpacity key={data.id} onPress={() => { setActiveCategria(data.id), setBuscaCatehory(data.id) }} >
                                <Text key={data.id} style={[{ color: GRAY, fontWeight: 'bold' }, activeCategria == data.id && { color: PRIMARY, fontWeight: '800' }]}>{data.name}</Text>
                                <Text style={[activeCategria == data.id && { backgroundColor: ROSA, height: 4, borderRadius: SPACING, paddingTop: SPACING }]}></Text>
                            </TouchableOpacity>
                        </ScrollView>
                    )}
                </View>

                {
                    !pesquisado.length == 0 ?
                        <ScrollView>
                            {pesquisado.map((data) =>
                                <TouchableOpacity key={data.id} style={{
                                    padding: SPACING * 2,
                                    borderRadius: SPACING, marginTop: SPACING, backgroundColor:
                                        LIGHT, width: width - 18, height: 120, elevation: 2,
                                    marginLeft: SPACING * 2, marginRight: SPACING * 2,
                                    flexDirection: 'row', marginBottom: SPACING
                                }} onPress={() => navigation.navigate('Product', data)}>

                                    <View>
                                        <Image source={data.Image} style={{ width: 100, height: 100 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>
                                        <Text style={{ color: GRAY, width: 260, fontWeight: 'normal', height: 50, }}>{data.description}</Text>
                                        <Text style={{ fontWeight: 'bold', color: GRAY }}>{data.price}.00MZN</Text>
                                    </View>
                                </TouchableOpacity>

                            )}
                        </ScrollView>
                        :
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                            <Image source={user.notFOund} />
                            <Text style={{ fontWeight: 'bold', color: PRIMARY, fontSize: SPACING * 5 }}>Ups!... Not FOund</Text>
                        </View>
                }
            </View>
        </SafeAreaView >
    )
}