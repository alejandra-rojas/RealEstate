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
      <header>
        <div className="flex justify-between">
          <div className="flex gap-10">
            <h1>RealEstate Mgmt</h1>
            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link to="/" activeProps={activeProps}>
                    Homepage
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard" />
            </SignedOut>
          </div>
        </div>
        <SignedIn>
          <nav id="admin-nav" className="flex justify-between">
            <ul className="flex gap-4">
              <li>
                <Link to="/dashboard" activeProps={activeProps}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/files" activeProps={activeProps}>
                  Files
                </Link>
              </li>
              <li>
                <Link to="/new" activeProps={activeProps}>
                  New
                </Link>
              </li>
            </ul>

            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8",
                },
              }}
            />
          </nav>
        </SignedIn>
      </header>
      <ToastContainer />
      <Outlet />
    </>
  ),
});
