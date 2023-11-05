import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub} from 'aws-amplify';
import {NavBarHeader} from './ui-components';
import { withAuthenticator ,Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(userData => {
        setUser(userData);
      })
      .catch(() => {
        setUser(null);
      });

    // Hubを使用してCognitoセッションの変更を監視
    Hub.listen('auth', data => {
      const { payload } = data;
      if (payload.event === 'signOut') {
        // ユーザーがログアウトした場合の処理
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
    <Flex direction="column" alignItems="center">          
      {user ? (
          <div>
            <NavBarHeader />
            <p>testdayo</p>
            <p>{user.attributes['custom:iam_id']}</p>
          </div>
        
      ) : (
        <p>Not Auther it</p>

      )}
    </Flex>
    </div>

  );
}

export default withAuthenticator(App);