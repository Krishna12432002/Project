// AssignmentQuizScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

const AssignmentQuizScreen = () => {
  const handleViewAssignmentButtonClick = () => {
    // You can implement logic to view the assignment content
    alert('Implement logic to view assignment content.');
  };

  const handleQuizButtonClick = () => {
    // Open the Google Form link in the default browser
    const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLScU7RvxdH4qgOo0FuyW8GsaujIdIEtzEEG6nUE0eJmt4wZGdw/viewform?usp=sf_link';
    Linking.openURL(googleFormLink);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Assignment Buttons */}
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            marginRight: 10,
            padding: 10,
            backgroundColor: 'green',
            borderRadius: 5,
          }}
          onPress={handleViewAssignmentButtonClick}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
            View Assignment
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: 'purple',
            borderRadius: 5,
          }}
          onPress={handleViewAssignmentButtonClick}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
            Upload Assignment
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quiz Button */}
      <TouchableOpacity
        style={{
          marginBottom: 20,
          padding: 10,
          backgroundColor: 'purple',
          borderRadius: 5,
        }}
        onPress={handleQuizButtonClick}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AssignmentQuizScreen;
