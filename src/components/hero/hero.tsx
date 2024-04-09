"use client"
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { TypewriterEffect } from "../ui/typewriter-effect";

const hero = () => {
    const words = [
        {
            text: "Trading",
        },
        {
            text: "View",
        },
        {
            text: "Coding.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <div className="flex flex-col overflow-hidden ">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                <TypewriterEffect words={words} /> <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Unleash Ur Results
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/Trade.JPG`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
        </div>
    )
}

export default hero