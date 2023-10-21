import { StatusBar } from "expo-status-bar"
import { ImageBackground, SafeAreaView, Text, ToastAndroid, TouchableOpacity } from "react-native"
import { View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { GRAY, LIGHT, PRIMARY, ROSA, SPACING } from "../../configs/index";
import { Image } from "react-native";
import { useState } from "react";
export const Product = ({ navigation, route }) => {
    const { name, Image, gm, description, price } = route.params;
    const [amount, setAmount] = useState(1)
    const [like, setLike] = useState(false);
    // const [des, SetDesc] = useState('');
    const payamentData = { PorUnidade: price, quantidade: amount, valorTotal: amount * price, descrip: description };
    const gosto = () => {
        setLike(true)
        ToastAndroid.show('Uau! Adoramos saber disso!', ToastAndroid.SHORT);
    };

    return (
        <SafeAreaView>
            <View>
                <StatusBar style="dark" />
                <View style={{
                    paddingTop: SPACING * 8, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between', marginRight: SPACING * 3, marginLeft: SPACING * 3
                }} >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={SPACING * 6} />
                    </TouchableOpacity>
                    {like == false ? <TouchableOpacity onPress={() => gosto()}>
                        <Ionicons name="heart-outline" size={SPACING * 6} color={PRIMARY} />
                    </TouchableOpacity> :
                        <TouchableOpacity onPress={() => setLike(false)}>
                            <Ionicons name="heart" size={SPACING * 6} color={'red'} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', color: PRIMARY, fontSize: SPACING * 4 }}>{name}</Text>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: SPACING * 10 }}>
                <ImageBackground source={Image} style={{ width: 300, height: 300, alignItems: 'center', alignContent: 'center' }}>
                    {/* <Image source={Image} style={{ width: 100, height: 100 }} /> */}
                </ImageBackground>

                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: SPACING * 8 }}>
                    <TouchableOpacity onPress={() => setAmount(amount - 1)} style={{ backgroundColor: ROSA, padding: SPACING, borderRadius: SPACING }}>
                        <Ionicons name="remove-outline" size={SPACING * 6} color={PRIMARY} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: SPACING * 6, marginLeft: SPACING * 6, marginRight: SPACING * 6 }}>{amount}</Text>
                    <TouchableOpacity onPress={() => setAmount(amount + 1)} style={{ backgroundColor: ROSA, padding: SPACING, borderRadius: SPACING }}>
                        <Ionicons name="add-outline" size={SPACING * 6} color={PRIMARY} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', justifyContent: 'space-between',
                marginLeft: SPACING * 3, marginRight: SPACING * 3, marginTop: SPACING * 6
            }}>
                <Text style={{ color: PRIMARY, fontWeight: 'bold' }}>{price}MZN</Text>
                <Text style={{ color: PRIMARY, fontWeight: 'bold' }}>{gm}gm</Text>
            </View>
            <View style={{ marginLeft: SPACING * 3, marginRight: SPACING * 3, marginTop: SPACING * 2 }}>
                <Text style={{ color: GRAY }}>{description}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Payment', payamentData)}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    alignContent: 'center', alignSelf: 'center', justifyContent: 'center',
                    backgroundColor: PRIMARY, width: 340, height: 50, borderRadius: SPACING * 2, top: 50, position: 'absolute'
                }}>
                    <Ionicons name="cart" size={SPACING * 5} color={LIGHT} />
                    <Text style={{ color: LIGHT, fontWeight: 'bold', fontSize: 20 }}>Add to cart</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView >
    )
}