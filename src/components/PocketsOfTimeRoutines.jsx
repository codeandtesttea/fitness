import RoutineCard from "./RoutineCard";

export default function PocketsOfTimeRoutines({ openModal }) {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Pockets of Time Routines</h2>
            <div className="space-y-3">
                <RoutineCard
                    title="Quick 15 Min HIIT"
                    exercises={["Jumping Jacks", "Burpees", "Mountain Climbers"]}
                    duration="15 min"
                    onClick={() => openModal("Quick 15 Min HIIT")}
                />
                <RoutineCard
                    title="30 Min Lunch Break"
                    exercises={["Push-ups", "Sit-ups", "Bodyweight Squats"]}
                    duration="30 min"
                    onClick={() => openModal("30 Min Lunch Break")}
                />
                <RoutineCard
                    title="5 Min Morning Energizer"
                    exercises={["Jumping Jacks", "Push-ups", "Squats"]}
                    duration="5 min"
                    onClick={() => openModal("5 Min Morning Energizer")}
                />
            </div>
        </div>
    );
}