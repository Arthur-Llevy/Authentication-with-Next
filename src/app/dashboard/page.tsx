import { getServerSession } from "next-auth";
import { LogoutButton } from "../components/LogoutButton";

export default async function Dashboard() {
    const session = await getServerSession();

    return (
        <div className="flex flex-col gap-10 h-screen items-center justify-center">
            <h1>Olá, {session?.user?.name}</h1>
            <LogoutButton />
        </div>
    );
}