import GoalContainer from './UI/GoalContainer'

export default function Goal() {
  const storedUserData = localStorage.getItem('userData')
  const user = storedUserData ? JSON.parse(storedUserData) : null
  return (
    <div>
      <h1 className="uppercase text-center font-extrabold text-4xl sm:text-6xl lg:text-8xl pt-36 sm:pt-12 lg:pt-44">
        Choose your goal
      </h1>
      <div className="goal-div">
        <GoalContainer
          workout_goal="Weight Loss"
          image="/images/weightloss.png"
          user={user}
        />
        <GoalContainer
          workout_goal="Gain Muscle"
          image="/images/gainmuscle.png"
          user={user}
        />
        <GoalContainer
          workout_goal="Body Building"
          image="/images/bodybuild.png"
          user={user}
        />
      </div>
    </div>
  )
}
