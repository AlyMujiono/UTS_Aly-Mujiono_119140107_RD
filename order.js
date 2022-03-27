import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.h1}>Daftar Pembatalan</Text>
            <Text style={styles.t1}>Tidak Ada Aktivitas Pembatalan Ticket</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    h1: {
        fontsize: 15,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 18, 134, 1)',
        width: '100%',
        textAlign: 'center',
        height: '40px',
        paddingTop: '10px',
        color: 'white',
    },
    t1: {
        fontsize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '300px',
        color: 'rgba(0, 18, 134, 1)',

    },
});

