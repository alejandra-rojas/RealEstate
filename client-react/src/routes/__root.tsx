import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import {
  Link,
  Outlet,
  createRootRoute,
  useRouter,
} from "@tanstack/react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const activeProps = {
  style: {
    fontWeight: "bold",
  },
};
const activeAdminProps = {
  style: {
    color: "#1f2937",
  },
};

export const Route = createRootRoute({
  component: () => (
    <>
      <Navigation />
      <ToastContainer />
      <Outlet />
    </>
  ),
});

function Navigation() {
  const router = useRouter();

  const [currentPath, setCurrentPath] = useState(
    router.state.location.pathname
  );

  useEffect(() => {
    const unsubscribe = router.subscribe("onResolved", ({ toLocation }) => {
      setCurrentPath(toLocation.pathname);
    });

    return () => unsubscribe();
  }, [router]);

  const isDashboard = currentPath === "/dashboard";
  const isPortfolio = currentPath === "/files";

  return (
    <header className="pb-6">
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
                  Properties
                </Link>
              </li>
              <li className="cursor-default">Our sevices</li>
              <li className="cursor-default">Contact</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div>
            <SignedIn>
              <nav id="admin-nav" className="flex justify-between gap-6">
                <ul className="flex gap-4">
                  <li className="uppercase font-rmono bg-gray-200 py-1 px-2 text-almostblack">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="#9ca3af"
                      className="size-5 pt-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>
                  </li>

                  <li
                    className={`uppercase font-rmono font-normal bg-gray-200 hover:bg-blue-200 py-1 px-2.5 ${
                      isPortfolio ? "bg-blue-200" : ""
                    } text-gray-400 hover:text-gray-900`}
                  >
                    <Link to="/files" activeProps={activeAdminProps}>
                      Portfolio
                    </Link>
                  </li>
                  <li
                    className={`uppercase font-rmono font-normal bg-gray-200 hover:bg-blue-200 py-1 px-2.5 ${
                      isDashboard ? "bg-blue-200" : ""
                    } text-gray-400 hover:text-gray-900`}
                  >
                    <Link to="/dashboard" activeProps={activeAdminProps}>
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
                <button className="uppercase font-rmono bg-bggray hover:bg-blue-200 py-1 px-2.5 text-almostblack">
                  Admin
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
