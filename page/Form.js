import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Picker,
  Pressable,
  Button
} from 'react-native';
import NumOnly from './sub/numOnly';
import * as Pelabuhan from '../data/pelabuhan.json';
import * as Jadwal from '../data/jadwal.json';

const pelabuhan = Pelabuhan.pelabuhan.map((item) => {
  return <Picker.Item label={item.nama} value={item.nama} />;
});
const Form = ({navigation})=>{
    return (
      <View style={style.MainForm}>
        <View>
          <Text style={{ fontSize: 13 }}>Pelabuhan Awal</Text>
          <View style={style.Select}>
            <Image style={style.Icon} source={require('../icon/boat.png')} />
            <Picker style={style.Picker}>
              <Picker.Item label="Pilih Pelabuhan" value="0" />
              {pelabuhan}
            </Picker>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 13 }}>Pelabuhan Tujuan</Text>
          <View style={style.Select}>
            <Image style={style.Icon} source={require('../icon/boat.png')} />
            <Picker style={style.Picker}>
              <Picker.Item label="Pilih Pelabuhan" value="0" />
              {pelabuhan}
            </Picker>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 13 }}>Kelas Layanan</Text>
          <View style={style.Select}>
            <Image style={style.Icon} source={require('../icon/seat.png')} />
            <Picker style={style.Picker}>
              <Picker.Item label="Pilih Kelas" value="0" />
              <Picker.Item label="Regular" value="reg" />
              <Picker.Item label="VIP" value="vip" />
            </Picker>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 13 }}>Tanggal Masuk Pelabuhan</Text>
          <View style={style.Select}>
            <Image
              style={style.Icon}
              source={require('../icon/calendar.png')}
            />
            <Picker style={style.Picker}>
              <Picker.Item label="Pilih Tanggal" value="0" />
              {Jadwal.tanggal.map((item) => (
                <Picker.Item label={item} value={item} />
              ))}
            </Picker>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 13 }}>Jam Masuk Pelabuhan</Text>
          <View style={style.Select}>
            <Image style={style.Icon} source={require('../icon/clock.png')} />
            <Picker style={style.Picker}>
              <Picker.Item label="Pilih Jam" value="0" />
              {Jadwal.jam.map((item) => (
                <Picker.Item label={item} value={item} />
              ))}
            </Picker>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 13 }}>Penumpang</Text>
          <View style={style.Select}>
            <Picker style={{}}>
              <Picker.Item label="Dewasa" value="dewasa" />
              <Picker.Item label="Anak-Anak" value="anak" />
            </Picker>
            X<NumOnly />
            <Text style={{ marginTop: 3, marginLeft: 5 }}>Orang</Text>
          </View>
        </View>
        <Button
          onPress={()=>navigation.navigate('Tinjau')}
          title="Buat Tiket"
          style={{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'navy',
            color: 'white',
            fontWeight: 'bold',
            height: 25,
          }}>
          Buat Tiket
        </Button>
      </View>
    );
  }

const style = StyleSheet.create({
  MainForm: {
    marginHorizontal: 30,
  },
  Select: {
    flexDirection: 'row',
  },
  Icon: {
    marginTop: 10,
    width: 20,
    height: 20,
  },
  Picker: {
    borderRadius: 5,
    backgroundColor: 'rgba(216,209,212,0.8)',
    width: 200,
    height: 30,
    marginLeft: 30,
    marginTop: 10,
  },
});
export {Form}