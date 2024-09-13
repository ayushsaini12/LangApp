import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgess } from "@/components/user-progess";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage = async ()=>{
    const userprogessPromise = getUserProgress();

    const[userProg] = await Promise.all([userprogessPromise]);

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
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;