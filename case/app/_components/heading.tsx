"use client";

export const Heading = () => {
    return (
        <div className="max-w-xl space-y-4 sm:max-w-96 pb-10">
            <h1 className="text-3xl md:text-4xl sm:text-3xl font-bold">
               Mandatory title about the <span className="font-normal">call-to-action</span> here 
            </h1>
            <h3 className="text-base sm:text-[13px] md:text-2xl font-medium">
                Optional body copy goes here.
            </h3>
            <button className="text-orange-500"> Optional button -&gt; </button>
        </div>

    )
}