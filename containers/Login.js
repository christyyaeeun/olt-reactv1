import {
    Authenticator,
    Flex,
    Grid,
    Image,
    useTheme,
    View
  } from "@aws-amplify/ui-react";
  
  import { Header } from "./Header";
  import { Footer } from "./Footer";
  import { SignInHeader } from "./SignInHeader";
  import { SignInFooter } from "./SignInFooter";
  import '../styles/style.css'


  const components = {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  };

  
  export function Login() {
    const { tokens } = useTheme();
  
    return (
      <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
        <Flex
          backgroundColor={tokens.colors.background.secondary}
          justifyContent="center"
        >
          <Authenticator components={components}>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user.username}</h1>
                <button className="my-button" onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
        </Flex>
        <View height="100vh">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/IMG_6506.JPG?alt=media&token=43744c33-88a9-4779-8b06-4d1755da9369"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </View>
      </Grid>
    );
  }
