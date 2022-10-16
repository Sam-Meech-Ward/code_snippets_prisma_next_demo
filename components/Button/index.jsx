import { twMerge } from "tailwind-merge"

export default function Button({ children, className, ...props }) {
  const merged = twMerge(
    "mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    className
  )
  return (
    <button
      {...props}
      className={merged}>
      {children}
    </button>
  )
}