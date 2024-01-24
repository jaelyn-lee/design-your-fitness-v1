export interface UserData {
  first_name: string
  last_name: string
  age: number
  height: number
  weight: number
  target_weight: number
}

export interface User extends UserData {
  id: number
}

export interface WorkoutGoalData {
  user_id: number
  workout_goal: string
}

export interface FitnessLevelData {
  user_id: number
  fitness_level: number
}
