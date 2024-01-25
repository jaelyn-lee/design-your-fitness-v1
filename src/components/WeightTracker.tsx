import React from 'react'
// import WeightChart from './WeightChart' // Adjust the import path

interface UserData {
  userWeight: number
  targetWeight: number
}

const WeightTrackerView: React.FC<UserData> = () =>
  //   {
  //   userWeight,
  //   targetWeight,
  // }
  {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-6xl">
          🛠️ Under Construction - Weight Tracker View Page 🛠️
        </h1>
      </div>
    )
  }

export default WeightTrackerView
