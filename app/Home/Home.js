import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight, Platform } from 'react-native';
import Search from '../../common/components/Search';
import ListIconExample from '../../common/components/ListIconExample'
import ListDividerExample from './HomeList'




export default class SearchBarExample extends Component {
    render() {
        var data = [
            { title: 'Title Text', key: 'item1' },
            { title: 'Title Text', key: 'item2' },
            { title: 'Title Text', key: 'item3' }, 
            { title: 'Title Text', key: 'item4' }
        ]
        return (
            <View style={styles.container}>
                <Search></Search>
                <FlatList
                    ItemSeparatorComponent={Platform.OS !== 'android' && (({ highlighted }) => (
                        <View style={[style.separator, highlighted && { marginLeft: 0 }]} />
                    ))}
                    data={[{ title: 'Title Text', key: 'item1' }]}
                    renderItem={({ item, separators }) => (
                        <TouchableHighlight
                            onPress={() => this._onPress(item)}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={{ backgroundColor: 'white' }}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                />
                {/* <ListDividerExample></ListDividerExample> */}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})