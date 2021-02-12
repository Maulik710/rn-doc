import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import translate from 'translate-google-api';

const array = [{ 'id': 'data' }, { 'id': 'data' }, { 'id': 'data' }]
const promises = []
const Home = async () => {
    await array.map(async (item) => {
        let promise = new Promise(async (resolve, reject) => {
            try {
                const result = await translate(item.id, {
                    tld: "cn",
                    to: "vi",
                });
                resolve(result)
            } catch (err) {
                console.log('Error: ', err)
            }
        })
        promises.push(promise)
    })
    Promise.all(promises).then((values) => {
        console.log('Final Data: ', values) // you eill get main array of data here
    }).catch(err => {
        console.error(err);
    })
    return (
        <View style={styles.main}>
            {/* {array.map((item) => {
                return (
                    <Text>{item.id}</Text>
                )
            })} */}
            <Text>demo</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FCF3CF',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
