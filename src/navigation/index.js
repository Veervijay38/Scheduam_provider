import React, { useEffect } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import { Actions, Router, Scene } from 'react-native-router-flux';
import routes from '../helper/routes';
import BankDetails from '../screens/BankDetails';
import ChatScreen from '../screens/Chat';
import CompanyDetails from '../screens/CompanyDetails';
import HelpScreen from '../screens/Help/HelpScreen';
import Home from '../screens/Home/Home';
import CompleteJob from '../screens/Job/CompleteJob';
import JobDetails from '../screens/Job/JobDetail/JobDetail';
import JobHistory from '../screens/Job/JobHistory/JobHistory';
import JobStarted from '../screens/Job/JobStarted/JobStarted';
import LegalScreen from '../screens/Legal/LegalScreen';
import Mytabs from '../screens/MyProfile';
import Availability from '../screens/MyProfile/Availability/Availability';
import MyProfile from '../screens/MyProfile/Profile/MyProfile';
import PartnerEarning from '../screens/PartnerEarning/PartnerEarning';
import PartnerOffers from '../screens/PartnerOffers/PartnerOffers';
import PartnerOffersDetails from '../screens/PartnerOffers/PartnerOffersDetails/PartnerOffersDetails';
import ProviderSignUpScreen from '../screens/ProviderSignUpScreen';
import SignIn from '../screens/SignIn';
import SignupSelectionScreen from '../screens/SignupSelectionScreen';
import SplashScreen from '../screens/SplashScreen';
import ThankYou from '../screens/ThankYou';
import DrawerContent from './DrawerContent/DrawerContent';
import { IconType } from '../helper/iconType';
import HomeNavigator from './home.navigator';
import SettingScreen from '../screens/SettingsScreen/SettingsScreen';
import AllJobs from '../screens/Job/AllJobs/AllJobs';
import AuthNavigator from './auth.navigator';



var backCount = 0
const App = (props) => {
    useEffect(() => {
        // BackHandler.addEventListener('backPress', handleBackPress);
    })

    // function handleBackPress() {
    //     console.log('current scene--', Actions.currentScene)
    //     if (Actions.currentScene == 'Home') {
    //         backCount += 1;
    //         if ((backCount < 2)) {
    //             ToastAndroid.show('Press again to Exit App!', ToastAndroid.SHORT);
    //             setTimeout(() => {
    //                 backCount = 0;
    //             }, 2000);
    //             return true
    //         } else {
    //             BackHandler.exitApp();
    //             return true
    //         }
    //     }
    // }

    const Stack = createStackNavigator()
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>

                <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
                <Stack.Screen name={routes.SIGNIN_SCREEN} component={SignIn} />
                <Stack.Screen name={routes.SIGNUP_SELECTION_SCREEN} component={SignupSelectionScreen} />

                <Stack.Screen name={routes.PROVIDER_SIGNUP_SCREEN} component={ProviderSignUpScreen} />
                <Stack.Screen name={routes.Company_Details} component={CompanyDetails} />
                <Stack.Screen name={routes.Availability} component={Availability} />

                <Stack.Screen name={routes.Bank_Details} component={BankDetails} />
                <Stack.Screen name={routes.Thank_You} component={ThankYou} />

                <Stack.Screen name={routes.AUTH_NAVIGATOR} component={AuthNavigator} options={{ headerShown: false }} />
                <Stack.Screen name={routes.HOME_NAVIGATOR} component={HomeNavigator} options={{ headerShown: false }} />

                {/* <Stack.Screen name={routes.Chat_Screen} component={ChatScreen} /> */}
                <Stack.Screen name={routes.PARTNER_OFFERS_DETAILS} component={PartnerOffersDetails} />
            </Stack.Navigator>


        </NavigationContainer>



    )

}
export default App
