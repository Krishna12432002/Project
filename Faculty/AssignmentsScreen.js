import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

const AssignmentScreen = () => {
  const [showUploadButtons, setShowUploadButtons] = useState(false);

  const handleSelectFile = () => {
    // Implement file selection logic here
    console.log('File selected');
  };

  const handleUploadFile = () => {
    // Implement file upload logic here
    console.log('File uploaded');
  };

  const handleViewPostedAssignment = () => {
    // Implement logic to view posted assignments
    console.log('View posted assignments');
  };

  const handleUploadAssignmentPress = () => {
    setShowUploadButtons(!showUploadButtons);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{
          marginBottom: 20,
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
        }}
        onPress={handleUploadAssignmentPress}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Upload Assignment
        </Text>
      </TouchableOpacity>

      {showUploadButtons && (
        <View style={{ marginBottom: 20 }}>
          <Button title="Select File" onPress={handleSelectFile} />
          <Button title="Upload File" onPress={handleUploadFile} />
        </View>
      )}

      <TouchableOpacity
        style={{
          marginBottom: 20,
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Posted Assignments
        </Text>
      </TouchableOpacity>

      {/* Add the content for the "Posted Assignments" section */}
      {/* For example, you can include the logic to view posted assignments here */}
    </View>
  );
};

export default AssignmentScreen;
