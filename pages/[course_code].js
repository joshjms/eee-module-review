// Components
import Navbar from "../components/Navbar";

// External Libraries
import StarRateSharpIcon from "@mui/icons-material/StarRateSharp";

// Dummy Variables
import { CourseDetails } from "../dummy_data";

const workloadStars = [];
const difficultyStars = [];
const qualityLectStars = [];
const qualityTutStars = [];
const relevanceContStars = [];
const relevanceSpecStars = [];

for (let i = 0; i < 5; i++) {
    const ratings = CourseDetails.ratings;

    if (ratings.workload > i) {
        workloadStars.push(<StarRateSharpIcon className="text-yellow-500" />);
    } else workloadStars.push(<StarRateSharpIcon className="text-gray-500" />);

    if (ratings.difficulty > i) {
        difficultyStars.push(<StarRateSharpIcon className="text-yellow-500" />);
    } else difficultyStars.push(<StarRateSharpIcon className="text-gray-500" />);

    if (ratings.quality_lect > i) {
        qualityLectStars.push(<StarRateSharpIcon className="text-yellow-500" />);
    } else qualityLectStars.push(<StarRateSharpIcon className="text-gray-500" />);

    if (ratings.quality_tut > i) {
        qualityTutStars.push(<StarRateSharpIcon className="text-yellow-500" />);
    } else qualityTutStars.push(<StarRateSharpIcon className="text-gray-500" />);

    if (ratings.relevance_cont > i) {
        relevanceContStars.push(<StarRateSharpIcon className="text-yellow-500" />);
    } else relevanceContStars.push(<StarRateSharpIcon className="text-gray-500" />);

    if (ratings.relevance_spec > i) {
        relevanceSpecStars.push(<StarRateSharpIcon className="text-yellow-500" />);
    } else relevanceSpecStars.push(<StarRateSharpIcon className="text-gray-500" />);
}

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="my-[3rem] w-[80%] mx-auto">
                <div className="flex flex-wrap justify-around">
                    <div className="w-96">
                        <h1 className="text-5xl mb-2">
                            {CourseDetails.course_code}
                        </h1>
                        <h4 className="mb-5">{CourseDetails.name}</h4>
                        <p className="text-sm">{CourseDetails.description}</p>
                    </div>
                    <div className="w-96 flex flex-wrap gap-3">
                        <div className="bg-gray-100 w-44 h-28 p-3">
                            <h4 className="h-[3.75rem]">Workload</h4>
                            <div className="flex gap-1">{workloadStars}</div>
                        </div>
                        <div className="bg-gray-100 w-44 h-28 p-3">
                            <h4 className="h-[3.75rem]">Difficulty</h4>
                            <div className="flex gap-1">{difficultyStars}</div>
                        </div>
                        <div className="bg-gray-100 w-44 h-28 p-3">
                            <h4 className="h-[3.75rem]">Quality of Lectures</h4>
                            <div className="flex gap-1">{qualityLectStars}</div>
                        </div>
                        <div className="bg-gray-100 w-44 h-28 p-3">
                            <h4 className="h-[3.75rem]">Quality of Tutorials</h4>
                            <div className="flex gap-1">{qualityTutStars}</div>
                        </div>
                        <div className="bg-gray-100 w-44 h-28 p-3">
                            <h4 className="h-[3.75rem]">Relevance of Content</h4>
                            <div className="flex gap-1">{relevanceContStars}</div>
                        </div>
                        <div className="bg-gray-100 w-44 h-28 p-3">
                            <h4 className="h-[3.75rem]">Relevance to Specialization</h4>
                            <div className="flex gap-1">{relevanceSpecStars}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
