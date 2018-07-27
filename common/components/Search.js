import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Item, Input, Button, Text, Left,Body,Right } from 'native-base';
import Icon from './Icons'

export default class Search extends Component {
    /**
     *
     * 搜索模块
     * @returns
     * @memberof Search
     */
    render() {
        return (
            
            <View>
                <Header style={styles.searchHeader}>
                    <Left >
                        <Item rounded style={styles.left}>
                            <Icon name={"search"} color={'#2dcf8e'} size={20} style={{}}/>
                            <Input placeholder="热门搜索"  />
                        </Item>
                    </Left>
                   
                    <Right>
                        <Icon name={"gerenzhongxin"} color={'#2dcf8e'} size={20} />
                        <Text style={{width:10}}></Text>
                        <Icon name={"book-copy-copy-copy-copy"} color={'#2dcf8e'} size={20} />
                    </Right>
                </Header>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchHeader:{
        backgroundColor:"white"
    },
    left:{
        height:25,
        width:260,
        borderColor:'#2dcf8e',
        padding:2,
        paddingLeft:4,
        paddingRight:4,
    }
})