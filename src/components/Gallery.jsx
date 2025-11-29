export default function Gallery({ location, onBack }) {
    return (
        <div className="center-container">
            <div className="gallery-box">
                <button className="back-btn" onClick={onBack}>← Kembali</button>

                <h2>{location.name} ❤️</h2>

                <div className="media-grid">
                    {location.photos.map((p, i) => (
                        <img key={i} src={p} alt="" className="media-item" />
                    ))}

                    {location.videos.map((v, i) => (
                        <video key={i} controls className="media-item">
                            <source src={v} type="video/mp4" />
                        </video>
                    ))}
                </div>
            </div>
        </div>
    );
}