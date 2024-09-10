import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const activeProps = {
  style: {
    fontWeight: "bold",
  },
};

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="pb-4">
        <div className="flex justify-between">
          <div className="flex pl-2 gap-10 items-start">
            <div className="flex flex-col font-rmono text-almostblack cursor-default">
              <h1 className="font-bold uppercase text-xl leading-none">
                4RealState
              </h1>
              <h2 className="text-xs">Property Management</h2>
            </div>
            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link to="/" activeProps={activeProps}>
                    Portfolio
                  </Link>
                </li>
                <li className="cursor-default">About</li>
                <li className="cursor-default">Contact</li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <div>
              <SignedIn>
                <nav id="admin-nav" className="flex justify-between gap-6">
                  <ul className="flex gap-4">
                    <li className="uppercase font-rmono bg-bggray py-1 px-2 text-almostblack">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-5 pt-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                      </svg>
                    </li>

                    <li className="uppercase font-rmono bg-bggray hover:bg-accent py-1 px-2.5 text-almostblack">
                      <Link to="/files" activeProps={activeProps}>
                        Files
                      </Link>
                    </li>
                    <li className="uppercase font-rmono bg-bggray hover:bg-accent py-1 px-2.5 text-almostblack">
                      <Link to="/dashboard" activeProps={activeProps}>
                        Dashboard
                      </Link>
                    </li>
                  </ul>

                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-7 h-7",
                      },
                    }}
                  />
                </nav>
              </SignedIn>
            </div>
            <div>
              <SignedOut>
                <SignInButton forceRedirectUrl="/dashboard">
                  <button className="uppercase font-rmono bg-bggray hover:bg-accent py-1 px-2.5 text-almostblack">
                    Admin
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </header>
      <ToastContainer />
      <Outlet />
    </>
  ),
});
