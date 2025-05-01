import React from 'react';
import portfolioData from "@/data/portfolioData";

export default function Testimonials() {
  // Create testimonial data structure - we'll update the data file later
  const testimonials = portfolioData.testimonials || [
    {
      name: "John Doe",
      position: "CEO, Tech Innovations",
      company: "Tech Innovations",
      text: "Rishav is an exceptional talent who consistently delivers high-quality solutions. His technical expertise and problem-solving skills make him an invaluable asset to any team.",
      image: "/images/testimonial1.jpg" 
    },
    {
      name: "Jane Smith",
      position: "CTO, DataViz Corp",
      company: "DataViz Corp",
      text: "Working with Rishav was a game-changer for our data visualization projects. His innovative approach and attention to detail resulted in solutions that exceeded our expectations.",
      image: "/images/testimonial2.jpg"
    },
    {
      name: "Michael Johnson",
      position: "Project Manager, Enterprise Solutions",
      company: "Enterprise Solutions",
      text: "Rishav's technical leadership and cloud expertise transformed our infrastructure. He has a unique ability to align technology solutions with business objectives, driving significant value.",
      image: "/images/testimonial3.jpg"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Client Testimonials</h1>
          
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col border border-gray-100">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 border-2 border-blue-100 shadow-md">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white text-2xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="ml-6">
                      <h3 className="font-bold text-2xl text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <div className="flex items-center">
                        <p className="text-blue-600 font-medium">{testimonial.company}</p>
                        {testimonial.location && (
                          <p className="text-gray-500 ml-2">
                            <span className="mx-1">•</span>
                            {testimonial.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-blue-200 hidden md:block">
                    <svg className="w-12 h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="my-6 pl-4 border-l-4 border-blue-100">
                  <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 font-medium tracking-wider px-3 py-1 bg-gray-100 rounded-full">VERIFIED CLIENT</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              These are just a few of the clients I've had the pleasure of working with. I pride myself on building strong professional relationships and delivering results that exceed expectations.
            </p>
            <a 
              href="mailto:chatterjeerishav96@gmail.com" 
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Request a Reference
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}