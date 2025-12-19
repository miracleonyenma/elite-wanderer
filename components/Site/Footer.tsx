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
    <footer className="bg-white dark:bg-neutral-950 text-black dark:text-neutral-200 pt-24 pb-4 px-6 md:px-12 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 max-w-screen-2xl mx-auto">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <h3 className="font-heading text-xl font-bold tracking-widest uppercase dark:text-white">
            Experience
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
            Redefining luxury travel and global relocation for the discerning
            few.
          </p>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-1 max-w-xs pt-4"
          >
            <div className="flex items-center gap-2 relative">
              <div className="relative flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Join our newsletter"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-2 text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-neutral-400"
                />
              </div>
              <button
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                className="p-2 text-neutral-400 hover:text-black dark:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="text-[10px] text-red-500 font-medium pl-1">
                {formik.errors.email}
              </div>
            ) : null}
          </form>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Private Jets
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Real Estate
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Marketplace
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-xs">
            Legal
          </h4>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Massive Brand Name */}
      <div className="border-t overflow-clip border-neutral-100 dark:border-neutral-800 pt-8 w-full">
        <ShinyText
          text="The Elite Wanderer"
          className="text-[12vw] xl:text-[14vw] font-heading font-black  leading-[0.8] tracking-tighter text-center uppercase select-none text-app-theme-300 dark:text-app-theme-700 transition-colors"
        />
      </div>

      <div className="mt-8 flex justify-between text-[10px] uppercase tracking-widest text-neutral-400">
        <span>&copy; {new Date().getFullYear()} The Elite Wanderer</span>
        <span className="text-right">Designed for the Extraordinary</span>
      </div>
      <div className="mt-4 flex justify-end">
        <SiteThemeButton />
      </div>
    </footer>
  );
}
