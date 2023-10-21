import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Button, TextInput, ScrollView } from "react-native";
import { GRAY, LIGHT, PRIMARY, ROSA, SPACING, mpesalogo, user } from "../../configs";
import { Ionicons } from "@expo/vector-icons";
import { PaymentMZ } from "../../data";
import { Client } from '@paymentsds/mpesa'
import React, { useCallback, useMemo, useRef, useState } from 'react';
export const Payment = ({ navigation, route }) => {
    // var Client = require("@paymentsds/mpesa").Client;
    const { PorUnidade, quantidade, valorTotal, descrip } = route.params;
    const [number, onChangeNumber] = React.useState('');
    const [nome, setNome] = useState('');
    const [show, setShow] = useState(true);


    const paynow = () => {
        console.log("MOSA");
        const client = new Client({
            apiKey: 'ggpsxrq7bevxqd30pwc9r1mdwpdmraka',             // API Key
            publicKey: 'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAmptSWqV7cGUUJJhUBxsMLonux24u+FoTlrb+4Kgc6092JIszmI1QUoMohaDDXSVueXx6IXwYGsjjWY32HGXj1iQhkALXfObJ4DqXn5h6E8y5/xQYNAyd5bpN5Z8r892B6toGzZQVB7qtebH4apDjmvTi5FGZVjVYxalyyQkj4uQbbRQjgCkubSi45Xl4CGtLqZztsKssWz3mcKncgTnq3DHGYYEYiKq0xIj100LGbnvNz20Sgqmw/cH+Bua4GJsWYLEqf/h/yiMgiBbxFxsnwZl0im5vXDlwKPw+QnO2fscDhxZFAwV06bgG0oEoWm9FnjMsfvwm0rUNYFlZ+TOtCEhmhtFp+Tsx9jPCuOd5h2emGdSKD8A6jtwhNa7oQ8RtLEEqwAn44orENa1ibOkxMiiiFpmmJkwgZPOG/zMCjXIrrhDWTDUOZaPx/lEQoInJoE2i43VN/HTGCCw8dKQAwg0jsEXau5ixD0GUothqvuX3B9taoeoFAIvUPEq35YulprMM7ThdKodSHvhnwKG82dCsodRwY428kg2xM/UjiTENog4B6zzZfPhMxFlOSFX4MnrqkAS+8Jamhy1GgoHkEMrsT5+/ofjCx0HjKbT5NuA2V/lmzgJLl3jIERadLzuTYnKGWxVJcGLkWXlEPYLbiaKzbJb2sYxt+Kt5OxQqC1MCAwEAAQ==',          // Public Key
            serviceProviderCode: '171717' // Service Provider Code
        });
        const paymentData = {
            from: '846474687',               // Customer MSISDN
            reference: '11114',              // Third Party Reference
            transaction: 'T12344CC',          // Transaction Reference
            amount: '10'                     // Amount
        };

        client.receive(paymentData).then(r => {

        }).catch(e => {
            // Handle success scenario
        });
    }
    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{ marginTop: SPACING * 10, justifyContent: 'space-between', flexDirection: 'row', marginLeft: SPACING * 3, marginRight: SPACING * 3, alignItems: 'center', alignContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="arrow-back" size={SPACING * 5} style={{ color: PRIMARY, marginLeft: SPACING }} />
                            <Text style={{ color: PRIMARY, fontWeight: '500', fontSize: SPACING * 5, marginLeft: SPACING * 2 }}>Payment</Text>
                        </View>
                    </TouchableOpacity>
                    <Image source={user.profile} style={{ width: 40, height: 40, borderRadius: SPACING * 2, borderColor: GRAY, borderWidth: 1 }} />
                </View>
                <View style={{
                    marginTop: 30,
                    backgroundColor: LIGHT, padding: SPACING,
                    width: 350, height: 200, marginLeft: SPACING * 2,
                    borderRadius: SPACING * 2, elevation: 10
                }}>
                    <Text style={{ color: PRIMARY, fontSize: SPACING * 5, marginBottom: SPACING, }}>Payment  infomation</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: SPACING }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="cash-outline" color={PRIMARY} size={SPACING * 4} />
                            <Text style={{ color: PRIMARY, fontSize: SPACING * 5 }}> Unidade: {PorUnidade}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="cube-outline" color={PRIMARY} size={SPACING * 4} />
                            <Text style={{ color: PRIMARY, fontSize: SPACING * 5 }}> Qunat: {quantidade}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="document-text-outline" color={PRIMARY} size={SPACING * 4} />
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 5 }}> Total:{valorTotal}</Text>
                    </View>
                    <View>
                        <Text style={{ color: PRIMARY, fontSize: SPACING * 5, }}>Description</Text>
                        <Text style={{ color: PRIMARY }}>{descrip}</Text>
                    </View>
                </View>
                <View style={{ marginLeft: SPACING * 2, marginTop: SPACING * 3 }}>
                    <Text style={{ color: PRIMARY, fontSize: SPACING * 5, marginBottom: SPACING, }}>Payment Method</Text>
                    {PaymentMZ.map((payment) =>
                        <TouchableOpacity key={payment.id} onPress={() => { setShow(true); setNome(payment.name); }}>
                            <View style={{ backgroundColor: LIGHT, elevation: 100, width: 350, height: 100, borderRadius: SPACING * 2, padding: SPACING, marginBottom: SPACING * 2 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', padding: SPACING }}>
                                    <Image source={payment.Image} style={{ width: 100, height: 80, resizeMode: "cover", borderRadius: SPACING }} />

                                    <View style={{ marginLeft: SPACING * 2 }}>
                                        <Text style={{ color: PRIMARY, fontSize: SPACING * 4, fontWeight: 'bold' }}>{payment.name}</Text>
                                        <Text style={{ color: GRAY, fontSize: SPACING * 3 }}>Taxa a pagar: {payment.prince} mt</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>

            {
                show == true &&
                <>
                    <View View style={{
                        width: 370, height: 250, backgroundColor: LIGHT, elevation: 10, bottom: 161,
                        borderTopLeftRadius: SPACING * 5, borderTopRightRadius: SPACING * 5, padding: SPACING * 5
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
        </SafeAreaView >
    )
}