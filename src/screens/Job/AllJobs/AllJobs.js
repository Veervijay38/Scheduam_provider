import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Switch, Icon } from 'react-native-elements';
import { BaseScreen } from '../../../components';
import CustomHeaderWithBadge from '../../../components/Header/CustomHeaderWithBadge';
import { Color } from '../../../helper';
import { IconType } from '../../../helper/iconType';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { styles } from './AllJobs.styles'

const AllJobs = (props) => {
    return (
        <BaseScreen>
            <CustomHeaderWithBadge {...props} />
            <View style={styles.container}>
                <View style={styles.mainHeaderView} >
                    <Icon type={IconType.MaterialCommunity} name='briefcase-variant' size={25} color={Color.Black} />
                    <Text style={styles.mainHeaderText}>  All Jobs</Text>
                </View>


                <Calendar
                    // Initially visible month. Default = Date()
                    current={'2021-08-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    // minDate={'2021-08-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    // maxDate={'2012-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    // onDayPress={(day) => { console.log('selected day', day) }}
                    // Handler which gets executed on day long press. Default = undefined
                    // onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MMMM yyyy '}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    // onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false

                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(direction) => (
                        direction === 'left' ?
                            <Icon type={IconType.Antdesign} name='caretleft' size={25} color={Color.Black} />
                            :
                            <Icon type={IconType.Antdesign} name='caretright' size={25} color={Color.Black} />
                    )}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                    // firstDay={1}
                    // Hide day names. Default = false
                    // hideDayNames={true}
                    // Show week numbers to the left. Default = false
                    // showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    // onPressArrowLeft={subtractMonth => subtractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    // onPressArrowRight={addMonth => addMonth()}
                    // Disable left arrow. Default = false
                    disableArrowLeft={false}
                    // Disable right arrow. Default = false
                    disableArrowRight={false}
                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    disableAllTouchEventsForDisabledDays={true}
                    // Replace default month and year title with custom one. the function receive a date as parameter
                    // renderHeader={(date) => {/*Return JSX*/ }}
                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}
                    // Specify style for calendar container element. Default = {}
                    co
                    style={{

                        borderWidth: 1,
                        borderColor: Color.Black,
                        // height: 350
                    }}
                    // Specify theme properties to override specific styles for calendar parts. Default = {}
                    theme={{
                        backgroundColor: '#000000',
                        calendarBackground: '#FFFFFF',
                        textSectionTitleColor: '#000000',
                        textSectionTitleDisabledColor: '#000000',
                        selectedDayBackgroundColor: '#000000',
                        selectedDayTextColor: '#000000',
                        todayTextColor: '#000000',
                        dayTextColor: '#000000',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: "#000000",
                        indicatorColor: 'blue',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'monospace',
                        textDayHeaderFontFamily: 'monospace',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 25,
                        textMonthFontSize: 20,
                        textDayHeaderFontSize: 16,

                    }}
                />
                <ScrollView style={{ paddingVertical: 20, }} showsVerticalScrollIndicator={false}>
                    <View style={styles.jobDataView}>
                        <Text style={styles.jobTimeText}>8:00 am</Text>
                        <Text style={styles.jobCustText}>Customer 1</Text>
                        <Icon type={IconType.Antdesign} name='right' size={18} color={Color.mainOrange} />
                    </View>

                    <View style={styles.jobDataView}>
                        <Text style={styles.jobTimeText}>1:00 pm</Text>
                        <Text style={styles.jobCustText}>Customer 2</Text>
                        <Icon type={IconType.Antdesign} name='right' size={18} color={Color.mainOrange} />
                    </View>

                    <View style={styles.jobDataView}>
                        <Text style={styles.jobTimeText}>4:00 pm</Text>
                        <Text style={styles.jobCustText}>Customer 3</Text>
                        <Icon type={IconType.Antdesign} name='right' size={18} color={Color.mainOrange} />
                    </View>
                </ScrollView>
            </View>
        </BaseScreen>
    )
}
export default AllJobs