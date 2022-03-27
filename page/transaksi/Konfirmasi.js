import * as React from 'react';
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

const Konfirmasi = () => {
  const [isModalOpen, setModal] = React.useState(false);
  return (
    <View>
      <Text children="Data Pemesan" />

      <Text children="Nama Lengkap" />
      <TextInput style={styles.input} value="Fulan bin Fulan" disabled/>

      <Text children="Identitas" />
      <TextInput style={styles.input} value="Laki-Laki" disabled/>
      <Text children="Umur" />
      <TextInput style={styles.input} value="16 Tahun" disabled/>
      <Button
        style={{}}
        title="Submit"
        onPress={() => {
          setModal(!isModalOpen);
        }}
      />

      <Modal visible={isModalOpen} transparent="true">
        <View style={styles.modalView}>
          <Text style={styles.modaltittle} children="PEMBAYARAN" />
          <View>
            <Text children="Transfer Ke No. Rek." />
            <Text children="xxxxxxxxxxxxx" />
            <Button
              onPress={() => {
                setModal(!isModalOpen);
              }}
              title="SELESAI"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 25,
    borderWidth: 1,
  },
  modaltittle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: 'orange',
    width: '100%',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 300,
    borderRadius: 5,
    marginTop: '30%',
    marginLeft: 40,
  },
});

export default Konfirmasi;
