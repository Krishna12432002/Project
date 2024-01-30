import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

const AssignmentScreen = () => {
  const fileInputRef = useRef(null);
  const [showUploadButtons, setShowUploadButtons] = useState(false);

  const handleSelectFile = () => {
    // Trigger the file input programmatically
    fileInputRef.current.click();
  };

  const handleUploadFile = (event) => {
    // Implement file upload logic here
    const selectedFile = event.target.files[0];
    console.log('File selected:', selectedFile.name);
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

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleUploadFile}
      />

      {showUploadButtons && (
        <View style={{ marginBottom: 20 }}>
          <Button title="Select File" onPress={handleSelectFile} />
          {/* Upload button removed, as it is handled by the file input */}
        </View>
      )}

      <TouchableOpacity
        style={{
          marginBottom: 20,
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 5,
        }}
        onPress={handleViewPostedAssignment}
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
