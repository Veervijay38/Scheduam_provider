import React, { useEffect } from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import { BackHandler, ProgressViewIOS, ToastAndroid } from 'react-native';
import Home from '../screens/Home/Home'
import SplashScreen from '../screens/SplashScreen'
import SignIn from '../screens/SignIn'
import ThankYou from '../screens/ThankYou'
import CompanyDetails from '../screens/CompanyDetails'
import SignupHomeScreen from '../screens/SignupHomeScreen'
import BankDetails from '../screens/BankDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProviderSignupScreen from '../screens/ProviderSignUpScreen';
import Availability from '../screens/MyProfile/Availability/Availability';
import MyProfile from '../screens/MyProfile/Profile/MyProfile';
import JobDetails from '../screens/Job/JobDetail/JobDetail';
import JobStarted from '../screens/Job/JobStarted/JobStarted';
import routes from '../helper/routes';
import ChatScreen from '../screens/Chat';
import CompleteJob from '../screens/Job/CompleteJob'
import Mytabs from '../screens/MyProfile';


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
    // const Stack = createStackNavigator()
    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        //         <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key={routes.SPLASH_SCREEN} component={SplashScreen} title="SplashScreen" initial />
                <Scene key={routes.PROVIDER_HOME} component={Home} title="Home" />
                <Scene key={routes.SIGNIN_SCREEN} component={SignIn} title="SignIn" />
                <Scene key={routes.Signup_Home} component={SignupHomeScreen} title="SignHomeScreen" />
                <Scene key={routes.Bank_Details} component={BankDetails} title="BankDetails" />
                <Scene key={routes.Company_Details} component={CompanyDetails} title="CompanyDetails" />
                <Scene key={routes.Thank_You} component={ThankYou} title="ThankYou" />
                <Scene key={routes.Provider_Signup} component={ProviderSignupScreen} title="ProviderSignupScreen" />
                <Scene key={routes.Top_Tab} component={Mytabs} hideNavBar />
                <Scene key={routes.MyProfile} component={MyProfile} hideNavBar />
                <Scene key={routes.Availability} component={Availability} hideNavBar />
                <Scene key={routes.Job_Details} component={JobDetails} title="JobDetails" />
                <Scene key={routes.Job_Started} component={JobStarted} title="JobStarted" />
                <Scene key={routes.Chat_Screen} component={ChatScreen} title="ChatScreen" />
                <Scene key={routes.Complete_Job} component={CompleteJob} title="CompleteJob" />
            </Scene>
        </Router>
    )

}
export default App
