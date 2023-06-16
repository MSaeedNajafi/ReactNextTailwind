"use client";

import { usePathname } from "next/navigation";
import Layout from "../components/Layout";

export default function Page() {
  const pathname = usePathname();
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-8">
          Hello, About page!
        </h1>
        <p className="text-center mt-4">This is a sample home page.</p>

        <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">
            Current pathname: {pathname}
          </code>{" "}
        </p>
      </div>
    </Layout>
  );
}
