import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Root from './Root'
import Home from '../views/HomeView'
import FitnessLevelView from '../views/FitnessLevelView'
import GoalView from '../views/GoalView'
import UserFormView from '../views/UserFormView'
import WorkoutRoutineView from '../views/WorkoutRoutineView'
import WeightTrackerView from '../views/WeightTrackerView'
import MyPageView from '../views/MyPageView'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="user-form" element={<UserFormView />} />
      <Route path="workout-goals" element={<GoalView />} />
      <Route path="fitness-levels" element={<FitnessLevelView />} />
      <Route path="workout-routine" element={<WorkoutRoutineView />} />
      <Route path="weight-tracker" element={<WeightTrackerView />} />
      <Route path="my-page" element={<MyPageView />} />
    </Route>
  )
)
