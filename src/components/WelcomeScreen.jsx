export default function WelcomeScreen({ onEnter }) {
    return (
        <div className="center-container">
            <div className="welcome-box">
                <h1>Selamat Datang 💗</h1>
                <p>Ini Adalah Galeri Kita Berdua ~Giri & Welly~ ✨</p>
                <button className="pink-btn" onClick={onEnter}>
                    Lihat Galeri
                </button>
            </div>
        </div>
    );
}