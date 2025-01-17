import React from 'react';

const LeaderboardTable = ({ users }) => {
  return (
    <div className="w-full bg-white shadow-md text-base rounded-3xl p-4 font-nunito mt-6">
      <div className="overflow-x-auto">
        {/* Table container with horizontal scrolling */}
        <div className="min-w-[900px]">
          {/* Table header */}
          <div className="grid grid-cols-2 mb-2 font-semibold text-black bg-white">
            <div className="flex justify-start">
              <div className='ml-36 text-left'>Place</div>
              <div className='pl-28 text-left'>Name</div>
            </div>
            <div className="flex justify-center gap-6 md:gap-20 md:ml-16 w-[32rem] ">
              <div className=''>Team</div>
              <div className=''>Time Spent</div>
              <div className=''>Points</div>
            </div>
          </div>
          {/* Table rows */}
          {users.map((user, index) => {
            const isTopThree = index < 3;
            const borderColorClass = isTopThree
              ? index === 0
                ? 'border-green-500'
                : index === 1
                ? 'border-yellow-500'
                : 'border-red-500'
              : 'border-white';

            const skewClass = isTopThree ? 'transform skew-x-[-16deg]' : '';

            return (
              <div
                key={user.place}
                className={`grid grid-cols-2 border-2 items-center justify-between m-auto pl-28 rounded-xl mx-12 ${borderColorClass} mb-2 ${skewClass} relative bg-white`}
                style={{ transform: skewClass ? 'skewX(-26deg)' : 'none' }}
              >
                <div className='grid grid-cols-3 pr-16 w-[25rem] items-center' style={{ transform: skewClass ? 'skewX(26deg)' : 'none' }}>
                  <div className="pr-9">{index > 9 ? `${index + 1}` : `0${index + 1}`}</div>
                  <img
                    src={user.imageUrl}
                    alt={`${user.name}'s avatar`}
                    className="w-[80px] h-[80px] rounded-full flex-shrink-0 p-2"
                  />
                  <span>{user.name}</span>
                </div>

                <div className='grid grid-cols-3 pl-28' style={{ transform: skewClass ? 'skewX(26deg)' : 'none' }}>
                  <div className="">{user.team}</div>
                  <div className="">{user.timeSpent}</div>
                  <div className="ml-4">{user.points}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
