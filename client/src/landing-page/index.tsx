import {
  Anchor,
  Box,
  Button,
  Container,
  CopyButton,
  Group,
  Input,
  MantineTheme,
  Text,
  Title,
} from '@mantine/core';
import { TWT_REGISTER } from 'constants/api';
import { DHRJ_GITHUB, DHRJ_TWITTER, GITHUB_REPO } from 'constants/links';
import { BASE, CHAT_PLACE, TWT_PROFILES } from 'constants/routes';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { AtSign, Twitter } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { UserAvatar } from 'user-avatar';
import { userUserCtx } from 'user-ctx';

export function LandingPage() {
  const user = userUserCtx();
  const navigate = useNavigate();

  const handleRegister = () => {
    window.open(TWT_REGISTER, '_self');
  };

  return (
    <Container
      sx={() => ({
        display: 'grid',
        minHeight: '500px',
        height: '100vh',
        gridTemplateRows: 'max-content minmax(300px, 1fr) max-content',
      })}
    >
      <Box
        component="header"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          component={Link}
          sx={() => ({ fontSize: '60px', hover: { textDecoration: 'none' } })}
          to="/"
        >
          🕊
        </Text>
        {!user ? (
          <Button radius="xs" onClick={handleRegister} size="sm">
            Register
          </Button>
        ) : (
          <UserAvatar />
        )}
      </Box>
      <Box component="main" sx={{ alignSelf: 'center', paddingBottom: '4rem' }}>
        <Title
          align="center"
          order={1}
          sx={() => ({
            fontSize: '1.5rem',
            marginBottom: '3rem',
            letterSpacing: '1px',
          })}
        >
          Send Someone a Secret <br></br> Message
        </Title>
        <Formik
          initialValues={{ username: '' }}
          validate={(values) => {
            const errors: { username?: string } = {};
            if (!values.username) {
              errors.username = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            navigate(`${TWT_PROFILES}/${values.username}`);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={Input}
                sx={(theme: MantineTheme) => ({
                  maxWidth: 600,
                  margin: 'auto',
                  marginBottom: theme.spacing.sm,
                })}
                name="username"
                icon={<AtSign />}
                size="lg"
                placeholder="Enter the twitter username"
                rightSectionWidth={100}
                rightSection={
                  <Button
                    disabled={isSubmitting}
                    size="xs"
                    type="submit"
                    variant="light"
                    onClick={() => {}}
                  >
                    Submit
                  </Button>
                }
              />
            </Form>
          )}
        </Formik>
        <Group position="center" spacing="xs">
          <Button
            onClick={() => {
              navigate(CHAT_PLACE);
            }}
            compact
            size="sm"
            variant="subtle"
          >
            Go to Chat
          </Button>

          {user && (
            <Button
              compact
              component="a"
              size="sm"
              variant="subtle"
              href={`http://twitter.com/${user?.tUsername}`}
              target="_blank"
            >
              <Twitter fill="currentColor" size={16} />
              &nbsp;{user?.tUsername}
            </Button>
          )}
          <CopyButton timeout={20000} value={`${BASE}${TWT_PROFILES}/${user?.tUsername}`}>
            {({ copied, copy }) => (
              <Button
                compact
                size="sm"
                onClick={copy}
                color={copied ? 'green' : ''}
                variant={copied ? 'light' : 'subtle'}
              >
                Copy Chat Link
              </Button>
            )}
          </CopyButton>
          <Button
            component="a"
            href={GITHUB_REPO}
            target="_blank"
            compact
            size="sm"
            variant="subtle"
          >
            Github Repo
          </Button>
        </Group>
      </Box>
      <Box component="footer" sx={{ alignSelf: 'flex-end', padding: '2rem' }}>
        <Text align="center">Made with ❤️ by Dhiraj</Text>
        <Text align="center">
          <Anchor href={DHRJ_TWITTER} target="_blank">
            Twitter{' '}
          </Anchor>
          &#183;
          <Anchor href={DHRJ_GITHUB} target="_blank">
            {' '}
            Github
          </Anchor>
        </Text>
      </Box>
    </Container>
  );
}
