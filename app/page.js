import HireSection from "./components/hireSection";
import RemoteJobListings from "./components/remoteJobListing";

export default function Home() {
  
  return (
    <>
      <main className="pt-16">
        <HireSection />
      </main>
      <RemoteJobListings />
    </>
  );
}
