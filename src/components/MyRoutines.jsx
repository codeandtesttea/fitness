import RoutineCard from "./RoutineCard";

export default function MyRoutines({ openModal }) {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">My Routines</h2>
            <div className="space-y-3">
                <RoutineCard
                    title="Full Body Workout"
                    exercises={["Bench Press", "Squat", "Deadlift"]}
                    lastPerformed="3 days ago"
                    onClick={() => openModal("Full Body Workout")}
                />
                <RoutineCard
                    title="Upper Body"
                    exercises={["Bench Press", "Overhead Press", "Pull-ups"]}
                    lastPerformed="1 week ago"
                    onClick={() => openModal("Upper Body")}
                />
                <RoutineCard
                    title="Lower Body"
                    exercises={["Squat", "Lunges", "Leg Press"]}
                    lastPerformed="5 days ago"
                    onClick={() => openModal("Lower Body")}
                />
            </div>
        </div>
    );
}