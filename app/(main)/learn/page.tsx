import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgess } from "@/components/user-progess";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";

const LearnPage = async ()=>{
    const unitsDataAsync = getUnits();
    const userprogessPromise = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();

    const[userProg, units, courseProgress, lessonPercentage] = await Promise.all([userprogessPromise, unitsDataAsync, courseProgressData, lessonPercentageData]);

    if (!userProg || !userProg.activeCourse) {
        redirect("courses")
        
    }

    if (!courseProgress) {
        redirect("courses")
        
    }

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgess activeCourse={userProg.activeCourse} hearts={userProg.hearts} points={userProg.points} hasActiveSubscription = {false}/>
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProg.activeCourse.title}/>
                {units.map((unit) => (
                    <div key={unit.id} className="mb-9">
                        
                        <Unit
                        id={unit.id}
                        order={unit.order}
                        description={unit.description}
                        title={unit.title}
                        lessons={unit.lessons}
                        activeLesson={courseProgress.activeLesson}
                        activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;