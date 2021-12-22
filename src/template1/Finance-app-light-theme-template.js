import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Constants from 'expo-constants';



const Template = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topMenuContainer}>
                <View>
                    <Icon
                        name="menu"
                        type='ionicon'
                        size={24}
                        color="black" />
                </View>
                <View style={styles.topMenuUserBox}>
                    <Icon
                        name="user"
                        type='evilicon'
                        size={32}
                        color="black" />
                </View>
            </View>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.headerTitle}>Hello David</Text>
                    <Text style={styles.headerText}> Welcome Back !</Text>
                </View>
                <View style={styles.headerIcon}>
                    <Icon
                        name="sliders-h"
                        type='font-awesome-5'
                        size={18}
                        color="gray" />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentBox}>
                    <View style={styles.contentSmallBoxLeft}>
                        <Icon
                            name="brightness-percent"
                            type='material-community'
                            size={18}
                            color="black" />
                        <Text style={styles.contentBoxTitle}>230k</Text>
                        <Text style={styles.contentBoxText}>Sales</Text>
                    </View>
                    <View style={[styles.contentBigBoxLeft]}>
                        <Icon
                            name="layout"
                            type='feather'
                            size={20}
                            color="black"
                            style={styles.contentIcon} />
                        <Text style={styles.contentBoxTitle}>1.423k</Text>
                        <Text style={styles.contentBoxText}>Products</Text>
                    </View>
                </View>
                <View style={styles.contentBox}>
                    <View style={[styles.contentBigBoxRight]}>
                        <Icon
                            name="user"
                            type='evilicon'
                            size={32}
                            color="black" />
                        <Text style={styles.contentBoxTitle}>8.549k</Text>
                        <Text style={styles.contentBoxText}>Customers</Text>
                    </View>
                    <View style={[styles.contentSmallBoxRight]}>
                        <Icon
                            name="circle-slice-3"
                            type='material-community'
                            size={20} color="black"
                            style={styles.contentRevenueIcon} />
                        <Text style={styles.contentBoxTitle}>$9745</Text>
                        <Text style={styles.contentBoxText}>Revenue</Text>
                    </View>
                </View>
            </View>
            <View style={styles.altMenuContainer}>
                <View> <Icon
                    name="home"
                    type='feather'
                    size={24}
                    color="black"
                /> </View>
                <View> <Icon
                    name="wallet-outline"
                    type='ionicon'
                    size={24}
                    color="black" /> </View>
                <View> <Icon
                    name="chart"
                    type='simple-line-icon'
                    size={20}
                    color="black" /> </View>
                <View> <Icon
                    name="user"
                    type='antdesign'
                    size={24}
                    color="black" /> </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20
    },
    topMenuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topMenuUserBox: {
        borderStyle: 'solid',
        borderColor: 'rgb(229, 229, 229)',
        borderWidth: 2,
        borderRadius: 12,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 700,
        marginBottom: 3,
    },
    headerText: {
        fontSize: 14,
        fontWeight: 500,
        color: 'gray',
    },
    headerIcon: {
        paddingRight: 10,
        paddingTop: 15,
    },
    contentContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    contentBox: {
        height: '100%',
        width: '49%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentBigBoxLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '55%',
        width: '90%',
        backgroundColor: 'rgb(241, 238, 233)',
        borderRadius: 35,
        marginTop: 25,
    },
    contentBigBoxRight: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '55%',
        width: '90%',
        backgroundColor: 'rgb(230, 223, 241)',
        borderRadius: 35,
        marginBottom: 25,
        paddingBottom: 30,
    },
    contentSmallBoxLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '45%',
        width: '90%',
        backgroundColor: 'rgb(192, 222, 220)',
        borderRadius: 35,
    },
    contentSmallBoxRight: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '45%',
        width: '90%',
        backgroundColor: 'rgb(241, 223, 223)',
        borderRadius: 35,
    },
    contentBoxTitle: {
        fontSize: 20,
        fontWeight: 700,
        marginTop: 5,
    },
    contentBoxText: {
        fontSize: 12,
        fontWeight: 600,
        marginTop: 5,
    },
    contentIcon: {
        paddingBottom: 15,
    },
    contentRevenueIcon: {
        paddingBottom: 8,
    },
    altMenuContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'end',
        paddingBottom: 20
    },
});

export default Template
