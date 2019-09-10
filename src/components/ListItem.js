import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../ortak';

class ListItem extends Component {

    materialClick() {
        Actions.materialUpdate({ madde: this.props.material });
    }
    
    render() {
        const { name, count } = this.props.material;
        return (
            <TouchableWithoutFeedback onPress={this.materialClick.bind(this)}>
            <View>
                <CardSection>
                    <Text>
                      {name} {count}   
                    </Text>
                </CardSection>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ListItem;