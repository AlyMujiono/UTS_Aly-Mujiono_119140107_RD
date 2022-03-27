import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, Button } from 'react-native';
import Konfirmasi from './Konfirmasi';
import Tiket from './Tiket'
const Tinjau = ({navigation}) => {
  const [isLanjut, setLanjut] = React.useState(false);
  return (
    <View style={style.container}>
      <Text>Rincian Tiket</Text>
      <View style={style.card}>
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

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button color="gray" title="Kembali" />
          <Button
            onPress={() => {
              setLanjut(true);
            }}
            title="Lanjutkan"
          />
        </View>
      </View>
      {isLanjut && <Konfirmasi />}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex:1
  },
  card: {},
});

export default Tinjau;
