import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, Button } from 'react-native';
import Tiket from './transaksi/Tiket';
import { BottomNav } from './BottomNav';
const PesananSaya = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Tiket
        asal="Merak"
        tujuan="Priuk"
        tanggal="17 Agustus 2022"
        jam="17:00"
        layanan="VIP"
        penumpang="Dewasa"
        jumlah="1"
        harga="50.000"
      />
      <Tiket
        asal="Merak"
        tujuan="Priuk"
        tanggal="17 Agustus 2022"
        jam="17:00"
        layanan="VIP"
        penumpang="Dewasa"
        jumlah="1"
        harga="50.000"
      />
      <BottomNav />
    </View>
  );
};

export default PesananSaya;
