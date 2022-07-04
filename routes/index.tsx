/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md flex flex-col gap-4 items-center`}>
      <img
        src="/logo.svg"
        height="100px"
        class={tw`pt-8`}
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6 text-2xl text-center font-bold text-gray-800`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
