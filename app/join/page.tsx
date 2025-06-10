'use client'
import React from "react";

export default function Page() {
    const [showPopup1, setShowPopup1] = React.useState(false);
    const [showPopup2, setShowPopup2] = React.useState(false);
    const [showPopup3, setShowPopup3] = React.useState(false);
    const [showSidebar, setShowSidebar] = React.useState(false);
    return (
        
        
        <div className="max-w-xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">How To Join Duneraft</h1>
            <p className="mb-4 text-white-700">
            server ip: dualie.ink
            </p>

            <p className="mb-4 text-white-700">
            backup ip: 104.57.69.137
            </p>

            <p className="mb-4 text-white-700">
            version: 1.21.5
            </p>
            {/* Sidebar Toggle Button with Symbol */}
            <button
                className="fixed top-4 left-4 z-50 bg-gray-800 text-white px-3 py-2 rounded-lg shadow hover:bg-gray-700 sm:hidden flex items-center"
                onClick={() => setShowSidebar((prev) => !prev)}
                aria-label={showSidebar ? "Close Menu" : "Open Menu"}
            >
                <svg
                    className="w-6 h-6 mr-2"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
                
            </button>

            {/* Sidebar */}
            <aside
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    showSidebar ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0 bg-gray-800 dark:bg-gray-800`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium" style={{ marginTop: "50px" }}>
                        <li>
                            <a
                            href="http://localhost:3000"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3 text-white"> Home Page </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/wiki"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3 text-white"> Wiki </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/events"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3 text-white"> Events </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/map"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3 text-white"> Web Map </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/redstone"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3 text-white"> Redstone Tech </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            
            {/* Popup Trigger */}
            <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center
                     bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition font-medium text-sm sm:text-base h-10 sm:h-12 px-4
                     sm:px-5 w-full sm:w-auto md:w-auto"
            onClick={() => setShowPopup1(true) 
            }
            >
            Need whitelist?
            </button>

        {/* Popup Modal */}
        {showPopup1 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Are you using an official Minecraft account?</h2>
                <div className="flex flex-col gap-4">
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center
                     bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition font-medium text-sm sm:text-base h-10 sm:h-12 px-4
                     sm:px-5 w-full sm:w-auto md:w-auto"
                    onClick={() => {setShowPopup2(true)        
                        setShowPopup1(false);
                    }}
                >
                    Yes
                </button>
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center
                     bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition font-medium text-sm sm:text-base h-10 sm:h-12 px-4
                     sm:px-5 w-full sm:w-auto md:w-auto"
                    onClick={() => {setShowPopup3(true)
                    // Option 2 handler
                    setShowPopup1(false);
                    }}
                >
                    No
                </button>
                <button
                    className="mt-2 text-gray-500 hover:underline"
                    onClick={() => setShowPopup1(false)}
                >
                    Cancel
                </button>
                </div>
            </div>
            </div>
        )}
         {/* Popup Modal */}
        {showPopup2 && (
             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                
                <div className="flex flex-col gap-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    placeholder="Enter your Minecraft ID"
                />
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center
                     bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition font-medium text-sm sm:text-base h-10 sm:h-12 px-4
                     sm:px-5 w-full sm:w-auto md:w-auto"
                    
                    onClick={() => {
                    // Option 2 handler
                    setShowPopup2(false);
                    }}
                >
                    Enter
                </button>
                <button
                    className="mt-2 text-gray-500 hover:underline"
                    
                    onClick={() => {setShowPopup2(false)
                        setShowPopup1(true);}
                    }
                >
                    Back
                </button>
                </div>
            </div>
            </div>
        )}
         {showPopup3 && (
             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                
                <div className="flex flex-col gap-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    placeholder="register/login drasl account"
                />
                <button
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center
                     bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] transition font-medium text-sm sm:text-base h-10 sm:h-12 px-4
                     sm:px-5 w-full sm:w-auto md:w-auto"
                    
                    onClick={() => {setShowPopup3(false);}}
                >
                    Enter
                </button>
                <button
                    className="mt-2 text-gray-500 hover:underline"
                    
                    onClick={() => {setShowPopup3(false)
                        setShowPopup1(true);}
                    }
                >
                    Back
                </button>
                </div>
            </div>
            </div>
        )}
        

        

        {/* Main Content */}
        </div>
)
}