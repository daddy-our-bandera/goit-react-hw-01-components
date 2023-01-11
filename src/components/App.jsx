import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

import { Container } from './Container/Container';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Container title="Task 1">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>

      <Container title="Task 2">
        <Statistics title="Upload stats" stats={data} />
      </Container>

      <Container title="Task 3">
        <FriendList friends={friends} />
      </Container>

      <Container title="Task 4">
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
};
