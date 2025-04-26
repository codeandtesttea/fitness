import { useState } from "react";
import { Home, Clock, CalendarDays, User, Menu, Plus, } from "lucide-react";
import Modal from "./Modal";
import WalkingOptions from "./WalkingOptions";
import MyRoutines from "./MyRoutines";
import PocketsOfTimeRoutines from "./PocketsOfTimeRoutines";
import TemplateRoutines from "./TemplateRoutines";

const FitnessApp = () => {
    const [activeTab, setActiveTab] = useState("myRoutines");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [walkingOptions, setWalkingOptions] = useState([
        { distance: "1 mile", destination: "Local Park", time: "20 min" },
        { distance: "0.5 mile", destination: "Coffee Shop", time: "10 min" },
        { distance: "2 miles", destination: "Downtown", time: "40 min" }
    ]);
    const [randomWalk, setRandomWalk] = useState(null);

    const openModal = (content) => {
        // console.log("content",content)
        setModalContent(content);
        setModalOpen(true);
    };

    const addWalkingOption = (newOption) => {
        setWalkingOptions([...walkingOptions, newOption]);
        setModalOpen(false);
    };

    const getRandomWalk = () => {
        if (walkingOptions.length === 0) return;
        const randomIndex = Math.floor(Math.random() * walkingOptions.length);
        setRandomWalk(walkingOptions[randomIndex]);
        setTimeout(() => setRandomWalk(null), 5000); // Reset after 5 seconds
    };

    const renderContent = () => {
        switch (activeTab) {
            case "myRoutines":
                return <MyRoutines openModal={openModal} />;
            case "pocketsOfTime":
                return <PocketsOfTimeRoutines openModal={openModal} />;
            case "templates":
                return <TemplateRoutines openModal={openModal} />;
            case "walking":
                return (
                    <WalkingOptions
                        walkingOptions={walkingOptions}
                        openModal={openModal}
                        getRandomWalk={getRandomWalk}
                        randomWalk={randomWalk}
                    />
                );
            default:
                return <MyRoutines openModal={openModal} />;
        }
    };

    return (
        <div className="bg-gray-100 h-screen flex flex-col">
            {/* Header */}
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Strong</h1>
                <Menu size={24} />
            </header>

            {/* Tab Navigation */}
            <div className="bg-white border-b flex flex-wrap">
                <button
                    className={`flex-1 py-3 px-2 text-xs font-medium ${activeTab === "myRoutines" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
                    onClick={() => setActiveTab("myRoutines")}
                >
                    My Routines
                </button>
                <button
                    className={`flex-1 py-3 px-2 text-xs font-medium ${activeTab === "pocketsOfTime" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
                    onClick={() => setActiveTab("pocketsOfTime")}
                >
                    Pockets of Time
                </button>
                <button
                    className={`flex-1 py-3 px-2 text-xs font-medium ${activeTab === "templates" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
                    onClick={() => setActiveTab("templates")}
                >
                    Templates
                </button>
                <button
                    className={`flex-1 py-3 px-2 text-xs font-medium ${activeTab === "walking" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"}`}
                    onClick={() => setActiveTab("walking")}
                >
                    Walking
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {renderContent()}
            </div>

            {/* Bottom Navigation Bar */}
            <div className="bg-white flex justify-around items-center py-3 border-t border-gray-200">
                <div className="flex flex-col items-center text-gray-500">
                    <Home size={20} />
                    <span className="text-xs mt-1">Home</span>
                </div>
                <div className="flex flex-col items-center text-blue-600">
                    <CalendarDays size={20} />
                    <span className="text-xs mt-1">Routines</span>
                </div>
                <div className="flex flex-col items-center text-gray-500">
                    <Clock size={20} />
                    <span className="text-xs mt-1">Progress</span>
                </div>
                <div className="flex flex-col items-center text-gray-500">
                    <User size={20} />
                    <span className="text-xs mt-1">Profile</span>
                </div>
            </div>

            {/* Add Button */}
            <button
                className="absolute bottom-20 right-4 bg-blue-600 p-3 rounded-full text-white shadow-lg"
                onClick={() => openModal(activeTab === "walking" ? "new-walk" : "new")}
            >
                <Plus size={24} />
            </button>

            {/* Modal */}
            {modalOpen && (
                <Modal
                    modalContent={modalContent}
                    setModalOpen={setModalOpen}
                    addWalkingOption={addWalkingOption}
                />
            )}
        </div>
    );
}
export default FitnessApp;
