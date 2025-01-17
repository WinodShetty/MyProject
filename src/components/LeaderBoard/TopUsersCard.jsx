import React from "react";

const TopUsersCard = ({ rank, name, points, timeSpent, imageUrl, gradientColor }) => {
  return (
    <div className={`w-full sm:w-[256px] h-[287px] bg-white text-lg rounded-3xl relative text-center text-white mb-4 sm:mb-0`}>
      <div className={`h-[96px] flex justify-end rounded-t-xl ${gradientColor}`}>
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 absolute top-8 left-3   rounded-full mb-4"
        />
        <h3 className="text-4xl mt-6 font-semibold mb-1 mr-7 italic">{rank}</h3>
      </div>
      <div className="text-black">
        <p className="text-xl mr-28 mt-4 font-semibold">{name}</p>
        <div className="mt-16 px-4 flex justify-around">
          <div>
            <p className="text-2xl italic">{points}</p>
            <p className="text-sm font-semibold">Total Points</p>
          </div>
          <div>
            <p className="text-2xl italic">{timeSpent}</p>
            <p className="text-sm font-semibold">Time Spent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUsersCard;
