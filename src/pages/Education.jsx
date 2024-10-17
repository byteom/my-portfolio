const Education = () => {
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-extrabold text-teal-600 text-center mb-8">Education</h2>
        <div className="space-y-8">
          {/* B.Tech in Computer Science */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">B.Tech in Computer Science</h3>
            <p className="text-lg text-teal-600">Lovely Professional University, Punjab</p>
            <p className="text-gray-600">Expected Graduation: May 2026</p>
          </div>
          {/* High School Diploma */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">High School Diploma</h3>
            <p className="text-lg text-teal-600">Harmony International School, Bihar</p>
            <p className="text-gray-600">Graduation: May 2021</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Education;
  