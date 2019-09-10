import React, { Component } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { materialChange, materialUpdate, materialDelete } from '../actions/MaterialActions'

class MaterialUpdate extends Component { 
    state = { name: '', count: '', room: '', cabinet: '', shelf: '', lab: '' };
    componentWillMount() {
        const { name,count,room,cabinet,shelf,lab
        } = this.props.madde;

        this.setState({ name,count,room,cabinet,shelf,lab });
    }
    clickUpdate() {
        const { name,count,room,cabinet,shelf,lab
        } = this.state;

        this.props.materialUpdate({ name, count, room, cabinet, shelf, lab, uid: this.props.madde.uid });
    }
    clickDelete() {
        this.props.materialDelete({ uid: this.props.madde.uid });
    }
    renderButton() {
        if (!this.props.loadingUpdate) {
            return <Button onPress={this.clickUpdate.bind(this)}> Update </Button>
        }
        return <Spinner size='small' />;
    }
    renderDeleteButton() {
        if (!this.props.loadingDelete) {
            return <Button onPress={this.clickDelete.bind(this)}> Delete </Button>
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
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            />
            </CardSection>

            <CardSection>
            <TextInput
            placeholder="Count"
            style={inputStyle}
            value={this.state.count}
            onChangeText={count => this.setState({ count })}
            />
            </CardSection>

            <CardSection>
            <TextInput
            placeholder="Room"
            style={inputStyle}
            value={this.state.room}
            onChangeText={room => this.setState({ room })}
            />
            </CardSection>

            <CardSection>
            <TextInput
            placeholder="Cabinet"
            style={inputStyle}
            value={this.state.cabinet}
            onChangeText={cabinet => this.setState({ cabinet })}
            />
            </CardSection>

            <CardSection>
            <TextInput
            placeholder="Shelf"
            style={inputStyle}
            value={this.state.shelf}
            onChangeText={shelf => this.setState({ shelf })}
            />
            </CardSection>

            <CardSection>
                <Text>Lab</Text>
                <Picker
                style={{ flex: 1}}
                 selectedValue={this.state.lab}
                 onValueChange={lab => this.setState({ lab })}
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

            <CardSection>
             { this.renderDeleteButton()}
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
const mapToStateProps = ({ materialUpdateResponse }) => {
    const { loadingUpdate, loadingDelete } = materialUpdateResponse;

    return { loadingUpdate, loadingDelete };
};
export default connect(mapToStateProps, { materialChange, materialUpdate, materialDelete })(MaterialUpdate);