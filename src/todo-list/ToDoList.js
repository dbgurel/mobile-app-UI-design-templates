import React, { useState } from 'react'
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const ToDoList = () => {

    const [mainList, setMainList] = useState([])
    const [input, setInput] = useState('')
    const [id, setId] = useState(1)

    const renderItem = ({ item, index }) => {
        if (index <= 4) {
            return (
                <View style={styles.listContainer}>
                    <Text style={styles.text}>{index+1}.  {item.name}</Text>
                    <Button title='Delete' onPress={() => deleteItem(item.id)} style={styles.deleteButton} />
                </View>
            )
        }
        else if (index > 4) {
            return (
                <View>
                    <View style={styles.listContainer} >
                        <Text style={styles.redText}>{index+1}.  {item.name}</Text>
                        <Button title='Delete' onPress={() => deleteItem(item.id)} style={styles.deleteButton} />
                    </View>
                </View>
            )
        }

    }

    const addToList = () => {
        if (mainList.length <= 9) {
            setMainList([...mainList, { name: input, id: id }])
            setId(id + 1)
            // console.log(mainList);
            // console.log(mainList.length);
            // console.log(id);
            setInput('')
        }
        else {
            alert('Maksimum liste eleman sayısına ulaştınız...')
            // console.log(mainList);
        }
    }

    const deleteItem = (id) => {
        let filteredList = mainList.filter(q => q.id != id)
        setMainList(filteredList)
        // console.log(mainList);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>To Do List </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Add..'
                    value={input}
                    style={styles.input}
                    onChangeText={(e) => setInput(e)} />
                <Button title='Add to the list' onPress={() => addToList()} buttonStyle={styles.button} />

            </View>

            <FlatList
                data={mainList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            ></FlatList>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 30,
        flex: 1,

    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: '25%',
        alignItems: 'center'

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        borderWidth: 2,
        borderRadius: 8,
        width: '100%',
        padding: 5,
        borderColor: 'gray',
        marginVertical: 20,
    },
    button: {
        width: 150,
        backgroundColor: '#359AFF',
        borderRadius: 8,
        marginVertical: 20,
        marginLeft: 20
    },
    text: {
        overflow:'hidden'

    },
    redText: {
        color: 'tomato',
        overflow:'hidden'

    },
    deleteButton: {

        backgroundColor: '#359AFF',
        borderRadius: 8,
        padding: 2
    },
    header: {
        fontSize: 44,
        marginVertical: 20

    }

})

export default ToDoList
