import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

const LessonPage = async () =>{
    const lessonData = getLesson();

    const userProgessData = getUserProgress();

    const [ lesson, userProgess ] = await Promise.all([lessonData, userProgessData])

    if (!lesson || !userProgess) {
        redirect("/learn")
    }

    const initialPercentage =(lesson.challenges.filter((challenge) => challenge.completed).length /lesson.challenges.length) *100;

    return (
        <Quiz
            initialLessonId={lesson.id}
            initialLessonChallenges={lesson.challenges}
            initialHearts={userProgess.hearts}
            initialPercentage={initialPercentage}
        />
    )
}

export default LessonPage;