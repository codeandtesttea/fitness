// New Routine Form Component
import { Home, Clock, CalendarDays, User, Menu, Plus, ArrowLeft, X, MapPin, Shuffle } from "lucide-react";

const NewRoutineForm = () => {
    return (
        <div>
            <input
                className="w-full border rounded p-2 mb-4"
                placeholder="Routine Name"
            />
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Routine Type</label>
                <select className="w-full border rounded p-2">
                    <option>My Routines</option>
                    <option>Pockets of Time</option>
                    <option>Template</option>
                </select>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded w-full">
                Create Routine
            </button>
        </div>
    );
}
export default NewRoutineForm
