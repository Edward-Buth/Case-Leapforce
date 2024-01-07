"use client";

export const Heading = () => {
    return (
        <div className="max-w-80 space-y-6 sm:max-w-96 pb-10">
            <p className="font-ttfont text-xs">Label</p>
            <h1 className="font-ttfont text-slate-800 text-4xl lg:text-3xl sm:text-3xl font-medium">
               Mandatory title about the <span className="font-gtafont font-thin">call-to-action</span> here
            </h1>
            <h3 className="font-ttfont text-slate-600 text-base sm:text-[13px] lg:text-[15px] font-light">
                Optional body copy goes here.
            </h3>
            <button className="font-ttfont text-orange-500 text-[13px]"> Optional button -&gt; </button>
        </div>

    )
}