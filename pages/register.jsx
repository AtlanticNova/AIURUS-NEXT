import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Group,
  SimpleGrid,
  Box,
  Stack,
  Image,
  Container
} from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#00A3FF'
  },

  form: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    height: '100vh',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function RegisterPage() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={0}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: "100vh",
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              color: 'white',
              height: '100%',
              paddingInline: 46
            }}
          >
            <Stack
              spacing={4}
              style={{
                maxWidth: 400,
              }}
            >
              <Text style={{ fontSize: 64, lineHeight: 1 }}>Welcome To</Text>
              <Text style={{ fontSize: 128, fontWeight: 700, lineHeight: 1 }}>AI.URUS</Text>
            </Stack>
            <Text style={{ fontSize: 48 }}>A place where you can manage you or your following affairs...</Text>
          </div>

          <Image
            src="/assets/Pattern.svg"
            width="100%"
            mt="auto"
          />
        </div>
        <Paper className={classes.form} radius={0}>
          <Container style={{
            display: 'grid',
            height: '100vh',
            placeItems: 'center'
          }}>
            <div
              style={{
                width: 'min(550px, 100%)',
                marginInline: 'auto'
              }}
            >
              <Title order={2} mb="lg" align="center">REGISTER ACCOUNT</Title>
              <TextInput label="Username" placeholder="username" size="md" required />
              <Text size="sm" color="dimmed">Input a valid email address</Text>
              <TextInput label="Email address" placeholder="hello@gmail.com" mt="md" size="md" required />
              <Text size="sm" color="dimmed">Username must unique</Text>
              <PasswordInput label="Password" placeholder="password" mt="md" size="md" required />
              <Text size="sm" color="dimmed">Password must contain at least 8 characters including an uppercase letter, a symbol, and a number</Text>
              <PasswordInput label="Repeat Password" placeholder="repeat password" mt="md" size="md" required />
              <Button fullWidth mt="xl" size="md" >
                Register
              </Button>

              <Text align="center" mt="md">
                Already have an account?{' '}
                <Link href="/login" passHref>
                <Anchor weight={700}>
                  Login
                </Anchor>
                </Link>
              </Text>
            </div>
          </Container>

        </Paper>
      </SimpleGrid>
    </div>
  );
}