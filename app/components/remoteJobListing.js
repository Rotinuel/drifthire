const jobs = [
  {
    category: "HR & Recruiting",
    company: "Reeds Groups",
    title: "Data Entry And Typing.",
    logo: "/logos/reeds.png", // Replace with real image path or placeholder
    posted: "3 days ago",
  },
  {
    category: "Legal & Compliance",
    company: "Latitude",
    title: "California Employment Attorney",
    logo: "/logos/latitude.png",
    posted: "3 days ago",
  },
  {
    category: "Writing, Editing & Content",
    company: "DataCamp",
    title: "Data Science Editor",
    logo: "/logos/datacamp.png",
    posted: "6 days ago",
  },
  {
    category: "Design & Creative",
    company: "Clutch Merchandise LLC",
    title: "Graphic Designer (VA) - Custom Athlete Apparel",
    logo: "/logos/clutch.png",
    posted: "19 hours ago",
  },
];

export default function RemoteJobListings() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">Recent</h2>
      <h3 className="bg-blue-500 text-white inline-block px-6 py-2 rounded text-xl font-semibold mb-10">
        Remote Job Listings
      </h3>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow border w-[270px] text-left"
          >
            <div className="bg-blue-500 text-white font-bold text-sm px-4 py-2 flex justify-between items-center rounded-t">
              {job.category}
              <span>➔</span>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="font-medium">{job.company}</p>
              </div>
              <p className="font-semibold mb-4">{job.title}</p>
              <p className="text-sm text-blue-500 flex items-center gap-1">
                <span>🕒</span> {job.posted}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots (dummy) */}
      <div className="flex justify-center gap-2 mt-8">
        <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
      </div>

      <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded">
        Show All Jobs
      </button>
    </section>
  );
}
