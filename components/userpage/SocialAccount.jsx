"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram, SiNaver, SiTwitter } from "react-icons/si";

const SocialAccount = () => {
  const [connected, setConnected] = useState();
  return (
    <div className="isolate bg-white ">
      <div className="mx-auto sm:mt-20">
        <h3 className="text-2xl font-semibold mb-10">Social Accounts</h3>
        <div className="flex justify-between items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="text-white border bg-[#1877F2] w-16 h-16 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <FaFacebookF size={35} />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-lg font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <div className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </div>
        </div>

        <div className="flex justify-between items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="text-white border bg-[#05d686] w-16 h-16 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <SiNaver size={35} />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-lg font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <div className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </div>
        </div>

        <div className="flex justify-between items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="relative text-black/80  border bg-[#FEE500] w-16 h-16 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <Image src={`/kakaotalk_sharing_btn_medium.png`} fill />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-lg font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <div className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </div>
        </div>

        <div className="flex justify-between items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="text-white border instagram w-16 h-16 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <SiInstagram size={35} />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-lg font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <div className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </div>
        </div>

        <div className="flex justify-between items-center border-b py-2.5">
          {/* Login Icon */}
          <div className="flex items-center gap-2">
            <div className="text-[#1DA1F2] border bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
              <SiTwitter size={35} />
            </div>
            <div className=" leading-none">
              <div className="tracking-tighter text-lg font-medium">
                Facebook Account
              </div>
              <div className="text-lg tracking-tighter px-2">
                www.facebook.com/test
              </div>
            </div>
          </div>
          <div className="py-2.5 px-3 w-32 text-center bg-blue-50 text-black rounded-xl text-lg hover:bg-blue-600 hover:text-white cursor-pointer">
            Disconnect
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialAccount;
