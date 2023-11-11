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
        <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT, height: height, width: width }}>
            <ScrollView>

                <View style={{
                    marginTop: SPACING * 10, justifyContent: 'space-between',
                    flexDirection: 'row', marginLeft: SPACING * 3, marginRight: SPACING * 3, alignItems: 'center', alignContent: 'center'
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="arrow-back" size={SPACING * 5} style={{ color: PRIMARY, marginLeft: SPACING }} />
                            <Text style={{ color: PRIMARY, fontWeight: '400', fontSize: SPACING * 5, marginLeft: SPACING * 2 }}>Payment</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <Image source={user.profile} style={{ width: 40, height: 40, borderRadius: SPACING * 2 }} /> */}
                </View>
                <View style={{ backgroundColor: 'gray', height: 0.5, marginTop: SPACING * 2 }}></View>
                <View style={{
                    marginTop: 5, marginBottom: SPACING * 4,
                    backgroundColor: LIGHT, padding: SPACING,
                    width: '100%',

                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 4, marginBottom: SPACING, fontWeight: 'bold' }}>Price Details</Text>
                        <Ionicons name="chevron-up-outline" size={SPACING * 5} style={{ color: PRIMARY, marginLeft: SPACING }} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ color: 'gray', fontSize: SPACING * 4 }}>Quantity unit</Text>
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 3, fontWeight: 'bold' }}> {quantidade}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ color: 'gray', fontSize: SPACING * 4 }}>Items unit</Text>
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 3, fontWeight: 'bold' }}>Mt. {PorUnidade}.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ color: 'gray', fontSize: SPACING * 4 }}>Discount</Text>
                        <Text style={{ color: ROSA, fontSize: SPACING * 3, fontWeight: 'bold' }}>-Mt. 40.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ color: 'gray', fontSize: SPACING * 4 }}>Delivery Charges</Text>
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 3, fontWeight: 'bold' }}>-Mt. 49.00</Text>
                    </View>
                    <View style={{ backgroundColor: 'gray', height: 1, marginTop: SPACING * 4, marginBottom: SPACING * 4 }}></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: SPACING * 2 }}>
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 4, marginBottom: SPACING, fontWeight: 'bold' }}>Total Payable</Text>
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 4, marginBottom: SPACING, fontWeight: 'bold' }}>Mt.{valorTotal}.00</Text>
                    </View>
                </View>

                <View style={{ width: '100%', marginTop: SPACING * 4, backgroundColor: LIGHT, padding: SPACING * 2 }}>
                    <Text style={{ color: PRIMARY, fontSize: SPACING * 4, marginBottom: SPACING * 3, fontWeight: 'bold' }}>Payment options</Text>
                    {PaymentMZ.map((payment) =>
                        <TouchableOpacity key={payment.id} onPress={() => { setShow(true); setNome(payment.name); }}
                            style={{ backgroundColor: LIGHT, elevation: 1, width: '100%', height: 60, borderRadius: SPACING, padding: SPACING, marginBottom: SPACING * 2 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: SPACING }}>
                                <Image source={payment.Image} style={{ width: 40, height: 40, resizeMode: "cover", borderRadius: SPACING }} />
                                <View style={{ marginLeft: SPACING * 2 }}>
                                    <Text style={{ color: PRIMARY, fontSize: SPACING * 3, fontWeight: 'bold' }}>{payment.name}</Text>
                                    <Text style={{ color: ROSA }}>Taxa {payment.prince}.00 mt</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    )}
                    {/* <View style={{ backgroundColor: 'gray', height: 1, marginTop: SPACING * 4, marginBottom: SPACING * 4 }}></View> */}

                </View>

                {
                    show == true &&
                    <>
                        <View View style={{
                            width: '100%', height: 350, backgroundColor: PRIMARY, elevation: 10,
                            borderTopLeftRadius: SPACING * 5, borderTopRightRadius: SPACING * 5, padding: SPACING * 5,
                        }}>
                            <TouchableOpacity onPress={() => setShow(false)}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
                                    <Ionicons name="close" color={'red'} size={SPACING * 5} />
                                    <Text style={{ color: 'red', fontSize: SPACING * 3, fontWeight: 'bold' }}>Fechar Modal</Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Text style={{ fontWeight: 'bold', marginBottom: SPACING, color: LIGHT }}> Informe o numero do {nome}</Text>
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
                                    backgroundColor: ROSA, width: 350,
                                    height: 50, padding: SPACING, borderRadius: SPACING * 3,
                                    alignContent: 'center', marginTop: SPACING * 2,
                                    justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row'
                                }}>
                                <Text style={{ fontSize: 15, color: PRIMARY, padding: SPACING * 2, fontWeight: 'bold', }}> Procced to Checkout
                                </Text>
                                <Ionicons name="chevron-forward" size={20} />
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </ScrollView>

        </SafeAreaView >
    )
}