"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface NavBarLink {
  [key: string]: {
    title: string;
    href: string;
    selected: boolean;
  };
}

export type HeaderProps = {};

function setNavBarLinks(title: string) {
  const navBarLinks: NavBarLink = {
    "/": {
      title: "Home",
      href: "/",
      selected: title === "Home",
    },
    "/projects": {
      title: "Projects",
      href: "/",
      selected: title === "Projects",
    },
    "/aboutme": {
      title: "About",
      href: "/",
      selected: title === "About",
    },
    "/contact": {
      title: "Contact",
      href: "",
      selected: title === "Contact",
    },
  };

  return navBarLinks;
}

export const Header = (props: HeaderProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [navBarLinks, setNavBarLinksState] = useState<NavBarLink>(
    setNavBarLinks("Home")
  );
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    let page: string = "";
    switch (pathname) {
      case "/":
        page = "Home";
        break;
      case "/aboutme":
        page = "About";
        break;
      case "/projects":
        page = "Projects";
        break;
      case "/contact":
        page = "Contact";
        break;
      default:
        page = "Home";
        break;
    }
    setNavBarLinksState(setNavBarLinks(page));
  }, [pathname, searchParams]);

  const handleBurgerClick = () => {
    setOpened(!opened);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white bg-opacity-75 backdrop-blur-md z-10">
      <div className="w-full flex flex-col h-full px-[10%] pt-[3%] md:pt-[1.5%]">
        <div className="flex items-center justify-between flex-grow w-full">
          {/* Title */}
          <Link
            className="poppins-bold text-lg text-primary transition-all"
            href="/"
          >
            NexTemplate.
          </Link>
          {/* Links */}
          <div className="hidden md:flex items-center justify-end gap-10 text-primary text-lg transition-all">
            {Object.keys(navBarLinks).map((key) => {
              const link = navBarLinks[key];
              return (
                <Link
                  key={link.title}
                  className={
                    link.selected
                      ? "opacity-100 poppins-bold"
                      : "opacity-50 transition-all hover:opacity-80 poppins-medium"
                  }
                  href={link.href}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div
            className="md:hidden text-primary cursor-pointer flex items-center justify-center w-10 h-10 text-[#2a17ff] transition-all"
            onClick={handleBurgerClick}
          >
            <div
              className={cn(
                `tham tham-e-squeeze tham-w-6 transition-all rounded-lg`,
                {
                  "tham-active": opened,
                }
              )}
            >
              <div className="tham-box transition-all rounded-lg">
                <div className="tham-inner bg-[#2a17ff] transition-all rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        {opened && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col items-start p-4">
              {Object.keys(navBarLinks).map((key) => {
                const link = navBarLinks[key];
                return (
                  <Link
                    key={link.title}
                    className={
                      link.selected
                        ? "opacity-100 poppins-bold my-2"
                        : "opacity-50 transition-all hover:opacity-80 poppins-medium my-2"
                    }
                    href={link.href}
                    onClick={() => setOpened(false)}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        <hr className="bg-[#2a17ff] border-0 h-[1.5px] opacity-10 mt-2 md:mt-4 rounded-full w-full" />
      </div>
    </div>
  );
};
