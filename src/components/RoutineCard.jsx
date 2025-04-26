
export default function RoutineCard({ title, exercises, lastPerformed, duration, type, onClick }) {
    return (
        <div className="bg-white rounded-lg shadow p-4" onClick={onClick}>
            <h3 className="font-bold mb-2">{title}</h3>
            <div className="flex flex-wrap gap-1 mb-2">
                {exercises.map((exercise, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                        {exercise}
                    </span>
                ))}
            </div>
            <div className="text-sm text-gray-500">
                {lastPerformed && <div>Last performed: {lastPerformed}</div>}
                {duration && <div>Duration: {duration}</div>}
                {type && <div>Type: {type}</div>}
            </div>
        </div>
    );
}
