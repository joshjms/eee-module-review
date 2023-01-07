// Components
import CoursesCarousel from "../components/CoursesCarousel";
import Navbar from "../components/Navbar";

// Dummy Variables
import { Courses } from "../dummy_data";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="my-[3rem] w-[80%] mx-auto">
                <h1 className="text-3xl text-center mb-10">Module Review</h1>

                <div className="my-5">
                    <h3 className="text-xl mb-5 text-center">Year 1</h3>
                    <CoursesCarousel
                        courses={Courses.filter((e) => {
                            return e.year === 1;
                        })}
                    />
                </div>

                <div className="my-5">
                    <h3 className="text-xl mb-5 text-center">Year 2</h3>
                    <CoursesCarousel
                        courses={Courses.filter((e) => {
                            return e.year === 1;
                        })}
                    />
                </div>
            </div>
        </>
    );
}
