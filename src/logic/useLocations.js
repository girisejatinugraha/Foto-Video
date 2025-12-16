import Kangen1 from "../img/kangen1.JPG";
import Kangen2 from "../img/kangen2.JPG";
import PhotoBox from "../img/PhotoBox.JPG";
import video1 from "../img/video1.mp4";
import video2 from "../img/video2.MOV";
import bakmie1 from "../img/bakmie1.jpeg"
import bakmie2 from "../img/bakmie2.jpeg"
import bakmie3 from "../img/bakmie3.mp4"
import bakmie4 from "../img/bakmie4.mp4"

export const useLocations = () => {
    return [
        {
            name: "Kangen Kopi & Space",
            photos: [ Kangen1, Kangen2, PhotoBox,],
            videos: [video1, video2]
        },
        {
            name: "Bakmie Ayam 58",
            photos: [bakmie1, bakmie2],
            videos: [bakmie3, bakmie4]
        },
    ];
};