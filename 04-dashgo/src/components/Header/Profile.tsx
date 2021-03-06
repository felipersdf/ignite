import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Rodrigues</Text>
          <Text color="gray.300" fontSize="small">
            felipe@email.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Felipe Rodrigues"
        src="https://github.com/felipersdf.png"
      />
    </Flex>
  );
}
