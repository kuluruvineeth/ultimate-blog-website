import React from "react";
import { IoReaderOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

const HomePage = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-32 w-full flex-row items-center justify-around border-b-[1px] border-gray-200 bg-white">
        <div>
          <IoReaderOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">Kuluru Vineeth Blog</div>
        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <div>
            <button className="flex items-center rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900">
              <div>Write</div>
              <div>
                <FiEdit className="" />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r border-gray-300 px-24">
          <div className="flex w-full flex-col space-y-4 py-10">
            <div className="flex w-full items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-3xl border border-gray-300"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full rounded-3xl px-4 py-1 pl-7 text-sm outline-none placeholder:text-xs placeholder:text-gray-300"
                  placeholder="Search..."
                />
              </label>
              <div className="flex w-full items-center justify-end space-x-4">
                <div>My topics:</div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-gray-200/50 px-6 py-2.5"
                    >
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-8">
              <div>Articles</div>
              <div>
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5 font-semibold">
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="text-xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center space-y-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="group flex flex-col space-y-8 border-b border-gray-300 pb-8 last:border-none"
              >
                <div className="flex w-full items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                  <div>
                    <p className="font-semibold">
                      Kuluru Vineeth &#x2022; 05 May, 2023
                    </p>
                    <p className="text-sm">
                      Developer, Husteler and Startup In Rising
                    </p>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12 gap-4">
                  <div className="col-span-8 flex flex-col space-y-4">
                    <p className="text-2xl font-bold text-gray-800 decoration-indigo-600 group-hover:underline">
                      Software Developer and Problem Solver,
                    </p>
                    <p className="break-words text-sm text-gray-500">
                      Software Developer and Problem Solver, Initially I thought
                      mastering one technology and becoming good at it would
                      suffice our needs on daily basis. Till today with whatever
                      exposure i had in the phase of my career i could say i was
                      totally wrong about it. I strongly believe that having
                      broader domain knowledge and technology-agnostic mindset
                      is key to take us closer to the solution we are all
                      desiring for.
                    </p>
                  </div>
                  <div className="col-span-4">
                    <div className="duration-105 h-full w-full transform rounded-xl bg-gray-500 transition hover:scale-105 hover:shadow-xl"></div>
                  </div>
                </div>
                <div className="flex w-full items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-gray-200/50 px-6 py-2.5"
                      >
                        tag {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <aside className="sticky top-36 col-span-4 flex h-full w-full flex-col space-y-4 p-6">
          <div>
            <h3 className="my-6 text-lg font-semibold">
              People you might be interested
            </h3>
            <div className="flex flex-col space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-row items-center space-x-5">
                  <div className="h-10 w-10 flex-none rounded-full bg-gray-500"></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      Kuluru Vineeth
                    </div>
                    <div className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, corrupti! Aspernatur tenetur nemo ab asperiores
                    </div>
                  </div>
                  <div>
                    <button className="flex items-center space-x-3 rounded border border-gray-400/50 px-4 py-1.5 transition hover:border-gray-900 hover:text-gray-900">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="my-6 text-lg font-semibold">Your reading list</h3>
            <div className="flex flex-col space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="group flex items-center space-x-6">
                  <div className="aspect-square h-full w-2/5 rounded-xl bg-gray-300"></div>
                  <div className="flex w-3/5 flex-col space-y-2">
                    <div className="text-lg font-semibold decoration-indigo-900 group-hover:underline">
                      Kuluru Vineeth Blog
                    </div>
                    <div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, corrupti! Aspernatur tenetur nemo ab asperiores
                    </div>
                    <div className="flex w-full items-center space-x-4">
                      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                      <div className="text-xs font-semibold">
                        Kuluru Vineeth &#x2022;
                      </div>
                      <div className="text-xs">05 May, 2023</div>
                    </div>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
