export default function HireSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans">
      {/* Left Side - Job Seekers */}
      <div className="bg-blue-500 text-white p-10 flex flex-col justify-center">
        <div className="mb-4">
          <span className="bg-yellow-400 text-black font-bold px-4 py-1 uppercase text-sm">Jobseekers</span>
        </div>
        <h1 className="text-4xl font-semibold mb-2">Work Remotely From Home.</h1>
        <p className="text-2xl font-bold">47693</p>
        <p className="mb-6">posted jobs, freely searchable, explore top work-from-home opportunities!</p>

        <div className="space-y-4">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 w-full text-left">Find Remote Jobs →</button>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 w-full text-left">Take Skills Tests →</button>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 w-full text-left">Receive Weekly Job Alerts →</button>
        </div>
      </div>

      {/* Right Side - Employers */}
      <div className="bg-yellow-400 text-white p-10 flex flex-col justify-center">
        <div className="mb-4">
          <span className="bg-blue-400 text-black font-bold px-4 py-1 uppercase text-sm">Employers</span>
        </div>
        <h1 className="text-4xl font-bold">Hire Smarter.</h1>
        <p className="text-2xl font-light mb-2">Build your Dream Team.</p>
        <p className="text-2xl font-bold">70053</p>
        <p className="mb-6 text-sm">job candidates in our database to be discovered, or sign up to post a free job.</p>

        <div className="space-y-4">
          <button className="bg-white text-yellow-400 font-semibold px-6 py-3 rounded hover:bg-yellow-500 w-full text-left">Remote Worker Database →</button>
          <button className="bg-white text-yellow-400 font-semibold px-6 py-3 rounded hover:bg-yellow-500 w-full text-left">Post Remote Jobs →</button>
          <button className="bg-white text-yellow-400  font-semibold px-6 py-3 rounded hover:bg-yellow-500 w-full text-left">Get Free Hiring Help →</button>
        </div>
      </div>
    </div>
  );
}
