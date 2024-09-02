"use client";

import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/coursework");
  }, [router]);

  return <Loader />;
}
