import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { materialListData } from '../actions';
import ListItem from './ListItem';

class MaterialList extends Component {
    componentWillMount() {
        this.props.materialListData();
        this.createDataSource(this.props);

    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource({ materialArray }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(materialArray);
    }
    renderRow(material) {
        return <ListItem material={material} />;
    }
    render() {
        console.log(this.props.materialArray);  
    return(
        <View>
            <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        </View>
    );
  }
}

const mapStateToProps = ({ materialDataResponse }) => {
    const materialArray = _.map(materialDataResponse, (val, uid) => {
        return { ...val, uid }; //{name: 'flask',...}
    });
    return { materialArray };
};

export default connect(mapStateToProps, { materialListData })(MaterialList);