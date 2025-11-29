import { useState } from "react";
import { useLocations } from "./logic/useLocations";

import WelcomeScreen from "./components/WelcomeScreen";
import LocationList from "./components/LocationList";
import Gallery from "./components/Gallery";

import "./styles/global.css";

function App() {
    const locations = useLocations();

    const [entered, setEntered] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

    if (!entered) {
        return <WelcomeScreen onEnter={() => setEntered(true)} />;
    }

    if (!selectedLocation) {
        return (
            <LocationList
                locations={locations}
                onSelect={(loc) => setSelectedLocation(loc)}
            />
        );
    }

    return (
        <Gallery
            location={selectedLocation}
            onBack={() => setSelectedLocation(null)}
        />
    );
}

export default App;