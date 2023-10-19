import { Text } from "react-native"
import { View } from "react-native"
import { AZUL, GRAY, IconGroup, LIGHT, PRIMARY, ROSA, SPACING, user } from "../../configs"
import { SafeAreaView } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { AnimalCategory, OthersProduts, produts } from "../../data";
import { ScrollView } from "react-native";
import { useState } from "react";
const { width, height } = Dimensions.get('screen');
export const Home = () => {


    const [activeCategria, setActiveCategria] = useState(1)
    return (
        <View style={{ backgroundColor: LIGHT, flex: 1, paddingTop: SPACING, height: height }}>
            <SafeAreaView>
                <StatusBar style='dark' />
                <View style={{ paddingHorizontal: SPACING * 5, paddingTop: SPACING * 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Image source={IconGroup} />
                    <TouchableOpacity >
                        <Image source={user.profile} style={{ width: 50, height: 50, borderRadius: SPACING * 3 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: 240, marginLeft: SPACING * 5, marginTop: SPACING * 5 }}>
                    <Text style={{ color: PRIMARY, fontWeight: 'bold', fontSize: SPACING * 5 }}>Find the best product for your pet</Text>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: SPACING * 5, paddingTop: SPACING * 7 }}>
                    {AnimalCategory.map((data) =>
                        <ScrollView horizontal>
                            <TouchableOpacity key={data.id} onPress={() => setActiveCategria(data.id)} >
                                <Text key={data.id} style={[{ color: GRAY, fontWeight: 'bold' }, activeCategria == data.id && { color: PRIMARY, fontWeight: '800' }]}>{data.name}</Text>
                                <Text style={[activeCategria == data.id && { backgroundColor: ROSA, height: 4, borderRadius: SPACING, paddingTop: SPACING }]}></Text>
                            </TouchableOpacity>
                        </ScrollView>
                    )}
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: SPACING * 4 }}>
                    {produts.map((data) =>
                        <View style={{ marginLeft: SPACING * 4 }}>
                            <View style={[{ width: 175, height: 270, backgroundColor: GRAY, borderRadius: SPACING * 2, padding: SPACING, alignItems: 'center', justifyContent: 'center' },
                            data.id == 0 && { width: 175, height: 270, backgroundColor: AZUL, borderRadius: SPACING * 2, padding: SPACING, alignItems: 'center', justifyContent: 'center' },
                            data.id == 1 && { width: 175, height: 270, backgroundColor: ROSA, borderRadius: SPACING * 2, padding: SPACING, alignItems: 'center', justifyContent: 'center' },
                            data.id == 2 && { width: 175, height: 270, backgroundColor: PRIMARY, borderRadius: SPACING * 2, padding: SPACING, alignItems: 'center', justifyContent: 'center' },

                            ]}>
                                <Image source={data.Image} style={{ width: 150, height: 150 }} />
                                <Text style={[{ color: PRIMARY, fontWeight: '800', },
                                data.id == 0 && { color: ROSA, fontWeight: '800', },
                                data.id == 2 && { color: LIGHT, fontWeight: '800', },
                                data.id == 3 && { color: LIGHT, fontWeight: '800', },
                                ]}> {data.name}</Text>
                                <Text style={[{ color: PRIMARY, fontWeight: '800', },
                                data.id == 0 && { color: ROSA, fontWeight: '800', },
                                data.id == 2 && { color: LIGHT, fontWeight: '800', },
                                data.id == 3 && { color: LIGHT, fontWeight: '800', },
                                ]}> {data.price}.00MZN</Text>
                            </View>
                        </View>
                    )}
                </ScrollView>

                <View style={{ marginLeft: SPACING * 2, paddingTop: SPACING * 2, }}>
                    <Text style={{ color: PRIMARY, fontSize: 20, fontWeight: 'bold', marginLeft: SPACING * 2 }}>Other products</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {OthersProduts.map((data) =>
                            <View style={{
                                backgroundColor: AZUL, width: 210, height: 100, borderRadius: SPACING * 2,
                                marginTop: SPACING * 2, marginLeft: SPACING * 2, padding: SPACING,
                                flexDirection: 'row', alignItems: 'center'
                            }}>
                                <Image source={data.Image} />
                                <View style={{ marginLeft: SPACING }}>
                                    <Text style={{ fontWeight: 'bold', color: PRIMARY }}>{data.name}</Text>
                                    <Text style={{ fontWeight: 'bold', color: GRAY }}>{data.description}</Text>
                                </View>
                            </View>
                        )}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View >
    )
}