// App.js or your navigation setup file
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './Screens/LoadingScreen';
import LoginScreen from './Screens/LoginScreen';
import FacultyHome from './Faculty/FacultyHome';
import EventsScreen from './Screens/EventsScreen';
import AttendanceScreen from './Screens/AttendanceScreen';
import ResultsScreen from './Screens/ResultsScreen';
import LibraryScreen from './Screens/LibraryScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AttendanceMkScreen from './Faculty/AttendanceMkScreen';
import AssignmentsScreen from './Faculty/AssignmentsScreen';
import TestScreen from './Screens/TestScreen';
import DummyScreen from './Screens/DummyScreen';
import AnnouncementsScreen from './Screens/AnnouncementsScreen';
import TrialScreen from './Screens/TrialScreen';
import BlankScreen from './Faculty/BlankScreen';
import ConductingQuizScreen from './Faculty/ConductingQuizScreen';
import GradingScreen from './Faculty/GradingScreen';
import FacultyProfileScreen from './Faculty/FacultyProfileScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Student Home' }}
        />
        <Stack.Screen
          name="FacultyHome"
          component={FacultyHome}
          options={{ title: 'Faculty Home' }}
        />
        <Stack.Screen
          name="EventsScreen"
          component={EventsScreen}
          options={{ title: 'Events' }}
        />
        <Stack.Screen
          name="AttendanceScreen"
          component={AttendanceScreen}
          options={{ title: 'Attendance' }}
        />
        <Stack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{ title: 'Results' }}
        />
        <Stack.Screen
          name="LibraryScreen"
          component={LibraryScreen}
          options={{ title: 'Library' }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="AttendanceMkScreen"
          component={AttendanceMkScreen}
          options={{ title: 'Attendance Marking' }}
        />
        <Stack.Screen
          name="AssignmentsScreen"
          component={AssignmentsScreen}
          options={{ title: 'Assignment' }}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{ title: 'Test' }}
        />
        <Stack.Screen
          name="DummyScreen"
          component={DummyScreen}
          options={{ title: 'Dummy' }}
        />
        <Stack.Screen
          name="AnnouncementsScreen"
          component={AnnouncementsScreen}
          options={{ title: 'Announcements' }}
        />
        <Stack.Screen
          name="TrialScreen"
          component={TrialScreen}
          options={{ title: 'Trial' }}
        />
        <Stack.Screen
          name="BlankScreen"
          component={BlankScreen}
          options={{ title: 'Blank' }}
        />
        <Stack.Screen
          name="ConductingQuizScreen"
          component={ConductingQuizScreen}
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen
        name="GradingScreen"
        component={GradingScreen}
        options={{ title: 'Grade' }}
      />
      <Stack.Screen
      name="FacultyProfileScreen"
      component={FacultyProfileScreen}
      options={{ title: 'Profile' }}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
