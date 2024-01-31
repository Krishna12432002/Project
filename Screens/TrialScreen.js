<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const AssignmentScreen = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [assignmentFile, setAssignmentFile] = useState(null);

  useEffect(() => {
    // Fetch faculty-uploaded files from the server
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    fetch('YOUR_API_ENDPOINT/faculty/uploads')
      .then((response) => response.json())
      .then((data) => {
        // Set the uploaded files and select the first file as the default assignment
        setUploadedFiles(data);
        if (data.length > 0) {
          setSelectedFile(data[0]);
        }
      })
      .catch((error) => {
        console.error('Error fetching uploaded files:', error);
      });
  }, []);

  const handleSelectFile = (file) => {
    setSelectedFile(file);
  };

  const handleUploadAssignment = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });

      if (result.type === 'success') {
        console.log(result.uri, result.type, result.name, result.size);

        setAssignmentFile(result);
      } else {
        console.log('Document picker cancelled');
      }
    } catch (err) {
      console.error('Error picking document:', err);
    }
=======
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
>>>>>>> 0bc82be3bfde2b11ea7e720b881c9f40884d757c
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<<<<<<< HEAD
      <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Faculty Uploaded Files
        </Text>

        <FlatList
          data={uploadedFiles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectFile(item)}>
              <Image
                source={{ uri: item.url }}
                style={{ width: 100, height: 100, margin: 5 }}
              />
            </TouchableOpacity>
          )}
          horizontal
        />

        {selectedFile && (
          <View style={{ marginTop: 10 }}> {/* Reduced marginTop value */}
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Selected File: {selectedFile.name}
            </Text>
            <Image source={{ uri: selectedFile.url }} style={{ width: 200, height: 200 }} />
          </View>
        )}
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Upload Your Assignment
        </Text>
        <Button title="Select Assignment File" onPress={handleUploadAssignment} />
        <Button title="Upload Assignment" onPress={() => { /* Implement upload logic */ }} />
      </View>
=======
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
>>>>>>> 0bc82be3bfde2b11ea7e720b881c9f40884d757c
    </View>
  );
};

<<<<<<< HEAD
export default AssignmentScreen;
=======
export default AssignmentScreen;
>>>>>>> 0bc82be3bfde2b11ea7e720b881c9f40884d757c
