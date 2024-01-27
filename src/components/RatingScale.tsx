interface RatingScaleProps {
  rating: number
  onChange: (newRating: number) => void
}

const ratingDescription: { [key: number]: string } = {
  0: 'I have no fitness skills at all. Couch potato alert!',
  1: "I'm just getting started on my fitness journey.",
  2: "I have minimal fitness skills, but I'm willing to improve.",
  3: "I'm developing some basic fitness abilities.",
  4: 'I have average fitness skills, keep going!',
  5: "I'm moderately fit and can handle moderate workouts.",
  6: "I'm getting stronger and fitter each day.",
  7: 'I have above-average fitness skills and can tackle challenging workouts.',
  8: "I'm in great shape, and my fitness levels are impressive!",
  9: "I'm almost at peak fitness levels, just a little more to go!",
  10: "I'm a fitness pro! Top-notch skills and incredible stamina!",
}

export default function RatingScale({ rating, onChange }: RatingScaleProps) {
  const handleClick = (newRating: number) => {
    onChange(newRating)
  }

  return (
    <div className="">
      <p className=" font-normal text-xl sm:text-2xl flex flex-col sm:flex sm:flex-row h-[85px]">
        <p>
          Rating <span className="text-green">{rating} </span>
        </p>
        <span>{ratingDescription[rating]}</span>
      </p>
      <div className="bg-white text-black text-lg flex justify-between px-4 py-2 rounded-lg mt-2 sm:mt-0">
        {[...Array(11)].map((_, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {index}
          </button>
        ))}
      </div>
    </div>
  )
}
