"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [state, setState] = useState([
    {
      title: "Page 1",
      checked: false,
    },
    {
      title: "Page 2",
      checked: false,
    },
    {
      title: "Page 3",
      checked: false,
    },
    {
      title: "Page 4",
      checked: false,
    },
  ]);

  console.log("state", state);
  const RenderItemWithCheckBox = ({
    title,
    checked,
    handleClicked,
  }: {
    title: string;
    checked: boolean;
    handleClicked?: () => void;
  }) => {
    console.log("checked", checked);
    return (
      <div className="w-full flex  h-[42px] text-[#1F2128]   ">
        <label
          style={{
            lineHeight: "18.2px",
          }}
          className="text-sm items-center justify-between flex w-full group px-2 relative"
        >
          {title}
          <input
            type="checkbox"
            checked={checked}
            className="h-4 w-4 rounded-sm border border-gray-300 opacity-0"
            onChange={handleClicked}
          />
          <div className="p-[3px] rounded-[6px]   group-active:bg-[#eaf0fe] absolute right-2 top-1/2 -translate-y-1/2">
            <div
              className={`
            w-[23px] h-[23px]   rounded-md border  flex items-center justify-center
              ${
                checked
                  ? "border-transparent"
                  : " group-hover:border-[#BDBDBD] border-[#CDCDCD]"
              }
            ${
              checked ? "bg-[#2469F6]    group-hover:bg-[#5087F8] " : "bg-white"
            }
            `}
            >
              {checked && (
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`
                opacity-0 group-hover:opacity-100 group-hover: stroke-[#E3E3E3]
                ${
                  checked
                    ? "opacity-100 stroke-white"
                    : "opacity-0 stroke-[#E3E3E3] "
                }
                `}
                >
                  <path
                    d="M0.68 6.59199L6.22879 11.5271C6.24925 11.5453 6.28055 11.5437 6.29899 11.5235L16.32 0.519989"
                    stroke="#E3E3E3"
                    className={`
                  // opacity-0
                  ${
                    checked
                      ? "opacity-100 stroke-white"
                      : "opacity-0 stroke-[#E3E3E3] "
                  }
                  `}
                    stroke-linecap="round"
                  />
                </svg>
              )}
              {!checked && (
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`
                opacity-0 group-hover:opacity-100 
               
                `}
                >
                  <path
                    d="M0.68 6.59199L6.22879 11.5271C6.24925 11.5453 6.28055 11.5437 6.29899 11.5235L16.32 0.519989"
                    // stroke="#E3E3E3"
                    className={` 
                    stroke-none group-hover:stroke-[#E3E3E3] group-active:stroke-[#878787]
                    `}
                    stroke-linecap="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </label>
      </div>
    );
  };
  return (
    <main className="flex min-h-screen  ">
      <div
        style={{
          boxShadow:
            "0px 0px 4px rgba(20, 20, 20, 0.1), 0px 8px 15px rgba(20, 20, 20, 0.12)",
          borderRadius: "1px solid #EEEEEE",
        }}
        className="m-auto w-full flex flex-col max-w-[370px] py-[10px] px-[15px] rounded-md"
      >
        {/* option to select all pages */}
        <div
          style={{
            borderBottom: "0.7px solid #CDCDCD",
          }}
          className="pb-[10px]  active: "
        >
          <RenderItemWithCheckBox
            title="Select all pages"
            checked={state.every((item) => item.checked)}
            handleClicked={() => {
              //check or uncheck all pages
              setState(
                state.map((item) => {
                  return {
                    ...item,
                    checked: !state.every((item) => item.checked),
                  };
                })
              );
            }}
          />
        </div>
        {/* list of pages */}
        <div
          style={{
            borderBottom: "0.7px solid #CDCDCD",
          }}
          className="mt-[10px] mb-[20px]"
        >
          {state.map((item, index) => {
            return (
              <RenderItemWithCheckBox
                key={index}
                title={item.title}
                checked={item.checked}
                handleClicked={() => {
                  //check or uncheck a page
                  setState(
                    state.map((stateItem, stateIndex) => {
                      if (stateIndex === index) {
                        return {
                          ...stateItem,
                          checked: !stateItem.checked,
                        };
                      }
                      return stateItem;
                    })
                  );
                }}
              />
            );
          })}
        </div>
        <Button />
      </div>
    </main>
  );
}

const Button = () => {
  return (
    <button className="h-10 max-w-[340px] w-full text-sm text-center rounded bg-[#FFCE22] hover:bg-[#FFD84D] active:bg-[#FFCE22] text-black ">
      Done
    </button>
  );
};
