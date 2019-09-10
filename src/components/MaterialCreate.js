import React, { Component } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { materialChange, materialCreate } from '../actions/MaterialActions'

class MaterialCreate extends Component { 
    clickSave() {
        const { name,count,room,cabinet,shelf,lab
        } = this.props;

        this.props.materialCreate({ name, count, room, cabinet, shelf, lab });
    }
    renderButton() {
        if (!this.props.loading) {
            return <Button onPress={this.clickSave.bind(this)}> Save </Button>
        }
        return <Spinner size='small' />;
    }
    render() {
        console.log('gelen data'+this.props.madde);
        const { inputStyle } = styles;
        return(
            <Card>
            <CardSection>
            <TextInput
            placeholder="Name"
            style={inputStyle}
            value={this.props.name}
            onChangeText={name => this.props.materialChange({ props: 'name', value: name })}
            />
            </CardSection>

            <CardSection>
            <TextInput
            placeholder="Count"
            style={inputStyle}
            value={this.props.count}
            onChangeText={count => this.props.materialChange({ props: 'count', value: count })}
            />
            </CardSection>

            <CardSection>
            <TextInput
            placeholder="Room"
            style={inputStyle}
            value={this.props.room}
            onChangeText={room => this.props.materialChange({ props: 'room', value: room })}
            />
            </CardSection>

            <CardSection>
            <TextInput
            placeholder="Cabinet"
            style={inputStyle}
            value={this.props.cabinet}
            onChangeText={cabinet => this.props.materialChange({ props: 'cabinet', value: cabinet })}
            />
            </CardSection>

            <CardSection>
            <TextInput
            placeholder="Shelf"
            style={inputStyle}
            value={this.props.shelf}
            onChangeText={shelf => this.props.materialChange({ props: 'shelf', value: shelf })}
            />
            </CardSection>

            <CardSection>
                <Text>Lab</Text>
                <Picker
                style={{ flex: 1}}
                 selectedValue={this.props.lab}
                 onValueChange={lab => this.props.materialChange({ props: 'lab', value: lab })}
                >
                <Picker.Item label="A lab" value="alab" />
                <Picker.Item label="B lab" value="blab" />
                <Picker.Item label="C lab" value="clab" />
                <Picker.Item label="D lab" value="dlab" />
                </Picker>
            </CardSection>

            <CardSection>
             { this.renderButton()}
            </CardSection>

            </Card>
        );
    }
}

const styles = {
    inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1
  },

};
const mapToStateProps = ({ materialListResponse }) => {
    const { name,
        count,
        room,
        cabinet,
        shelf,
        lab,
        loading
    } = materialListResponse;

    return {name,
        count,
        room,
        cabinet,
        shelf,
        lab,
        loading
    };
};
export default connect(mapToStateProps, { materialChange, materialCreate })(MaterialCreate);