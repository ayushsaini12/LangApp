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
                <UserProgess activeCourse={{title: "Spanish", imageSrc : "/es.svg"}} hearts={5} points={100} hasActiveSubscription = {false}/>
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Spanish"/>
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;