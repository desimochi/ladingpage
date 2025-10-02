export default function Companies() {
  return (
    <section className="logos-section overflow-hidden bg-gradient-to-r from-blue-100 to-yellow-200 py-16 rounded-2xl font-sans px-3 sm:px-0">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
          Our Top Recruitment Partners
        </h2>
        <p className="text-gray-900 max-w-7xl mx-auto">
          Leading companies trust Taxila graduates. Our students are recruited
          by top organizations across various industries.
        </p>
      </div>

      <div className="relative fade-gradient overflow-hidden">
        {/* Animate wrapper */}
        <div className="scroll-container flex items-center whitespace-nowrap animate-scroll">
          {[
            "PwC",
            "Hindustan Uniliver",
            "Asian Paints",
            "Citi Bank",
            "Accenture",
            "Berger Paints",
            "Deloitte",
            "KPMG",
            "Zorastrian Bank",
            "Yes Bank",
            "Moodys",
            "Govt. of Rajasthan",
            "PwC",
            "Hindustan Uniliver",
            "Asian Paints",
            "Citi Bank",
            "Accenture",
            "Berger Paints",
            "Deloitte",
            "KPMG",
            "Zorastrian Bank",
            "Yes Bank",
            "Moodys",
            "Govt. of Rajasthan",
          ].map((company, i) => (
            <div key={i} className="logo-item flex-shrink-0">
              <div className="border-r-2 p-6 h-20 flex items-center justify-center min-w-[160px]">
                <div className="text-xl md:text-2xl font-bold text-gray-900">
                  {company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
