"use server"

import db from "@/db/drizzle";
import { getCourseByID, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upseartUserProgress = async (courseId: number)=>{
    const {userId} = await auth();
    const user = await currentUser();

    if (!userId || !user) {
        throw new Error("Unauth");
        
    }

    const course = await getCourseByID(courseId);

    if (!course) {
        throw new Error("No such Course found");
    }

    // if (!course.units.length || !course.units[0].lessons.length) {
    //     throw new Error("courses are empty")
    // }

    const existingUserProg = await getUserProgress();

    if (existingUserProg) {
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.svg"
        })

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn")
    }

    await db.insert(userProgress).values({
        userId,
        activeCourseId:courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg"
    })

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn")
}