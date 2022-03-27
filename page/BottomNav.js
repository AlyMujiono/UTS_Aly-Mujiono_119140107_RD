import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  Modal,
} from 'react-native';

const BottomNav = (props) => {
  const [isLainnya, setLainnya] = React.useState(false);
  return (
    <View style={style.BottomNav}>
      <View style={style.BottomNavItem}>
       <Pressable
      onPress={() => props.nav.navigate('Home')}>
        <View style={style.BottomNavItemIcon}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../icon/home.png')}
          />
        </View>
        <Text style={style.BottomNavItemText}>Beranda</Text>
        </Pressable>
      </View>
      <View style={style.BottomNavItem}>
       <Pressable
      onPress={() => props.nav.navigate('Pesan')}>
        <View style={style.BottomNavItemIcon}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../icon/pesanan.png')}
          />
        </View>
        <Text style={style.BottomNavItemText}>Pesanan Saya</Text>
        </Pressable>
      </View>
      <View style={style.BottomNavItem}>
      <Pressable
      onPress={() => props.nav.navigate('Pesan')}>
        <View style={style.BottomNavItemIcon}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../icon/pembatalan.png')}
          />
        </View>
        <Text style={style.BottomNavItemText}>Pembatalan</Text>
        </Pressable>
      </View>
      <View style={style.BottomNavItem}>
        <Pressable
          onPress={() => {
            setLainnya(!isLainnya);
          }}>
          <View style={style.BottomNavItemIcon}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../icon/other.png')}
            />
          </View>
          <Text style={style.BottomNavItemText}>Lainnya</Text>
        </Pressable>
      </View>
      <Modal transparent="false" visible={isLainnya}>
        <View
          style={{ width: '50%', marginTop: '30%', backgroundColor: 'white' ,marginHorizontal:'20%'}}>
          <Text children="MENU" />
          <View style={{ flexDirection: 'row',flexWrap:'wrap',justifyContent:'space-between' }}>
            <View>
              <View>
                <Image
                  source={require('../icon/search.png')}
                  style={style.img}
                />
              </View>
              <Text>Pembatalan</Text>
            </View>

            <View>
              <View>
                <Image
                  source={require('../icon/profile.png')}
                  style={style.img}
                />
              </View>
              <Text>Pembatalan</Text>
            </View>

            <View>
              <View>
                <Image
                  source={require('../icon/customer-service.png')}
                  style={style.img}
                />
              </View>
              <Text>Pembatalan</Text>
            </View>

            <View>
              <View>
                <Image
                  source={require('../icon/history.png')}
                  style={style.img}
                />
              </View>
              <Text>Pembatalan</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const style = StyleSheet.create({
  BottomNav: {
    height: 45,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderTopColor: 'gray',
    borderTopWidth: 3,
  },
  BottomNavItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomNavItemIcon: {
    width: 20,
    height: 20,
  },
  BottomNavItemText: {
    fontSize: 10,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 4,
  },
  img: {
    height: 75,
    width: 75,
  },
});
export {BottomNav};
