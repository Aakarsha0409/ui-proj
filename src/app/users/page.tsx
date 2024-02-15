import React from "react";
import Userlist from "./Userlist";
import ModuleHeader from "@/components/moduleHeader";

export default async function Intel() {
  return (
    <div className="w-full p-8">
      <div className="pb-8">
        <ModuleHeader
          title="Integrations"
          action={{
            label: "Add Users",
            href: "/user/add",
          }}
        />
      </div>
      <Userlist />
    </div>
  );
}
