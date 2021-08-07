import { NativeBaseProvider } from "native-base";
import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "react-native-elements";
import { BaseScreen } from '../../components';
import StarRating from 'react-native-star-rating';
import { Color } from "../../helper";
import { IconType } from "../../helper/iconType";
import { styles } from './CompleteJob.styles';
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import CustomHeaderWithBadge from "../../components/Header/CustomHeaderWithBadge";
import routes from "../../helper/routes";





const CompleteJob = (props) => {
    const navigation = props.navigation;
    console.log('100 14 Job Detail Props ==>', props.Data)
    const [ratingStar, setRatingStar] = useState(0)



    return (

        <BaseScreen>
            <CustomHeaderWithBadge />
            <View style={styles.container}>


                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 15 }}>
                    <View style={styles.backHeaderContainer} >
                        <View style={styles.backHeaderBox}>
                            <Icon onPress={() => navigation.goBack()} type={IconType.Material} name='arrow-back-ios' size={24} color={Color.Black}
                            />
                            <Text style={styles.backHeaderText}>Back</Text>
                        </View>
                        <View style={styles.totalHoursBox}>
                            <Text style={styles.totalHoursText}>3.5 hours</Text>
                            <Text style={styles.totalHoursText}>3000</Text>
                        </View>

                    </View>
                    <Text style={styles.wellDoneText}>Well done, job completed!</Text>

                    <View style={styles.jobTimeBox}>
                        <Icon type={IconType.FontAwesome} name='clock-o' size={24} color={Color.White} />
                        <Text style={styles.jobTimeText}>Job started 1 July 2021, 0.:59 am</Text>
                    </View>

                    <View style={styles.jobTimeBox}>
                        <Icon type={IconType.FontAwesome5} name='check-circle' size={24} color={Color.White} />
                        <Text style={styles.jobTimeText}>Job completed 1J uly 2021, 0.:59 am</Text>
                    </View>

                    <View style={{ paddingHorizontal: 10, }}>
                        <Text style={styles.rateCustomerText}>Rate the customer</Text>

                        <View style={styles.expAndRatingBox}>

                            <Text style={styles.expText}>Your experience</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={ratingStar}
                                    selectedStar={(rating) => setRatingStar(rating)}
                                    starStyle={Color.Black}
                                />

                            </View>

                        </View>
                        <Text style={styles.expDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

                        <Text style={styles.commentText}>Comments</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            multiline={true}
                            // value={email}
                            // onChangeText={(email) => setEmail(email.trim())}
                            autoCapitalize='none'
                            returnKeyType='next'
                        />
                        <View style={styles.continueBtnView}>
                            <TouchableOpacity
                                style={styles.continueButton}
                                onPress={() => navigation.navigate(routes.PROVIDER_HOME)}>
                                <Text style={styles.continueButtonText}>Submit </Text>
                                <Icon type={IconType.Antdesign} name='right' size={18} color={Color.White} />
                            </TouchableOpacity>

                        </View>
                        {/* <View style={{ justifyContent: 'center', marginVertical: '5%', marginLeft: '0%', alignItems: 'flex-end' }}>
                            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('CompanyDetails')}>
                                <Text style={styles.buttonText}>Submit</Text>
                                <Icon type={IconType.Material} name='arrow-forward-ios' size={15} color={Color.White} style={{ marginLeft: 15, marginRight: 10 }} />
                            </TouchableOpacity>

                        </View> */}
                    </View>
                </ScrollView>




            </View>
        </BaseScreen>

    )
}



export default CompleteJob;