// Routine Details Component
import { Home, Clock, CalendarDays, User, Menu, Plus, ArrowLeft, X, MapPin, Shuffle } from "lucide-react";

const RoutineDetails = ({ title }) => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">Created on: April 22, 2025</p>
            <div className="border rounded-lg p-3 mb-3">
                <div className="flex justify-between mb-2">
                    <span className="font-medium">Squat</span>
                    <span>3 sets</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>8-10 reps</span>
                    <span>225 lbs</span>
                </div>
            </div>
            <div className="border rounded-lg p-3 mb-3">
                <div className="flex justify-between mb-2">
                    <span className="font-medium">Bench Press</span>
                    <span>3 sets</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                    <span>8-10 reps</span>
                    <span>185 lbs</span>
                </div>
            </div>
            <button className="bg-green-600 text-white py-2 px-4 rounded w-full">
                Start Workout
            </button>
        </div>
    );
}
export default RoutineDetails
