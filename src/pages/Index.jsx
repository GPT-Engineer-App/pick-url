import React, { useState, useEffect } from "react";
import { Box, Button, Checkbox, Heading, Stack, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [urls, setUrls] = useState(["https://example.com/page1", "https://example.com/page2", "https://example.com/page3", "https://example.com/page4", "https://example.com/page5"]);

  const [selectedUrls, setSelectedUrls] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      } else if (event.key === "ArrowDown") {
        setFocusedIndex((prevIndex) => (prevIndex < urls.length - 1 ? prevIndex + 1 : prevIndex));
      } else if (event.key === " ") {
        handleUrlToggle(urls[focusedIndex]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [focusedIndex, urls]);

  return (
    <Box p={4} bg="darkBg" color="lightText">
      <Heading as="h1" size="xl" mb={4}>
        Select URLs to Keep
      </Heading>
      <Stack spacing={4}>
        {urls.map((url, index) => (
          <Box key={url} borderWidth={2} borderRadius="md" p={4} bg={index === focusedIndex ? "gray.700" : "white"} color={index === focusedIndex ? "lightText" : "black"} borderColor={selectedUrls.includes(url) ? "green" : "red"}>
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
