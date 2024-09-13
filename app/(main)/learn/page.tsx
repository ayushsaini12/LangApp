import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgess } from "@/components/user-progess";
import { getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async ()=>{
    const unitsDataAsync = getUnits();
    const userprogessPromise = getUserProgress();

    const[userProg, units] = await Promise.all([userprogessPromise, unitsDataAsync]);

    if (!userProg || !userProg.activeCourse) {
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
                        {JSON.stringify(unit)}
                        {/* <Unit
                        id={unit.id}
                        order={unit.order}
                        description={unit.description}
                        title={unit.title}
                        lessons={unit.lessons}
                        activeLesson={courseProgress.activeLesson}
                        activeLessonPercentage={lessonPercentage}
                        /> */}
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;