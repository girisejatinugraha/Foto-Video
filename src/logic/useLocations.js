import Kangen1 from "../img/kangen1.JPG";
import Kangen2 from "../img/kangen2.JPG";
import PhotoBox from "../img/PhotoBox.JPG";
import video1 from "../img/video1.mp4";
import video2 from "../img/video2.MOV";

export const useLocations = () => {
    return [
        {
            name: "Kangen Kopi & Space",
            photos: [ Kangen1, Kangen2, PhotoBox,],
            videos: [video1, video2]
        },
        {
            name: "Next?",
            photos: ["/img/mali1.jpg", "/img/mali2.jpg"],
            videos: []
        },
    ];
};