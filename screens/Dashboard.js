import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../assets/menu.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <TouchableOpacity>
            <Image source={require('../assets/notification.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.userInfo}>
          <Image source={require('../assets/avatar.png')} style={styles.userIcon} />
          <Text style={styles.userName}>MrDriver</Text>
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>New order: Order28, ID:0001344884</Text>
          <Text style={styles.notificationTime}>9:11</Text>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Balance:</Text>
          <Text style={styles.balanceAmount}>1,200,214 TND</Text>
        </View>
        <View style={styles.ordersContainer}>
          <View style={styles.order}>
            <Text style={styles.orderText}>Order28, ID: 0001318654</Text>
          </View>
          <View style={styles.order}>
            <Text style={styles.orderText}>Order27, ID: 0001263489</Text>
          </View>
          <View style={styles.order}>
            <Text style={styles.orderText}>Order26, ID: 0001497989</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#003366',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003366',
    paddingVertical: 20, // Increased height
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20, // Optional: to add rounded corners at the bottom
    borderBottomRightRadius: 20, // Optional: to add rounded corners at the bottom
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {
    width: 30, // Increased size
    height: 30, // Increased size
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    color: '#003366',
  },
  notification: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  notificationText: {
    color: 'white',
    fontSize: 16,
  },
  notificationTime: {
    color: 'white',
    fontSize: 14,
    textAlign: 'right',
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 16,
    color: '#003366',
  },
  balanceAmount: {
    fontSize: 16,
    color: '#003366',
  },
  ordersContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },
  order: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    color: '#003366',
  },
});

export default Dashboard;
