"use client";

import HeroSection from "@/components/Home/herosection";

import Auth from "src/components/Auth";
import { useAuth, VIEWS } from "src/components/AuthProvider";

export default function Home() {
  const { initial, user, view, signOut } = useAuth();

  if (initial) {
    return <div className="card h-72">Loading...</div>;
  }

  if (view === VIEWS.UPDATE_PASSWORD) {
    return <Auth view={view} />;
  }
  if (!user) {
    return (
      <>
        <HeroSection />
      </>
    );
  }

  if (user) {
    return (
      <div>
        <HeroSection />
      </div>
    );
  }

  return <Auth view={view} />;
}
