import { Profile } from './Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // flexDirection: 'column',
        // gap: '100px',

        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />;
      </div>
    </div>
  );
};
