"use client"
import Message from "@/components/messages";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {useChat} from "ai/react"
import { Send } from "lucide-react";
import React, { useRef } from "react";
import { toast } from "sonner";

const Chat = () =>{

    const {messages, input, handleInputChange, handleSubmit} = useChat({
        onError: (error) => {
            toast.error(error.message || 'An error occurred during the chat');
        },
    })
    const formRef = useRef<HTMLFormElement>(null);
    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        formRef.current?.requestSubmit();
        }
    }

    return (
        <div className=" h-full w-full ">
            <div className="h-full w-full flex flex-col py-8">
                <div className="flex-1 overflow-y-auto">
                    {messages.map((message)=>(
                        <Message key={message.id} message={message}/>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="mt-auto relative" ref={formRef}>
                    <Textarea 
                    className="w-full text-lg" 
                    placeholder="How can I help you with Languages?"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    />
                    <Button 
                        type="submit"
                        className="absolute top-1/2 transform -translate-y-1/2 right-4"
                        size= "icon"
                        disabled= {!input}
                    > 
                        <Send size={24}/>
                    </Button>
                </form>
            </div>
        </div>
    )
} 

export default Chat;