import React, { useEffect } from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import { BackHandler, ToastAndroid } from 'react-native';
import Home from '../screens/Home/Home'


var backCount = 0
const App = (props) => {
    useEffect(() => {
        BackHandler.addEventListener('backPress', handleBackPress);
    })

    function handleBackPress() {
        console.log('current scene--', Actions.currentScene)
        if (Actions.currentScene == 'Home') {
            backCount += 1;
            if ((backCount < 2)) {
                ToastAndroid.show('Press again to Exit App!', ToastAndroid.SHORT);
                setTimeout(() => {
                    backCount = 0;
                }, 2000);
                return true
            } else {
                BackHandler.exitApp();
                return true
            }
        }
    }
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="Home" component={Home} title="Home" initial />
            </Scene>
        </Router>
    )

}
export default App
