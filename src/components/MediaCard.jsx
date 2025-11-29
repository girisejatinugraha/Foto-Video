const MediaCard = ({ type, src, title }) => {
    return (
        <div className="bg-pink-100 p-4 rounded-xl shadow-md border border-pink-300 text-center">
            {type === "photo" ? (
                <img
                    src={src}
                    alt={title}
                    className="w-full h-52 object-cover rounded-lg"
                />
            ) : (
                <video
                    src={src}
                    controls
                    className="w-full h-52 object-cover rounded-lg"
                />
            )}

            <p className="mt-2 text-pink-700 font-semibold">{title}</p>
        </div>
    );
};

export default MediaCard;