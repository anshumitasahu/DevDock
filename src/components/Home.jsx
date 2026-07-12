import TopBar from "./home/topbar";
import AppsBar from "./home/AppsBar";

export default function Home() {
    return (
        <div className="flex flex-col justify-between w-[100vw] h-[100vh]">
            <TopBar />
            <AppsBar />
        </div>
    );
}