import ResetPassword from "@/components/Auth/ResetPassword";
import React from "react";
import createClient from "src/lib/supabase-server";

const page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <ResetPassword />
    </div>
  );
};

export default page;
