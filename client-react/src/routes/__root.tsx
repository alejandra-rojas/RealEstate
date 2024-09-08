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
      <header className="flex justify-between">
        <div className="flex gap-10">
          <h1>RealEstate Mgmt</h1>
          <nav>
            <SignedIn>
              <ul className="flex gap-4">
                <li>
                  <Link to="/" activeProps={activeProps}>
                    Home
                  </Link>
                </li>
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
              </ul>
            </SignedIn>
          </nav>
        </div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8",
                },
              }}
            />
          </SignedIn>
        </div>
      </header>
      <Outlet />
    </>
  ),
});
