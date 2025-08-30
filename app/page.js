import HireSection from "./components/hireSection";
import RemoteJobListings from "./components/remoteJobListing";
import RemoteRPO from "./components/remoteRpo";
import RemoteStaff from "./components/remoteStaff";

export default function Home() {

  return (
    <>
      <main className="pt-16">
        <HireSection />
      </main>
      <RemoteJobListings />
      <main className="min-h-screen bg-gray-100">
        <RemoteRPO />
      </main>
      <RemoteStaff />
    </>
  );
}
