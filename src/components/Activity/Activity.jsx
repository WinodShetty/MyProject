import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Activity = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Sample data
  const sampleData = [
    {
      day: 'Mon',
      date: '2',
      activities: [
        ['Walking-5000 Steps', 'Running-2686 Steps'],
        ['Cardio-20 Mins', 'Abs-20 Mins', 'Strength Training-30 Mins'],
        ['Badminton-1.5 Hrs', 'Swimming-1 Hrs'],
        ['Mindfulness-30 Mins', 'Sharing of Techniques with team'],
        ['Daily Food Log', 'Meal Variety'],
        ['Water-3ltrs', 'Reduction in Caffeinated Drinks'],
        ['Sleep Duration-8 Hrs', 'Daily Sleep Tracking'],
      ],
    },
    {
      day: 'Tue',
      date: '3',
      activities: [
        ['Walking-5000 Steps', 'Running-2686 Steps'],
        ['Cardio-20 Mins', 'Abs-20 Mins', 'Strength Training-30 Mins'],
        ['Badminton-1.5 Hrs', 'Swimming-1 Hrs'],
        ['Mindfulness-30 Mins', 'Sharing of Techniques with team'],
        ['Daily Food Log', 'Meal Variety'],
        ['Water-3ltrs', 'Reduction in Caffeinated Drinks'],
        ['Sleep Duration-8 Hrs', 'Daily Sleep Tracking'],
      ],
    },
    {
      day: 'Wed',
      date: '4',
      activities: [
        ['Walking-5000 Steps', 'Running-2686 Steps'],
        ['Cardio-20 Mins', 'Abs-20 Mins', 'Strength Training-30 Mins'],
        ['Badminton-1.5 Hrs', 'Swimming-1 Hrs'],
        ['Mindfulness-30 Mins', 'Sharing of Techniques with team'],
        ['Daily Food Log', 'Meal Variety'],
        ['Water-3ltrs', 'Reduction in Caffeinated Drinks'],
        ['Sleep Duration-8 Hrs', 'Daily Sleep Tracking'],
      ],
    },
    {
      day: 'Thurs',
      date: '5',
      activities: [
        ['Walking-5000 Steps', 'Running-2686 Steps'],
        ['Cardio-20 Mins', 'Abs-20 Mins', 'Strength Training-30 Mins'],
        ['Badminton-1.5 Hrs', 'Swimming-1 Hrs'],
        ['Mindfulness-30 Mins', 'Sharing of Techniques with team'],
        ['Daily Food Log', 'Meal Variety'],
        ['Water-3ltrs', 'Reduction in Caffeinated Drinks'],
        ['Sleep Duration-8 Hrs', 'Daily Sleep Tracking'],
      ],
    },
    {
      day: 'Fri',
      date: '6',
      activities: [
        ['Walking-5000 Steps', 'Running-2686 Steps'],
        ['Cardio-20 Mins', 'Abs-20 Mins', 'Strength Training-30 Mins'],
        ['Badminton-1.5 Hrs', 'Swimming-1 Hrs'],
        ['Mindfulness-30 Mins', 'Sharing of Techniques with team'],
        ['Daily Food Log', 'Meal Variety'],
        ['Water-3ltrs', 'Reduction in Caffeinated Drinks'],
        ['Sleep Duration-8 Hrs', 'Daily Sleep Tracking'],
      ],
    },
    {
      day: 'Sat',
      date: '7',
      activities: [
        ['Walking-5000 Steps', 'Running-2686 Steps'],
        ['Cardio-20 Mins', 'Abs-20 Mins', 'Strength Training-30 Mins'],
        ['Badminton-1.5 Hrs', 'Swimming-1 Hrs'],
        ['Mindfulness-30 Mins', 'Sharing of Techniques with team'],
        ['Daily Food Log', 'Meal Variety'],
        ['Water-3ltrs', 'Reduction in Caffeinated Drinks'],
        ['Sleep Duration-8 Hrs', 'Daily Sleep Tracking'],
      ],
    },
    {
      day: 'Sun',
      date: '8',
      activities: [
        ['Walking-5000 Steps', 'Running-2686 Steps'],
        ['Cardio-20 Mins', 'Abs-20 Mins', 'Strength Training-30 Mins'],
        ['Badminton-1.5 Hrs', 'Swimming-1 Hrs'],
        ['Mindfulness-30 Mins', 'Sharing of Techniques with team'],
        ['Daily Food Log', 'Meal Variety'],
        ['Water-3ltrs', 'Reduction in Caffeinated Drinks'],
        ['Sleep Duration-8 Hrs', 'Daily Sleep Tracking'],
      ],
    },
  ];

  const totalPages = Math.ceil(sampleData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentActivities = sampleData.slice(startIndex, startIndex + itemsPerPage);

  const CustomDateInput = ({ value, onClick }) => (
    <div className="relative">
      <input
        type="text"
        className="px-8 py-2 border rounded-lg text-sm cursor-pointer pl-10"
        value={value}
        onClick={onClick}
        readOnly
      />
      <CalendarIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
    </div>
  );

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  return (
    <div className="container nunito mx-auto p-4 md:p-6 shadow-lg rounded-lg max-w-full bg-slate-100">
      {/* Date Range Picker */}
      <div className="flex flex-col md:flex-row justify-end items-center mb-4 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          {/* Left Arrow */}
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
          </button>

          {/* Date Range Input */}
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd/MM/yyyy"
            customInput={<CustomDateInput />}
          />

          {/* Right Arrow */}
          <button
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="bg-color7 p-4 md:p-2 rounded-lg text-xl">
        {/* Header Row */}
        <div className="grid grid-cols-1 border-b-4 text-left md:grid-cols-8 gap-2 md:gap-4 p-2 md:p-4 font-semibold text-xl md:text-sm text-[#332A7C]">
          <div className="text-left pl-2 border-b-0 text-[#2CAF49]">Activity</div>
          <div>Daily Step Challenge</div>
          <div>Weekly Exercise Routine</div>
          <div>Outdoor Games</div>
          <div>Mindfulness and Relaxation</div>
          <div>Nutrition Tracking</div>
          <div>Hydration Challenge</div>
          <div>Sleep Improvement Challenge</div>
        </div>

        {/* Rows for Each Day */}
        {currentActivities.map((activity, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-8 gap-2 md:gap-4 border-b p-2 text-xl sm:text md:text-xs">
            <div className="text-left pl-2 font-medium text-red-600">
              {activity.date} {activity.day}
            </div>
            {activity.activities.map((acts, i) => (
              <div key={i} className="flex flex-col items-start text-gray-700">
                <ul className="list-disc list-inside text-left flex flex-col">
                  {acts.map((act, j) => (
                    <li key={j} className="mb-1">{act}</li>
                  ))}
                </ul>
              </div>
            ))}
            {7 - activity.activities.length > 0 &&
              Array.from({ length: 7 - activity.activities.length }).map((_, i) => (
                <div key={i} className="text-left"></div>
              ))}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4">
        <button
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 mr-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
        </button>
        <span className="text-gray-700 ">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 ml-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Activity;
