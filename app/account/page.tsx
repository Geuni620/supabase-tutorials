import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {Database} from "@/types/supabase";
import AccountForm from "@/app/account/account-form";

export default async function Account() {
  const supabase = createServerComponentClient<Database>({cookies});

  const {
    data: {session},
  } = await supabase.auth.getSession();

  return <AccountForm session={session} />;
}
