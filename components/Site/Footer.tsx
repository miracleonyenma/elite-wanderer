"use client";
import Link from "next/link";
import SiteThemeButton from "./ThemeButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import ShinyText from "../react-bits/ShinyText";

export function Footer() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Newsletter subscription:", values);
      // Here you would typically call your API
      resetForm();
    },
  });

  return (
    <footer className="overflow-hidden bg-white px-6 pt-24 pb-4 text-black md:px-12 dark:bg-neutral-950 dark:text-neutral-200">
      <div className="mx-auto mb-24 grid max-w-screen-2xl grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
        <div className="col-span-2 space-y-6 md:col-span-1">
          <h3 className="font-heading text-xl font-bold tracking-widest uppercase dark:text-white">
            Experience
          </h3>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
            Redefining luxury travel and global relocation for the discerning
            few.
          </p>

          <div className="flex flex-col gap-1 text-sm text-neutral-500">
            <p className="font-medium text-black dark:text-white">
              22 Glover Road, Ikoyi, Lagos
            </p>
            <p>+234 912 153 5952</p>
            <p>support@theelitewanderer.com</p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="flex max-w-xs flex-col gap-1 pt-4"
          >
            <div className="relative flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Join our newsletter"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm transition-colors placeholder:text-neutral-400 focus:border-black focus:outline-none dark:border-neutral-700 dark:focus:border-white"
                />
              </div>
              <button
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                className="p-2 text-neutral-400 transition-colors hover:text-black disabled:cursor-not-allowed disabled:opacity-50 dark:hover:text-white"
                aria-label="Subscribe"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="pl-1 text-[10px] font-medium text-red-500">
                {formik.errors.email}
              </div>
            ) : null}
          </form>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <Link
                href="/travel"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Private Jets
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Real Estate
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Marketplace
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/platinum-club"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold tracking-widest uppercase">
            Legal
          </h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <Link
                href="/legal/privacy"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms"
                className="transition-colors hover:text-black dark:hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Massive Brand Name */}
      <div className="w-full overflow-clip border-t border-neutral-100 pt-8 dark:border-neutral-800">
        <ShinyText
          text="The Elite Wanderer"
          className="text-center font-heading text-[12vw] leading-[0.8] font-black tracking-tighter text-app-theme-300 uppercase transition-colors select-none xl:text-[14vw] dark:text-app-theme-700"
        />
      </div>

      <div className="mt-8 flex justify-between text-[10px] tracking-widest text-neutral-400 uppercase">
        <span>&copy; {new Date().getFullYear()} The Elite Wanderer</span>
        <span className="text-right">Designed for the Extraordinary</span>
      </div>
      <div className="mt-4 flex justify-end">
        <SiteThemeButton />
      </div>
    </footer>
  );
}
