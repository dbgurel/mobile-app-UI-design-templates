import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import Constants from 'expo-constants';

const AppUiTemplate = () => {



    return (
        <View style={styles.mainContainer}>
            <View style={styles.topBarContainer}>
                <Icon
                    name='ios-reorder-two-outline'
                    type='ionicon'
                    color="black"
                />

            </View>
            <View style={styles.headerContainer}>
                <View style={styles.headerIconBox}><Icon
                    name='paypal'
                    type='font-awesome-5'
                    color='#fff'
                    size={28} />
                </View>
                <View style={styles.headerTextBox}>
                    <Text style={styles.mainHeader}>Product Designer</Text>
                    <Text style={styles.subHeader}>PayPal Inc.</Text>
                    <Text style={styles.headerAddress}>1600 Amphitheatre Parkway, Mountain View</Text>
                </View>

            </View>
            <View style={styles.mainContentContainer}>
                <View style={styles.mainContentContainer}>
                    <Text style={styles.header}>Job Descriptions</Text>
                    <Text style={styles.contentFirstPar}>We're a team of youthful, intelligent and dedicated creatives who have an unrivaled energy and passion for crafting beautiful and meaningful products.</Text>
                    <Text style={styles.contentSecondPar}>We strive to follow all UX processes of ideation, research and MVP for our product designs to enable output that is both aesthetic and strategic.</Text>
                    <Text style={styles.header}>Responsibilities</Text>
                    <Text style={styles.contentThirdPar}>Keep the interface beautiful and easy to use.</Text>
                </View>

            </View>
            <View style={styles.bottomContentContainer}>
                <View style={styles.bottomFirstBox}>
                    <View>
                        <Text style={styles.bottomHeader}>Earn Skill Badge</Text>
                        <Text style={styles.contentText}>Skill assessments help you to stand</Text>
                        <Text style={styles.contentText}>Out to recruiters</Text>
                    </View>
                    <View>
                        <Icon
                            name='arrow-right-bold-box-outline'
                            type='material-community'
                            color='#000'
                            size={44}
                        />
                    </View>
                </View>
                <View style={styles.bottomSecondBox}>
                    <View>
                        <Text style={styles.bottomHeader}>Similar Job Alert</Text>
                        <Text style={styles.contentText}>Product Designer, Typography, Google LLC</Text>
                    </View>
                    <View>
                        <Icon
                            name='toggle-on'
                            type='font-awesome'
                            color='#000'
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 2,
        height: '100%',
        paddingTop: Constants.statusBarHeight
    },
    topBarContainer: {
        flex: 1,
        height: '100%',
        marginHorizontal: 20,
        alignItems: 'flex-start'
    },
    headerContainer: {
        flex: 3,
        height: '100%',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    mainContentContainer: {
        flex: 4,
        height: '100%',
        marginHorizontal: 20,
        marginBottom:10
    },
    bottomContentContainer: {
        flex: 3,
        height: '100%',
        width: '100%',
        backgroundColor: '#B5ADFF',
        marginTop: 30,
        position: 'relative',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
    },
    headerIconBox: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: '#359AFF',
        borderRadius: 15,
        alignContent: 'center',
        marginBottom: 15
    },
    headerTextBox: {
        height: '50%',
        alignItems: 'center'
    },
    mainHeader: {
        fontFamily: "Comic-Sans, sans-serif",
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 10
    },
    subHeader: {
        fontFamily: "Comic-Sans, sans-serif",
        fontSize: 16,
        fontWeight: 500,
        color: 'gray',
        marginBottom: 10
    },
    headerAddress: {
        fontFamily: "Comic-Sans, sans-serif",
        fontSize: 14,
        fontWeight: 500,
        marginBottom: 10
    },
    header: {
        fontFamily: "Comic-Sans, sans-serif",
        fontSize: 16,
        fontWeight: 700,
    },
    contentFirstPar: {
        fontFamily: "Comic-Sans, sans-serif",
        fontSize: 14,
        fontWeight: 400,
        color: 'gray',
        marginTop: 10,
        marginBottom: 30
    },
    contentSecondPar: {
        fontFamily: "Comic-Sans, sans-serif",
        fontSize: 14,
        fontWeight: 400,
        color: 'gray',
        marginTop: 10,
        marginBottom: 20
    },
    contentThirdPar: {
        fontFamily: "Comic-Sans, sans-serif",
        fontSize: 14,
        fontWeight: 400,
        color: 'gray',
        marginTop: 10,
        marginBottom: 20
    },
    bottomSecondBox: {
        flex: 1,
        width: '100%',
        height: '48%',
        left: 0,
        bottom: 0,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#49E8CC',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomFirstBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#B5ADFF',
        height: '48%',
        borderTopEndRadius: 30,
        paddingHorizontal: 20,
        borderTopStartRadius: 30,
        paddingTop:20,
        marginBottom:10
    },
    bottomHeader: {
        fontFamily: "Comic-Sans, sans-serif",
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 10,
    },




})

export default AppUiTemplate
