"use client";
import { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { startTransition, useTransition } from "react";
import { upseartUserProgress } from "@/actions/user-progess";
import { toast } from "sonner";

type ListProps = {
    courses: (typeof courses.$inferSelect)[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({courses, activeCourseId}: ListProps) =>{
    const router = useRouter();
    const [pending, startTransition] = useTransition();

    const onClick = (id: number)=>{
        if (pending) {
            return ;
        }

        // if (id === activeCourseId) {
        //     return router.push(`/courses/${id}`);
            
        // }

        startTransition(()=>{
            upseartUserProgress(id)
            .catch(()=> toast.error("Something went wrong"));
        })
    }


    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card key={course.id} id={course.id} title={course.title} imageSrc={course.imageSrc} onClick= {onClick} disabled={pending} active= {course.id === activeCourseId}  />
            ))}
        </div>
    )
}