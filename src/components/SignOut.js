"use client";

import { useAuth } from "./AuthProvider";

export default function SignOut() {
  const { signOut } = useAuth();

  async function handleSignOut() {
    const { error } = await signOut();

    if (error) {
      console.error("ERROR signing out:", error);
    }
  }

  return (
    <button
      type="button"
      className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-blue-700"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}
