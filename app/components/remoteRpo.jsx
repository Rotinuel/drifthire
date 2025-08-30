import Image from 'next/image';

export default function RemoteRPO() {
  return (
    <section className="p-8 bg-white shadow-lg rounded-lg text-justify">
      <h2 className=" lg:text-[36px] lg:leading-[42px] font-semibold font-montserrat mb-18">
        Choose our <span className='text-[#439fe4]'>Remote RPO Option</span> and Let Us Do the Sourcing
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className="flex flex-col items-center justify-between rounded-xl shadow-xl">
          <Image
            src="/people.png"
            alt="Laptop Image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className='flex flex-col items-center text-align rounded-xl shadow-xl p-8'>
          <p className="text-sm lg:text-lg text-gray-700">
            Many employers on HireBasis post jobs and contact remote candidates
            directly from our global candidate pool.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            But if you’d rather not spend time sourcing or screening, our{' '}
            <strong className="text-blue-600">Remote RPO</strong> (Recruitment
            Process Outsourcing) solution offers an efficient alternative:
          </p>
          <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
            <li>Share your hiring needs and timelines</li>
            <li>We identify and engage top candidates from our global remote candidate pool</li>
            <li>
              You receive a curated shortlist of 3+ vetted professionals ready for
              interviews
            </li>
            <li>Only pay for candidates you choose to speak with</li>
          </ul>
          <p className="mt-4 text-lg text-gray-700">
            Once you’ve found your hire, we can help you onboard smoothly through
            trusted global platforms like OysterHR or Remote.com — making international
            hiring simple and compliant.
          </p>
          <p className='mt-2 font-bold text-[20px] leading-[28px]'>Ideal for busy teams hiring remotely, or those new to global recruitment.</p>
        </div>
      </div>
    </section>
  );
}
