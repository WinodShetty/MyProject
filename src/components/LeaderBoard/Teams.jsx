import React from 'react';

const Teams = ({ selectedTab, setSelectedTab }) => {
  const tabs = ['All', 'Team1', 'Team2'];

  return (
    <div className="flex justify-center bg-white py-1 mx-auto max-w-96 rounded-3xl gap-7 space-x-4 mt-4">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-lg ${selectedTab === tab ? 'bg-color2 text-white' : 'text-black-600 font-semibold'}`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Teams;
