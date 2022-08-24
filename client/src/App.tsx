import { Box } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { ChatPlace } from 'chat-place';
import { CHAT_PLACE, HOME, TWT_PROFILES } from 'constants/routes';
import { gqlClient } from 'gql-client';
import { LandingPage } from 'landing-page';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProfile } from 'user-profile';

import { MeDocument, MeQuery } from './graphql/generated';
import { UserProvider } from './user-ctx';

function App() {
  const { isLoading, data } = useQuery<MeQuery['me']>(
    ['me'],
    async () => {
      const { me } = await gqlClient.request(MeDocument);
      return me;
    },
    { staleTime: Infinity },
  );

  return (
    <BrowserRouter>
      <UserProvider value={data || null}>
        {isLoading ? (
          <></>
        ) : (
          <Box className="App">
            <Routes>
              <Route path={HOME} element={<LandingPage />} />
              <Route path={CHAT_PLACE} element={<ChatPlace />} />
              <Route>
                <Route path={`${TWT_PROFILES}/:username`} element={<UserProfile />} />
              </Route>
            </Routes>
          </Box>
        )}
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
