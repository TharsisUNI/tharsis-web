import { useState } from "react";

export const Header = () => {

  const [first, setFirst] = useState("");

  return (
    <div className="w-full bg-stone-800">
      <div className="max-w-7xl mx-auto px-16 py-12 flex items-center justify-between">
        <div className="w-full flex relative">
          <div className="flex flex-col max-w-sm text-white space-y-6">
            <p className="text-[2.65rem] font-semibold leading-tight">
              Find out more about the project that will represent{" "}
              <span className="text-red-500">P</span>er
              <span className="text-red-500">u</span> in the HERC
            </p>
            <p className="text-lg">
              Leave us your email and we will keep you up to date on this great
              contest.
            </p>
            <form className="flex max-w-[24rem] w-full">
              <input
                type="email"
                className="rounded-l-lg border border-brand-orange text-brand-orange block flex-1 px-3.5 py-2 placeholder:text-brand-orange placeholder:opacity-60 focus:outline-none"
                placeholder="tharsis.uni@gmail.com"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center w-20 px-1 text-white bg-brand-orange font-medium rounded-r-md border border-brand-orange"
              >
                  <p>Send</p>
              </button>
            </form>
          </div>
          <div className="absolute right-0 -top-8">
            <img src="/rover-borde-blanco-2.png" alt="Rover borde blanco" className="h-[31.5rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};
