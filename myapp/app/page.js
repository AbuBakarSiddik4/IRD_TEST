import Middle from "@/components/Middle";
import Rightbar from "@/components/Rightbar";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <main className="bg-gray-200 text-gray-700">
      <div className="grid grid-cols-12">
        <div className="hidden md:block md:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-11 md:col-span-9 xl:col-span-8">
          <Middle />
        </div>
        <div className="col-span-2 xl:col-span-3 ">
          <Rightbar />
        </div>
      </div>
    </main>
  );
}
