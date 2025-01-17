import React, { useState } from 'react';
import Teams from './Teams';
import TopUsersCard from './TopUsersCard';
import LeaderboardTable from './LeaderBoardTable'; 
// import Sample from '../../assets/images/LeaderBoard/female.png';
// import Sample2 from '../../assets/images/LeaderBoard/male.png';
import Sample3 from '../../assets/images/LeaderBoard/female3.png';
import Sample4 from '../../assets/images/LeaderBoard/male3.png';

const allUsersData = [
  { place: '01', name: 'Cody Fisher', team: 'Team2', timeSpent: '6Hrs', points: 500, imageUrl: Sample3 },
  { place: '02', name: 'Theresa Webb', team: 'Team2', timeSpent: '5.5Hrs', points: 450, imageUrl: Sample4 },
  { place: '03', name: 'Wade Warren', team: 'Team2', timeSpent: '5.4Hrs', points: 423, imageUrl: Sample3 },
  { place: '04', name: 'Jenny Wilson', team: 'Team1', timeSpent: '7Hrs', points: 877, imageUrl: Sample4 },
  { place: '05', name: 'Eather Howard', team: 'Team1', timeSpent: '3Hrs', points: 423, imageUrl: Sample3 },
  
  
];

const LeaderBoard = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  // Filter the selected tab
  const filteredUsers = selectedTab === 'All' ? allUsersData : allUsersData.filter(user => user.team === selectedTab);

  const topUsers = filteredUsers.slice(0, 3);
  const tableRows = filteredUsers.slice(0, 5); // Show up to 5 rows

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <Teams selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto sm:grid-cols-2 sm:justify-center mt-8">
        {topUsers.length > 0 ? (
          topUsers.map((user, index) => (
            <TopUsersCard
              key={user.place}
              rank={`${index + 1}${index === 0 ? 'st' : index === 1 ? 'nd' : 'rd'}`}
              name={user.name}
              points={user.points}
              timeSpent={user.timeSpent}
              imageUrl={user.imageUrl}
              gradientColor={index === 0 ? 'Rank1' : index === 1 ? 'Rank2' : 'Rank3'}
            />
          ))
        ) : (
          <div>No users available</div>
        )}
      </div>

      <div className="mt-8 overflow-x-auto">
        <LeaderboardTable users={tableRows} />
      </div>
    </div>
  );
};

export default LeaderBoard;
