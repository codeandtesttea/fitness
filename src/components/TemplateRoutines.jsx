import RoutineCard from "./RoutineCard";
import { Home, Clock, CalendarDays, User, Menu, Plus, ArrowLeft, X, MapPin, Shuffle } from "lucide-react";

// Template Routines Section
export default function TemplateRoutines({ openModal }) {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Template Routines</h2>
            <div className="space-y-3">
                <RoutineCard
                    title="PPL Template"
                    exercises={["Push Day", "Pull Day", "Legs Day"]}
                    type="3-day split"
                    onClick={() => openModal("PPL Template")}
                />
                <RoutineCard
                    title="5x5 Strength Template"
                    exercises={["Squat 5x5", "Bench Press 5x5", "Deadlift 5x5"]}
                    type="Strength Building"
                    onClick={() => openModal("5x5 Strength Template")}
                />
                <RoutineCard
                    title="HIIT Cardio Template"
                    exercises={["20s Work/10s Rest", "8 Different Exercises"]}
                    type="Cardio"
                    onClick={() => openModal("HIIT Cardio Template")}
                />
            </div>
        </div>
    );
}
