import { div } from "@tensorflow/tfjs";
import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex flex-wrap items-center">
                <div className="relative w-[400px] h-[400px]
                 sm:w-[0px] sm:h-[0px] md:w-[500px] md:h-[380px]">
                    <Image
                    src="/Image-2.png"
                    fill
                    className="object-contain"
                    alt="image"
                    />
                </div>
                <div className="relative w-[400px] h-[400px]
                sm:w-[0px] sm:h-[0px] md:w-[500px] md:h-[380px]">
                    <Image
                    src="/Image-2.png"
                    fill
                    className="object-contain"
                    alt="image"
                    />
                </div>
                <div className="relative w-[0] h-[0]
                sm:w-[290px] sm:h-[370px] md:w-[0] md:h-[0]">
                    <Image
                    src="/Image.png"
                    fill
                    className="object-contain"
                    alt="image"
                    />
                </div>
                <div className="relative w-[0px] h-[0px]
                sm:w-[290px] sm:h-[370px] md:w-[0px] md:h-[0px]">
                    <Image
                    src="/Image.png"
                    fill
                    className="object-contain"
                    alt="image"
                    />
                </div>
            </div>
        </div>
    )
}