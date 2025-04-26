import { useState } from "react";
import NewRoutineForm from "./NewRoutineForm";
import RoutineDetails from "./RoutineDetails";
import { ArrowLeft, X, } from "lucide-react";


// Modal Component
const Modal = ({ modalContent, setModalOpen, addWalkingOption }) => {
    const [walkDetails, setWalkDetails] = useState({
        distance: "",
        destination: "",
        time: ""
    });

    const handleAddWalk = () => {
        addWalkingOption(walkDetails);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-11/12 max-w-md">
                <div className="p-4 border-b flex justify-between items-center">
                    <div className="flex items-center">
                        <button onClick={() => setModalOpen(false)} className="mr-2">
                            <ArrowLeft size={20} />
                        </button>
                        <h2 className="text-lg font-medium">
                            {modalContent === "new" && "Create New Routine"}
                            {modalContent === "new-walk" && "Add Walking Option"}
                            {modalContent !== "new" && modalContent !== "new-walk" && "Routine Details"}
                        </h2>
                    </div>
                    <button onClick={() => setModalOpen(false)}>
                        <X size={20} />
                    </button>
                </div>
                <div className="p-4">
                    {modalContent === "new" && <NewRoutineForm />}
                    {modalContent === "new-walk" && (
                        <div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Distance</label>
                                <input
                                    className="w-full border rounded p-2"
                                    placeholder="e.g., 1 mile"
                                    value={walkDetails.distance}
                                    onChange={(e) => setWalkDetails({ ...walkDetails, distance: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Destination</label>
                                <input
                                    className="w-full border rounded p-2"
                                    placeholder="e.g., Local Park"
                                    value={walkDetails.destination}
                                    onChange={(e) => setWalkDetails({ ...walkDetails, destination: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Estimated Time</label>
                                <input
                                    className="w-full border rounded p-2"
                                    placeholder="e.g., 20 min"
                                    value={walkDetails.time}
                                    onChange={(e) => setWalkDetails({ ...walkDetails, time: e.target.value })}
                                />
                            </div>
                            <button
                                className="bg-blue-600 text-white py-2 px-4 rounded w-full"
                                onClick={handleAddWalk}
                            >
                                Add Walking Option
                            </button>
                        </div>
                    )}
                    {modalContent !== "new" && modalContent !== "new-walk" && <RoutineDetails title={modalContent} />}
                </div>
            </div>
        </div>
    );
}

export default Modal