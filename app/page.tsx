import DashboardCard from "@/components/ui/dashboard/DashboardCard";
import Image from "next/image";
import { Newspaper, Folder, Users, MessageCircle } from "lucide-react";
import PostsTable from "@/components/ui/posts/PostTable";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />

        <DashboardCard
          title="Categories"
          count={20}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<Users className="text-slate-500" size={72} />}
        />

        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>

      <PostsTable />
    </>
  );
}
