import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Section1 from '../components/week3/Section1';
import Section2 from '../components/week3/Section2';
import Section3 from '../components/week3/Section3';

export default function Resort() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
                            <Text>Test</Text>   
                        <Section1/>
                        <Section2/>
                        <Section3/>
                        
            </View>
        </ScrollView>
    );
}
