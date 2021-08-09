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
import AllJobs from '../screens/Job/AllJobs/AllJobs';
import SettingScreen from '../screens/SettingsScreen/SettingsScreen';
import AuthNavigator from './auth.navigator';



var backCount = 0
const HomeNavigator = (props) => {




    // const Stack = createStackNavigator()
    const Drawer = createDrawerNavigator();
    return (



        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>

            {/* <Drawer.Screen name={routes.AUTH_NAVIGATOR} component={AuthNavigator}
                options={{ title: 'Home', iconType: IconType.FontAwesome5, iconName: 'home', headerShown: false }} /> */}

            <Drawer.Screen name={routes.Chat_Screen} component={ChatScreen}
                options={{ title: 'Chat', iconType: IconType.Ionicon, iconName: 'chatbubble-outline', headerShown: false }} />

            <Drawer.Screen name={routes.PARTNER_OFFERS} component={PartnerOffers}
                options={{ title: 'Messages', iconName: 'mail', iconType: IconType.Antdesign, headerShown: false }} />

            <Drawer.Screen name={routes.All_Jobs} component={AllJobs}
                options={{ title: 'Bookings', iconName: 'calendar-account', iconType: IconType.MaterialCommunity, headerShown: false }} />

            <Drawer.Screen name={routes.PARTNER_EARNING} component={PartnerEarning}
                options={{ title: 'Payment', iconName: 'credit-card', iconType: IconType.FontAwesome5, headerShown: false }} />

            <Drawer.Screen name={routes.HELP_SCREEN} component={HelpScreen}
                options={{ title: 'Help', iconName: 'question-circle-o', iconType: IconType.FontAwesome, headerShown: false }} />

            <Drawer.Screen name={routes.SETTING_SCREEN} component={SettingScreen}
                options={{ title: 'Settings', iconName: 'settings-sharp', iconType: IconType.Ionicon, headerShown: false }} />

            <Drawer.Screen name={routes.Top_Tab} component={Mytabs}
                options={{ title: 'My Profile', iconName: 'user-circle-o', iconType: IconType.FontAwesome, headerShown: false }} />

            <Drawer.Screen name={routes.LEGAL_SCREEN} component={LegalScreen}
                options={{ title: 'Legal', iconName: 'balance-scale', iconType: IconType.FontAwesome, headerShown: false }} />

        </Drawer.Navigator>


        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
        //         <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        //     </Stack.Navigator>
        // </NavigationContainer>

        // <Router>
        //     <Scene key="root" hideNavBar>
        //         <Scene key={routes.SPLASH_SCREEN} component={SplashScreen} title="SplashScreen" initial />
        //         <Scene key={routes.PROVIDER_HOME} component={Home} title="Home" initial />

        //         <Scene key={routes.SIGNIN_SCREEN} component={SignIn} title="SignIn" />
        //         <Scene key={routes.SIGNUP_SELECTION_SCREEN} component={SignupSelectionScreen} title="SignHomeScreen" />
        //         <Scene key={routes.PROVIDER_SIGNUP_SCREEN} component={ProviderSignUpScreen} title="SignHomeScreen" />
        //         <Scene key={routes.Company_Details} component={CompanyDetails} title="CompanyDetails" />

        //         <Scene key={routes.Availability} component={Availability} hideNavBar />
        //         <Scene key={routes.Bank_Details} component={BankDetails} title="BankDetails" />
        //         <Scene key={routes.Thank_You} component={ThankYou} title="ThankYou" />

        //         {/* <Scene key={routes.Provider_Signup} component={ProviderSignupScreen} title="ProviderSignupScreen" /> */}
        //         <Scene key={routes.Top_Tab} component={Mytabs} hideNavBar />
        //         <Scene key={routes.MyProfile} component={MyProfile} hideNavBar />

        //         <Scene key={routes.Chat_Screen} component={ChatScreen} title="ChatScreen" />
        //         <Scene key={routes.Job_Details} component={JobDetails} title="JobDetails" />
        //         <Scene key={routes.Job_Started} component={JobStarted} title="JobStarted" />
        //         <Scene key={routes.Complete_Job} component={CompleteJob} title="CompleteJob" />
        //         <Scene key={routes.JOB_HISTORY} component={JobHistory} title="Job History" />

        //         <Scene key={routes.PARTNER_EARNING} component={PartnerEarning} title="Partner Earning" />
        //         <Scene key={routes.HELP_SCREEN} component={LegalScreen} title="Legal" initial />
        //         <Scene key={routes.PARTNER_OFFERS} component={PartnerOffers} title="Partner Offers" />
        //         <Scene key={routes.PARTNER_OFFERS_DETAILS} component={PartnerOffersDetails} title="Partner Offers" />

        //     </Scene>
        // </Router>
    )

}
export default HomeNavigator
