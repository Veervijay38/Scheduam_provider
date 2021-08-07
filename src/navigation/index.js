import React, { useEffect } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import routes from '../helper/routes';
import BankDetails from '../screens/BankDetails';
import ChatScreen from '../screens/Chat';
import CompanyDetails from '../screens/CompanyDetails';
import Home from '../screens/Home/Home';
import CompleteJob from '../screens/Job/CompleteJob';
import JobDetails from '../screens/Job/JobDetail/JobDetail';
import JobHistory from '../screens/Job/JobHistory/JobHistory';
import JobStarted from '../screens/Job/JobStarted/JobStarted';
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
                <Scene key={routes.PROVIDER_HOME} component={Home} title="Home" initial />

                <Scene key={routes.SIGNIN_SCREEN} component={SignIn} title="SignIn" />
                <Scene key={routes.SIGNUP_SELECTION_SCREEN} component={SignupSelectionScreen} title="SignHomeScreen" />
                <Scene key={routes.PROVIDER_SIGNUP_SCREEN} component={ProviderSignUpScreen} title="SignHomeScreen" />
                <Scene key={routes.Company_Details} component={CompanyDetails} title="CompanyDetails" />

                <Scene key={routes.Availability} component={Availability} hideNavBar />
                <Scene key={routes.Bank_Details} component={BankDetails} title="BankDetails" />
                <Scene key={routes.Thank_You} component={ThankYou} title="ThankYou" />

                {/* <Scene key={routes.Provider_Signup} component={ProviderSignupScreen} title="ProviderSignupScreen" /> */}
                <Scene key={routes.Top_Tab} component={Mytabs} hideNavBar />
                <Scene key={routes.MyProfile} component={MyProfile} hideNavBar />

                <Scene key={routes.Chat_Screen} component={ChatScreen} title="ChatScreen" />
                <Scene key={routes.Job_Details} component={JobDetails} title="JobDetails" />
                <Scene key={routes.Job_Started} component={JobStarted} title="JobStarted" />
                <Scene key={routes.Complete_Job} component={CompleteJob} title="CompleteJob" />
                <Scene key={routes.JOB_HISTORY} component={JobHistory} title="Job History" />

                <Scene key={routes.PARTNER_EARNING} component={PartnerEarning} title="Partner Earning" />
                <Scene key={routes.PARTNER_OFFERS} component={PartnerOffers} title="Partner Offers" initial />
                <Scene key={routes.PARTNER_OFFERS_DETAILS} component={PartnerOffersDetails} title="Partner Offers" />

            </Scene>
        </Router>
    )

}
export default App
