
import { MapPin, Shuffle } from "lucide-react";

export default function WalkingOptions({ walkingOptions, openModal, getRandomWalk, randomWalk }) {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Walking Options</h2>
                <button
                    className="bg-blue-600 text-white flex items-center px-3 py-2 rounded-lg"
                    onClick={getRandomWalk}
                >
                    <Shuffle size={16} className="mr-1" />
                    <span>Random Walk</span>
                </button>
            </div>

            {/* Random Walk Suggestion */}
            {randomWalk && (
                <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-4 flex items-start">
                    <MapPin className="text-green-600 mr-3 mt-1" size={20} />
                    <div>
                        <div className="font-bold text-green-800">Today's Random Walk:</div>
                        <div className="font-medium">{randomWalk.destination}</div>
                        <div className="text-sm text-gray-700">
                            {randomWalk.distance} • Approx. {randomWalk.time}
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-3">
                {walkingOptions.map((option, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-4 flex items-start">
                        <MapPin className="text-blue-600 mr-3 mt-1" size={20} />
                        <div>
                            <div className="font-bold">{option.destination}</div>
                            <div className="text-sm text-gray-600">
                                {option.distance} • Approx. {option.time}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center text-gray-500 mt-4 text-sm">
                Tap the + button to add a new walking option
            </div>
        </div>
    );
}