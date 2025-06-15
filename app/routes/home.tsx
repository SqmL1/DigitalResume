import type { Route } from "./+types/home";
import { Main } from "../welcome/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Digital Resume" },
    { name: "Samuil Iordachi's Digital Resume", content: "My resume!" },
  ];
}

export default function Home() {
  return <Main />;
}
