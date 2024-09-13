import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursePage = async () =>{
    const courses = getCourses();
    const userProg =  getUserProgress();

    const [coursesData, userProgressData] =  await Promise.all([
        courses,
        userProg
    ])
    return (
        <div className="mx-auto h-full max-w-[912px] px-3">
        <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
            <List courses={coursesData} activeCourseId={userProgressData?.activeCourseId} />
        </div>


    )
}

export default CoursePage;