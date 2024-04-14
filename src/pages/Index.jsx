import React, { useState } from "react";
import { Box, Button, Checkbox, Heading, Stack, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [urls, setUrls] = useState(["https://example.com/page1", "https://example.com/page2", "https://example.com/page3", "https://example.com/page4", "https://example.com/page5"]);

  const [selectedUrls, setSelectedUrls] = useState([]);

  const handleUrlToggle = (url) => {
    if (selectedUrls.includes(url)) {
      setSelectedUrls(selectedUrls.filter((u) => u !== url));
    } else {
      setSelectedUrls([...selectedUrls, url]);
    }
  };

  const handleCommit = () => {
    console.log("Selected URLs:", selectedUrls);
    // Perform commit action with selected URLs
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Select URLs to Keep
      </Heading>
      <Stack spacing={4}>
        {urls.map((url, index) => (
          <Box key={url} borderWidth={2} borderRadius="md" p={4} borderColor={selectedUrls.includes(url) ? "green" : "red"}>
            <Checkbox isChecked={selectedUrls.includes(url)} onChange={() => handleUrlToggle(url)}>
              <Text fontSize="lg">{url}</Text>
            </Checkbox>
          </Box>
        ))}
      </Stack>
      <VStack mt={8} align="stretch">
        <Button colorScheme="green" onClick={handleCommit}>
          Commit
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
