import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Button,
  TextInput,
  Modal,
} from 'react-native';

const Tiket = (props) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text children={props.asal} />
        <Image
          style={{ width: 50, height: 25 }}
          source={require('../../icon/arrow.png')}
        />
        <Text children={props.tujuan} />
      </View>
      <Text children="Jadwal Masuk Pelabuhan" />
      <Text children={props.tanggal} />
      <Text children={props.jam+" WIB"} />

      <Text children="Layanan" />
      <Text children={props.layanan} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text children={props.penumpang+' x'+props.jumlah} />
        <Text style={{}} children={"Rp. "+props.harga} />
      </View>
    </View>
  );
};

export default Tiket;
