import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Button, TextInput, ScrollView, Dimensions } from "react-native";
import { GRAY, LIGHT, PRIMARY, ROSA, SPACING, mpesalogo, user } from "../../configs";
import { Ionicons } from "@expo/vector-icons";
import { PaymentMZ } from "../../data";
import React, { useCallback, useMemo, useRef, useState } from 'react';
export const Payment = ({ navigation, route }) => {
    const { PorUnidade, quantidade, valorTotal, descrip } = route.params;
    const [number, onChangeNumber] = React.useState('');
    const [nome, setNome] = useState('');
    const [show, setShow] = useState(false);
    const { width, height } = Dimensions.get('screen');

    const paynow = () => {
        console.log("MOSA");
    }
    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: LIGHT, height: height, width: width }}>

                <View style={{ marginTop: SPACING * 10, justifyContent: 'space-between', flexDirection: 'row', marginLeft: SPACING * 3, marginRight: SPACING * 3, alignItems: 'center', alignContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="arrow-back" size={SPACING * 5} style={{ color: PRIMARY, marginLeft: SPACING }} />
                            <Text style={{ color: PRIMARY, fontWeight: '500', fontSize: SPACING * 5, marginLeft: SPACING * 2 }}>Payment</Text>
                        </View>
                    </TouchableOpacity>
                    <Image source={user.profile} style={{ width: 40, height: 40, borderRadius: SPACING * 2 }} />
                </View>
                <View style={{
                    marginTop: 30,
                    backgroundColor: LIGHT, padding: SPACING,
                    width: 350, height: 200, marginLeft: SPACING * 2,
                    borderRadius: SPACING * 2, elevation: 2
                }}>
                    <Text style={{ color: PRIMARY, fontSize: SPACING * 5, marginBottom: SPACING, }}>Payment  infomation</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: SPACING }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: PRIMARY, fontSize: SPACING * 5 }}> Unidade: {PorUnidade}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: PRIMARY, fontSize: SPACING * 5 }}> Qunat: {quantidade}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 5 }}> Total:{valorTotal}</Text>
                    </View>
                    <View>
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 5, }}>Description</Text>
                        <Text style={{ color: PRIMARY }}>{descrip}</Text>
                    </View>
                </View>
                <View style={{ marginLeft: SPACING * 2, marginTop: SPACING * 3, backgroundColor: LIGHT }}>
                    <Text style={{ color: PRIMARY, fontSize: SPACING * 5, marginBottom: SPACING, }}>Payment Method</Text>
                    {PaymentMZ.map((payment) =>
                        <TouchableOpacity key={payment.id} onPress={() => { setShow(true); setNome(payment.name); }} style={{ backgroundColor: LIGHT, elevation: 1, width: 350, height: 100, borderRadius: SPACING * 2, padding: SPACING, marginBottom: SPACING * 2 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: SPACING }}>
                                <Image source={payment.Image} style={{ width: 100, height: 80, resizeMode: "cover", borderRadius: SPACING }} />

                                <View style={{ marginLeft: SPACING * 2 }}>
                                    <Text style={{ color: PRIMARY, fontSize: SPACING * 4, fontWeight: 'bold' }}>{payment.name}</Text>
                                    <Text style={{ color: GRAY, fontSize: SPACING * 3 }}>Taxa a pagar: {payment.prince} mt</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>

                {
                    show == true &&
                    <>
                        <View View style={{
                            width: 370, height: 250, backgroundColor: LIGHT, elevation: 10, bottom: 161,
                            borderTopLeftRadius: SPACING * 5, borderTopRightRadius: SPACING * 5, padding: SPACING * 5,
                        }}>
                            <TouchableOpacity onPress={() => setShow(false)}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                                    <Ionicons name="close" color={'red'} size={SPACING * 5} />
                                    <Text style={{ color: 'red', fontSize: SPACING * 3, fontWeight: 'bold' }}>Fechar Modal</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={{ fontWeight: 'bold', marginBottom: SPACING }}> Informe o numero do {nome}</Text>
                                <TextInput
                                    style={{ backgroundColor: 'gray', height: 50, borderRadius: SPACING * 2, padding: SPACING, color: LIGHT }}
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    placeholderTextColor={LIGHT}
                                    placeholder="846474687"
                                    keyboardType="numeric"
                                />

                            </View>
                            <TouchableOpacity onPress={() => paynow()}
                                style={{
                                    backgroundColor: PRIMARY, width: 340,
                                    height: 50, padding: SPACING, borderRadius: SPACING * 3,
                                    alignSelf: 'center', alignItems: 'center', alignContent: 'center', bottom: SPACING * 5, position: 'absolute',
                                }}>
                                <Text style={{ fontSize: 20, color: LIGHT, padding: SPACING * 2 }}> Procced to Checkout
                                    <Ionicons name="chevron-forward" size={20} />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </ScrollView>

        </SafeAreaView >
    )
}