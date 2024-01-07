import { Button } from "@/components/ui/button";
import { div } from "@tensorflow/tfjs";
import Image from "next/image";

// Images with their text and button included
export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="grid sm:flex lg:flex items-center">

                {/* desktop & mobile */}

                <div className="relative grid w-[400px] h-[320px] mb-5
                 sm:hidden lg:grid lg:mb-0 lg:mr-3 lg:w-[470px] lg:h-[380px]">
                    <Image
                    src="/Image-2.png"
                    fill
                    className="object-contain z-10"
                    alt="image"
                    />
                    {/* title, description, button */}
                    <div className="grid grid-cols-5 gap-3 z-20 h-30 bg-gradient-to-t from-neutral-800 self-end">
                        <h2 className="col-span-4 text-white text-left text-xl ml-5">Title</h2>
                        <p className="col-span-4 text-neutral-400 text-left ml-5">
                            Supporting text about the call-to-action goes here.
                        </p>
                        <Button variant={"outline"} className=" w-14 h-14 bg-transparent text-white mb-5">
                            -&gt;
                        </Button>
                    </div>
                </div>

                <div className="relative grid w-[400px] h-[320px]
                 sm:hidden lg:grid lg:ml-3 lg:w-[470px] lg:h-[380px]">
                    <Image
                    src="/Image-2.png"
                    fill
                    className="object-contain z-10"
                    alt="image"
                    />
                    <div className="grid grid-cols-5 gap-3 z-20 h-30 bg-gradient-to-t from-neutral-800 self-end">
                        <h2 className="col-span-4 text-white text-left text-xl ml-5">Title</h2>
                        <p className="col-span-4 text-neutral-400 text-left ml-5">
                            Supporting text about the call-to-action goes here.
                        </p>
                        <Button variant={"outline"} className=" w-14 h-14 bg-transparent text-white mb-5">
                            -&gt;
                        </Button>
                    </div>
                </div>

                {/* Tablet version */}

                <div className="relative hidden sm:grid
                sm:w-[320px] sm:h-[425px] sm:mr-2 lg:hidden">
                    <Image
                    src="/Image.png"
                    fill
                    className="object-contain z-10"
                    alt="image"
                    />
                    <div className="grid grid-cols-4 gap-3 z-20 h-30 bg-gradient-to-t from-neutral-800 self-end">
                        <h2 className="col-span-3 text-white text-2xl text-left ml-5">Title</h2>
                        <p className="col-span-3 text-neutral-400 text-left ml-5">
                            Supporting text about the call-to-action goes here.
                        </p>
                        <Button variant={"outline"} className=" w-14 h-14 bg-transparent text-white mb-5">
                            -&gt;
                        </Button>
                    </div>
                </div>

                <div className="relative hidden sm:grid
                sm:w-[320px] sm:h-[425px] sm:ml-2 lg:hidden">
                    <Image
                    src="/Image.png"
                    fill
                    className="object-contain z-10"
                    alt="image"
                    />
                    <div className="grid grid-cols-4 gap-3 z-20 h-30 bg-gradient-to-t from-neutral-800 self-end">
                        <h2 className="col-span-3 text-white text-2xl text-left ml-5">Title</h2>
                        <p className="col-span-3 text-neutral-400 text-left ml-5">
                            Supporting text about the call-to-action goes here.
                        </p>
                        <Button variant={"outline"} className=" w-14 h-14 bg-transparent text-white mb-5">
                            -&gt;
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}