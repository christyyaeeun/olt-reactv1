import { Flex, Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center">
      <Image
        alt="logo"
        src="https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/oltIcon.svg?alt=media&token=984528b2-2244-4c3a-a5d0-8183aea83eff"
        padding={tokens.space.medium}
      />
    </Flex>
  );
}
