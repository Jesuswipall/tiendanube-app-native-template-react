import React, { useEffect, useState } from 'react';
import { Box, Text } from '@nimbus-ds/components';
import { connect, iAmReady } from '@tiendanube/nexo';

import nexo from './NexoClient';
import './I18n';

const App: React.FC = () => {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    if (!isConnect) {
      connect(nexo)
        .then(async () => {
          setIsConnect(true);
          iAmReady(nexo);
        })
        .catch(() => {
          setIsConnect(false);
        });
    }
  }, []);

  if (!isConnect)
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Conectando...</Text>
      </Box>
    );

  return (
    <Text>aqui</Text>
  );
};

export default App;
