import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2093.82%2074.67%22%3E%3Cg%20data-name%3D%22Ebene%202%22%3E%3Cg%20data-name%3D%22ICON%2016%22%3E%3Cpath%20fill%3D%22%23eeecec%22%20d%3D%22M87.7%2C14V5.46A4.46%2C4.46%2C0%2C0%2C0%2C83.24%2C1H8A4.46%2C4.46%2C0%2C0%2C0%2C3.49%2C5.46V54.51h31l1.88%2C3H54.86l2.23-3H88.58Z%22%2F%3E%3Cg%20opacity%3D%22.5%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.45%2C7.42A4.46%2C4.46%2C0%2C0%2C1%2C9.91%2C3H85.2a4.4%2C4.4%2C0%2C0%2C1%2C2%2C.5%2C4.44%2C4.44%2C0%2C0%2C0-4-2.46H8A4.46%2C4.46%2C0%2C0%2C0%2C3.49%2C5.46V54.51h2Z%22%2F%3E%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2236.41%2056.47%2035.68%2056.47%2036.33%2057.5%2037.05%2057.5%2036.41%2056.47%22%2F%3E%3C%2Fg%3E%3Cpolygon%20points%3D%2255.09%2052.44%2052.86%2055.42%2038.33%2055.42%2035.68%2052.44%203.49%2052.44%203.49%2055.18%2034.45%2055.18%2036.33%2058.17%2054.86%2058.17%2057.09%2055.18%2088.58%2055.18%2088.52%2052.44%2055.09%2052.44%22%20opacity%3D%22.1%22%2F%3E%3Cpath%20fill%3D%22%2339d5ff%22%20d%3D%22M92.82%2C17V70.69a3%2C3%2C0%2C0%2C1-3%2C3H63a3%2C3%2C0%2C0%2C1-3-3V17a3%2C3%2C0%2C0%2C1%2C1.17-2.37A2.93%2C2.93%2C0%2C0%2C1%2C63%2C14H89.84A3%2C3%2C0%2C0%2C1%2C92.82%2C17Z%22%2F%3E%3Cpath%20d%3D%22M89.84%2C14H63a2.93%2C2.93%2C0%2C0%2C0-1.81.62A3%2C3%2C0%2C0%2C0%2C60%2C17V70.69a3%2C3%2C0%2C0%2C0%2C3%2C3H89.84a3%2C3%2C0%2C0%2C0%2C3-3V17A3%2C3%2C0%2C0%2C0%2C89.84%2C14Zm1%2C56.73a1%2C1%2C0%2C0%2C1-1%2C1H63a1%2C1%2C0%2C0%2C1-1-1V17a1%2C1%2C0%2C0%2C1%2C.38-.77A.94.94%2C0%2C0%2C1%2C63%2C16H89.84a1%2C1%2C0%2C0%2C1%2C1%2C1Z%22%20opacity%3D%22.1%22%2F%3E%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2292.44%2067.69%2087.91%2067.69%2072.08%2013.96%2076.61%2013.96%2092.44%2067.69%22%20opacity%3D%22.5%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M83.32%2C67.69H76.8L61.16%2C14.58A2.93%2C2.93%2C0%2C0%2C1%2C63%2C14H67.5Z%22%20opacity%3D%22.5%22%2F%3E%3Cpath%20fill%3D%22%23eeecec%22%20d%3D%22M92.82%2C64.71v6a3%2C3%2C0%2C0%2C1-3%2C3H63a3%2C3%2C0%2C0%2C1-3-3V64.86a3%2C3%2C0%2C0%2C0%2C3%2C2.83H89.84A3%2C3%2C0%2C0%2C0%2C92.82%2C64.71Z%22%2F%3E%3Cpolygon%20fill%3D%22%23eeecec%22%20points%3D%2283.97%2018.78%2069.86%2018.78%2068.3%2014.08%2085.53%2014.08%2083.97%2018.78%22%2F%3E%3Cpath%20fill%3D%22%23060e38%22%20d%3D%22M84%2C19.78H69.86a1%2C1%2C0%2C0%2C1-.94-.68l-1.57-4.7a1%2C1%2C0%2C0%2C1%2C.14-.91%2C1%2C1%2C0%2C0%2C1%2C.81-.41H85.53a1%2C1%2C0%2C0%2C1%2C.81.41%2C1%2C1%2C0%2C0%2C1%2C.14.91l-1.57%2C4.7A1%2C1%2C0%2C0%2C1%2C84%2C19.78Zm-13.38-2H83.24l.9-2.7H69.68Z%22%2F%3E%3Cpath%20fill%3D%22%23060e38%22%20d%3D%22M89.84%2C74.67H63a4%2C4%2C0%2C0%2C1-4-4V17a4%2C4%2C0%2C0%2C1%2C4-4H89.84a4%2C4%2C0%2C0%2C1%2C4%2C4V70.68A4%2C4%2C0%2C0%2C1%2C89.84%2C74.67ZM63%2C15a2%2C2%2C0%2C0%2C0-2%2C2V70.68a2%2C2%2C0%2C0%2C0%2C2%2C2H89.84a2%2C2%2C0%2C0%2C0%2C2-2V17a2%2C2%2C0%2C0%2C0-2-2Z%22%2F%3E%3Cpath%20fill%3D%22%23060e38%22%20d%3D%22M89.84%2C68.69H63A4%2C4%2C0%2C0%2C1%2C59%2C65a2%2C2%2C0%2C0%2C1%2C0-.25%2C1%2C1%2C0%2C0%2C1%2C2%2C0H60l1%2C0a2%2C2%2C0%2C0%2C0%2C2%2C2H89.84a2%2C2%2C0%2C0%2C0%2C2-2%2C1%2C1%2C0%2C0%2C1%2C2%2C0A4%2C4%2C0%2C0%2C1%2C89.84%2C68.69Z%22%2F%3E%3Ccircle%20cx%3D%2276.41%22%20cy%3D%2270.68%22%20r%3D%221.49%22%20fill%3D%22%23060e38%22%2F%3E%3Cpath%20fill%3D%22%23060e38%22%20d%3D%22M89.84%2C74.66H63a4%2C4%2C0%2C0%2C1-4-4V17a4%2C4%2C0%2C0%2C1%2C4-4H89.84a4%2C4%2C0%2C0%2C1%2C4%2C4V70.69A4%2C4%2C0%2C0%2C1%2C89.84%2C74.66ZM63%2C15a2%2C2%2C0%2C0%2C0-2%2C2V70.69a2%2C2%2C0%2C0%2C0%2C2%2C2H89.84a2%2C2%2C0%2C0%2C0%2C2-2V17a2%2C2%2C0%2C0%2C0-2-2Z%22%2F%3E%3Cpath%20fill%3D%22gray%22%20d%3D%22M60%2C54.51v7.81H5.46A4.46%2C4.46%2C0%2C0%2C1%2C1%2C57.86V54.51H34.1l2.23%2C3H54.86l2.23-3Z%22%2F%3E%3Cg%20opacity%3D%22.5%22%3E%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2257.03%2055.56%2057.81%2054.51%2057.09%2054.51%2056.31%2055.56%2057.03%2055.56%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.17%2C60.38a2%2C2%2C0%2C0%2C1-2-2V54.51H1v3.35a4.46%2C4.46%2C0%2C0%2C0%2C4.46%2C4.46H60V60.38Z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23060e38%22%20d%3D%22M60%2C63.32H5.46A5.47%2C5.47%2C0%2C0%2C1%2C0%2C57.86V54.51a1%2C1%2C0%2C0%2C1%2C1-1H34.1a1%2C1%2C0%2C0%2C1%2C.8.41l1.93%2C2.58H54.36l1.93-2.58a1%2C1%2C0%2C0%2C1%2C.8-.41H60a1%2C1%2C0%2C0%2C1%2C1%2C1v7.81A1%2C1%2C0%2C0%2C1%2C60%2C63.32ZM2%2C55.51v2.35a3.46%2C3.46%2C0%2C0%2C0%2C3.46%2C3.46H59V55.51h-1.4L55.66%2C58.1a1%2C1%2C0%2C0%2C1-.8.4H36.33a1%2C1%2C0%2C0%2C1-.8-.4L33.6%2C55.51Z%22%2F%3E%3Cpath%20fill%3D%22%2339d5ff%22%20d%3D%22M83.24%2C7.69V14H63a3%2C3%2C0%2C0%2C0-3%2C3v33.1H10.18A2.23%2C2.23%2C0%2C0%2C1%2C8%2C47.82V7.69a2.23%2C2.23%2C0%2C0%2C1%2C2.23-2.23H81A2.23%2C2.23%2C0%2C0%2C1%2C83.24%2C7.69Z%22%2F%3E%3Cpath%20d%3D%22M81%2C5.46H10.18A2.23%2C2.23%2C0%2C0%2C0%2C8%2C7.69V47.82a2.23%2C2.23%2C0%2C0%2C0%2C2.23%2C2.23H60V17a3%2C3%2C0%2C0%2C1%2C3-3H83.24V7.69A2.23%2C2.23%2C0%2C0%2C0%2C81%2C5.46ZM81.24%2C11a1%2C1%2C0%2C0%2C1-1%2C1H63a5%2C5%2C0%2C0%2C0-5%2C5v31.1H11a1%2C1%2C0%2C0%2C1-1-1V8.46a1%2C1%2C0%2C0%2C1%2C1-1H80.24a1%2C1%2C0%2C0%2C1%2C1%2C1Z%22%20opacity%3D%22.1%22%2F%3E%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2257.56%2050.05%2051.98%2050.05%2031.98%205.46%2037.56%205.46%2057.56%2050.05%22%20opacity%3D%22.5%22%2F%3E%3Cpolygon%20fill%3D%22%23fff%22%20points%3D%2246.33%2050.05%2038.3%2050.05%2018.3%205.46%2026.33%205.46%2046.33%2050.05%22%20opacity%3D%22.5%22%2F%3E%3Cpath%20fill%3D%22%23060e38%22%20d%3D%22M60%2C51.05H10.18A3.23%2C3.23%2C0%2C0%2C1%2C7%2C47.82V7.69a3.23%2C3.23%2C0%2C0%2C1%2C3.23-3.23H81a3.23%2C3.23%2C0%2C0%2C1%2C3.23%2C3.23V14a1%2C1%2C0%2C0%2C1-1%2C1H63a2%2C2%2C0%2C0%2C0-2%2C2v33.1A1%2C1%2C0%2C0%2C1%2C60%2C51.05ZM10.18%2C6.46A1.23%2C1.23%2C0%2C0%2C0%2C9%2C7.69V47.82a1.23%2C1.23%2C0%2C0%2C0%2C1.23%2C1.23H59V17a4%2C4%2C0%2C0%2C1%2C4-4H82.24V7.69A1.23%2C1.23%2C0%2C0%2C0%2C81%2C6.46Z%22%2F%3E%3Cpath%20fill%3D%22%23060e38%22%20d%3D%22M89.84%2C74.67H63a4%2C4%2C0%2C0%2C1-4-4V17a4%2C4%2C0%2C0%2C1%2C4-4H89.84a4%2C4%2C0%2C0%2C1%2C4%2C4V70.69A4%2C4%2C0%2C0%2C1%2C89.84%2C74.67ZM63%2C15a2%2C2%2C0%2C0%2C0-2%2C2V70.69a2%2C2%2C0%2C0%2C0%2C2%2C2H89.84a2%2C2%2C0%2C0%2C0%2C2-2V17a2%2C2%2C0%2C0%2C0-2-2Z%22%2F%3E%3Cpath%20fill%3D%22%23060e38%22%20d%3D%22M89.84%2C74.67H63a4%2C4%2C0%2C0%2C1-4-4V17a4%2C4%2C0%2C0%2C1%2C4-4H89.84a4%2C4%2C0%2C0%2C1%2C4%2C4V70.69A4%2C4%2C0%2C0%2C1%2C89.84%2C74.67ZM63%2C15a2%2C2%2C0%2C0%2C0-2%2C2V70.69a2%2C2%2C0%2C0%2C0%2C2%2C2H89.84a2%2C2%2C0%2C0%2C0%2C2-2V17a2%2C2%2C0%2C0%2C0-2-2Z%22%2F%3E%3Cpath%20fill%3D%22%23060e38%22%20d%3D%22M60%2055.51H59a1%201%200%200%201%200-2h1a1%201%200%200%201%200%202zM34.1%2055.51H3.49a1%201%200%200%201-1-1v-49A5.47%205.47%200%200%201%208%200H83.24A5.47%205.47%200%200%201%2088.7%205.46V14a1%201%200%200%201-2%200V5.46A3.46%203.46%200%200%200%2083.24%202H8A3.46%203.46%200%200%200%204.49%205.46V53.51H34.1a1%201%200%200%201%200%202z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              alt="JOhn Buret"
            />
            <h5 className="mb-1  text-xl font-medium text-gray-900 dark:text-white">
              John Buret
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              FRONT-END DEVELOPER
            </span>
            <div className="flex mt-4 md:mt-6">
              <a
                href="https://github.com/johnburetdev"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View GitHub
              </a>
              <a
                href="https://wa.me/18295522142"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
