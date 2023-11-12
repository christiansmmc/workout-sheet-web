export interface GetWorkoutsResponse {
    id: string;
    name: string;
}

export interface GetWorkoutExercisesResponse {
    id: string;
    name: string;
    workoutExercises: [{
        id: string;
        load: number;
        exercise: {
            id: string,
            name: string,
            bodyPart: string
        }
    }]
}
