export default function LocationList({ locations, onSelect }) {
    return (
        <div className="center-container">
            <div className="location-box">
                <h2>Lokasi Galeri 💕</h2>
                <p>Klik Untuk Melihat Isinya</p>

                <div className="location-buttons">
                    {locations.map((loc, i) => (
                        <button 
                            key={i} 
                            className="location-btn" 
                            onClick={() => onSelect(loc)}
                        >
                            {loc.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}