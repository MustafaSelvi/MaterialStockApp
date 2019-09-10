import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MaterialList from './components/MaterialList';
import MaterialCreate from './components/MaterialCreate';
import MaterialUpdate from './components/MaterialUpdate';

const RouterComponent = () => {
    return(
     <Router>
        <Scene key="kimlik" titleStyle={{ textAlign: 'center', flex: 1 }}> 
            <Scene key="login" component={LoginForm} title="LaBucket" />
            <Scene 
            onRight={() => Actions.materialCreate()}
            rightTitle="New"
            key="materiallist" component={MaterialList} title="Material List"
            renderBackButton={()=><View/>}
            />
            <Scene key="materialCreate" component={MaterialCreate} title="Material Save" />
            <Scene key="materialUpdate" component={MaterialUpdate} title="Material Update" />
        </Scene>
     </Router>
    ); 
};

export default RouterComponent;