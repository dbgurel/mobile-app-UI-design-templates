import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';

const HomeScreenTemplate = () => {

    const data = [
        {
            id: 1,
            title: 'Brainstorm',
        },
        {
            id: 2,
            title: 'Books',
        },
        {
            id: 3,
            title: 'Video',
        },
        {
            id: 4,
            title: 'Music',
        },
    ];

    const render = ({ item }) => {
        if (item.id == 1) {
            return (
                <View style={styles.categorySelectedItem}>
                    <TouchableOpacity>
                        <Text style={styles.categorySelectedItemText}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.categoryItem}>
                    <TouchableOpacity>
                        <Text style={styles.categoryItemText}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Choose what</Text>
                <Text style={styles.headerBoldTitle}>to learn today?</Text>
            </View>
            <View style={styles.categoryContainer}>
                <FlatList
                    data={data}
                    horizontal={true}
                    renderItem={render}
                    keyExtractor={(item) => item.id}></FlatList>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentBox}>
                    <Text style={styles.contentTitle}>Vocabulary</Text>
                    <Text style={styles.contentText}>Listen 20 new words</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.contentButton}>
                        <Text style={styles.contentButtonText}>Start </Text>
                        <Icon 
                        name="play"
                        type='antdesign' 
                        size={14} 
                        color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.recommendContainer}>
                <View style={styles.recommendHeader}>
                    <Text style={styles.recommendTitle}>Recommended</Text>
                </View>
                <View style={styles.recommendItem}>
                    <View style={styles.itemContent}>
                        <View style={styles.itemIconBoxChat}>
                            <Icon
                                name="md-chatbubble-ellipses-outline"
                                type='ionicon'
                                size={20}
                                color="white"
                            />
                        </View>
                        <View>
                            <Text style={styles.itemTitle}>Chatting</Text>
                            <Text style={styles.itemText}>5 minutes</Text>
                        </View>
                    </View>
                    <View>
                        <Icon
                            name="bookmark"
                            type='ionicon'
                            size={24}
                            color="black"
                            style={styles.itemBookmark}
                        />
                    </View>
                </View>
                <View style={styles.recommendItem}>
                    <View style={styles.itemContent}>
                        <View style={styles.itemIconBoxHeadSet}>
                            <Icon 
                            name="headset" 
                            type='ionicon'
                            size={20} 
                            color="white" />
                        </View>
                        <View>
                            <Text style={styles.itemTitle}>Listen</Text>
                            <Text style={styles.itemText}>2 minutes</Text>
                        </View>
                    </View>
                    <View>
                        <Icon
                            name="bookmark-outline"
                            type='ionicon'
                            size={24}
                            color="black"
                            style={styles.itemBookmark}
                        />
                    </View>
                </View>
                <View style={styles.recommendItem}>
                    <View style={styles.itemContent}>
                        <View style={styles.itemIconBoxMic}>
                            <Icon 
                            name="microphone" 
                            type='font-awesome'
                            size={18} 
                            color="white" />
                        </View>
                        <View>
                            <Text style={styles.itemTitle}>Speak</Text>
                            <Text style={styles.itemText}>3 minutes</Text>
                        </View>
                    </View>
                    <View>
                        <Icon
                            name="bookmark-outline"
                            type='ionicon'
                            size={24}
                            color="black"
                            style={styles.itemBookmark}
                        />
                    </View>
                </View>
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
        paddingLeft: 25,
    },
    headerContainer: {
        flex: 1,
        marginRight: 20,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 400,
    },
    headerBoldTitle: {
        fontSize: 32,
        fontWeight: 700,
    },
    categoryContainer: {
        flex: 1,

    },
    categorySelectedItem: {
        backgroundColor: 'rgb(34, 33, 41)',
        justifyContent: 'center',
        height: '70%',
        alignItems: 'center',
        borderRadius: 30,
        marginRight: 15,
    },
    categorySelectedItemText: {
        fontSize: 16,
        fontWeight: 700,
        color: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    categoryItem: {
        backgroundColor: 'rgb(249, 249, 249)',
        justifyContent: 'center',
        height: '60%',
        alignItems: 'center',
        borderRadius: 30,
        marginRight: 15,
    },
    categoryItemText: {
        fontSize: 16,
        fontWeight: 700,
        color: 'black',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    contentContainer: {
        flex: 1.8,
        backgroundColor: 'rgb(84, 70, 183)',
        borderRadius: 30,
        justifyContent: 'start',
        marginRight: 25,
    },
    contentBox: {
        paddingLeft: 20,
        justifyContent: 'center',
        height: '50%',
        marginBottom: 20,
    },
    contentTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 700,
        marginBottom: 10,
    },
    contentText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 300,
    },
    contentButton: {
        flexDirection: 'row',
        marginLeft: 20,
        justifyContent: 'start',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 10,
        backgroundColor: 'white',
        width: '30%',
        height: '100%',
        borderRadius: 15,
    },
    contentButtonText: {
        fontWeight: 500,
        marginRight: 5,
    },
    recommendContainer: {
        flex: 3,
        marginRight: 25,
    },
    recommendHeader: {
        height: '20%',
        justifyContent: 'center',
        // marginBottom:15
    },
    recommendTitle: {
        fontSize: 17,
        fontWeight: 700,
        paddingTop: 20,
    },
    recommendItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '22.3%',
        backgroundColor: 'rgb(249, 249, 249)',
        borderRadius: 20,
        marginTop: 15,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
    },
    itemIconBoxChat: {
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: 'rgb(238, 120, 108)',
        borderRadius: 15,
        marginLeft: 15,
    },
    itemIconBoxHeadSet: {
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: 'rgb(84, 70, 183)',
        borderRadius: 15,
        marginLeft: 15,
    },
    itemIconBoxMic: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 19,
        paddingRight: 19,
        backgroundColor: 'rgb(232, 145, 92)',
        borderRadius: 15,
        marginLeft: 15,
    },
    itemTitle: {
        paddingLeft: 20,
        fontWeight: 700,
    },
    itemText: {
        paddingLeft: 20,
        color: 'gray',
    },
    itemBookmark: {
        paddingRight: 20,
    },
});


export default HomeScreenTemplate
