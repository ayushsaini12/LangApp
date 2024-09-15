import { Message as MessageType } from "ai"
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";

export default function Message({message}: {message:MessageType}){
    const {role, content} = message;

    if (role == 'assistant') {
        return(
            <div className="flex flex-col gap-3 p-6 whitespace-pre-wrap">
                <div className="flex items-center gap-2 ">
                    <Image alt="assistant" src="/robot.svg" width={24} height={24} />
                    Assistant:
                </div>
                {content}
            </div>
        )
    }

    return (
        <Card className="whitespace-pre-wrap" > 
            <CardHeader>
                <div className="flex items-center gap-2">
                <Image alt="user" src="/mascot.svg" width={24} height={24} />
                    {content}
                </div>
            </CardHeader>
        </Card>
    )
}