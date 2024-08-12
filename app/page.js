import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/people" className="text-black tracking-[2px] bg-white"> Let's Go to Blogs </Link>
    </main>
  );
}
