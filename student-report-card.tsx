import React from 'react';

const StudentReportCard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white relative" style={{fontFamily: 'serif'}}>
      {/* Decorative Border */}
      <div className="absolute inset-0 border-4 border-orange-300 m-2"></div>
      
      {/* Header Section */}
      <div className="relative z-10 mb-6">
        <div className="bg-yellow-50 p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            {/* Left Logo */}
            <div className="flex flex-col items-center w-24">
              <div className="w-16 h-16 rounded-full bg-orange-100 border-2 border-orange-300 flex items-center justify-center relative">
                <div className="w-6 h-0.5 bg-blue-900 absolute"></div>
                <div className="w-0.5 h-6 bg-blue-900 absolute"></div>
              </div>
              <span className="text-xs text-blue-900 mt-1">DBG Logo</span>
            </div>
            
            {/* Center Content */}
            <div className="text-center flex-1 mx-4">
              <h1 className="text-3xl font-bold text-blue-900 mb-1">DIVYA BIHAR GLOBAL GURUKULAM</h1>
              <h2 className="text-xl font-bold text-green-700 mb-2">(DBG Gurukulam)</h2>
              <p className="text-base mb-1">Raghopur, Supaul, Bihar – 852111</p>
              <p className="text-sm mb-1">Managed by: <span className="font-bold">Divya Bihar Mission</span></p>
              <p className="text-sm italic text-orange-500">Education with Yogic Values</p>
            </div>
            
            {/* Right Logo */}
            <div className="flex flex-col items-center w-24">
              <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-700 flex items-center justify-center relative">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500"></div>
              </div>
              <span className="text-xs text-blue-900 mt-1">DBM Logo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Title */}
      <div className="bg-orange-100 p-4 mb-6 text-center">
        <h3 className="text-xl font-bold text-blue-900 mb-1">JIGYASA ANVESHAN III – JULY 2025</h3>
        <h4 className="text-lg font-bold text-green-700">Monthly Assessment Report</h4>
      </div>

      {/* Student Information */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-400">
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-2 font-bold text-blue-900">Student Name: Shivansh Kumar</td>
              <td className="border border-gray-400 p-2 font-bold text-blue-900">Class: 4th</td>
              <td className="border border-gray-400 p-2 font-bold text-blue-900">Roll No: 12</td>
              <td className="border border-gray-400 p-2 font-bold text-blue-900">Month: July 2025</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 font-bold text-blue-900" colSpan="2">Father's Name: Ramesh Kumar</td>
              <td className="border border-gray-400 p-2 font-bold text-blue-900" colSpan="2">Mother's Name: Sunita Devi</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Academic Subjects */}
      <div className="mb-6">
        <h3 className="text-center text-lg font-bold text-green-700 mb-3">ACADEMIC SUBJECTS</h3>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="border border-gray-400 p-2 font-bold">Subject</th>
              <th className="border border-gray-400 p-2 font-bold">Raw Marks</th>
              <th className="border border-gray-400 p-2 font-bold">Total</th>
              <th className="border border-gray-400 p-2 font-bold">Scaled Marks</th>
              <th className="border border-gray-400 p-2 font-bold">Out of</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">Hindi</td>
              <td className="border border-gray-400 p-2 text-center">42</td>
              <td className="border border-gray-400 p-2 text-center">50</td>
              <td className="border border-gray-400 p-2 text-center">8.4</td>
              <td className="border border-gray-400 p-2 text-center">10</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">English</td>
              <td className="border border-gray-400 p-2 text-center">38</td>
              <td className="border border-gray-400 p-2 text-center">50</td>
              <td className="border border-gray-400 p-2 text-center">7.6</td>
              <td className="border border-gray-400 p-2 text-center">10</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Science</td>
              <td className="border border-gray-400 p-2 text-center">45</td>
              <td className="border border-gray-400 p-2 text-center">50</td>
              <td className="border border-gray-400 p-2 text-center">9.0</td>
              <td className="border border-gray-400 p-2 text-center">10</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Social Science</td>
              <td className="border border-gray-400 p-2 text-center">40</td>
              <td className="border border-gray-400 p-2 text-center">50</td>
              <td className="border border-gray-400 p-2 text-center">8.0</td>
              <td className="border border-gray-400 p-2 text-center">10</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Mathematics</td>
              <td className="border border-gray-400 p-2 text-center">48</td>
              <td className="border border-gray-400 p-2 text-center">50</td>
              <td className="border border-gray-400 p-2 text-center">9.6</td>
              <td className="border border-gray-400 p-2 text-center">10</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Reasoning</td>
              <td className="border border-gray-400 p-2 text-center">35</td>
              <td className="border border-gray-400 p-2 text-center">50</td>
              <td className="border border-gray-400 p-2 text-center">7.0</td>
              <td className="border border-gray-400 p-2 text-center">10</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="border border-gray-400 p-2 font-bold">Academic Subtotal</td>
              <td className="border border-gray-400 p-2 text-center font-bold">248</td>
              <td className="border border-gray-400 p-2 text-center font-bold">300</td>
              <td className="border border-gray-400 p-2 text-center font-bold">49.6</td>
              <td className="border border-gray-400 p-2 text-center font-bold">60</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Co-Curricular Activities */}
      <div className="mb-6">
        <h3 className="text-center text-lg font-bold text-green-700 mb-3">CO-CURRICULAR & EXTRA-CURRICULAR ACTIVITIES</h3>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="border border-gray-400 p-2 font-bold">Activity</th>
              <th className="border border-gray-400 p-2 font-bold">Marks</th>
              <th className="border border-gray-400 p-2 font-bold">Out of</th>
              <th className="border border-gray-400 p-2 font-bold">Activity</th>
              <th className="border border-gray-400 p-2 font-bold">Marks</th>
              <th className="border border-gray-400 p-2 font-bold">Out of</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">Discipline</td>
              <td className="border border-gray-400 p-2 text-center">4</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
              <td className="border border-gray-400 p-2">Project Work</td>
              <td className="border border-gray-400 p-2 text-center">3</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Attendance</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
              <td className="border border-gray-400 p-2">Yoga</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Class Participation</td>
              <td className="border border-gray-400 p-2 text-center">4</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
              <td className="border border-gray-400 p-2">Arts / Painting</td>
              <td className="border border-gray-400 p-2 text-center">4</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Oral Performance</td>
              <td className="border border-gray-400 p-2 text-center">4</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
              <td className="border border-gray-400 p-2">Fair Copy</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
              <td className="border border-gray-400 p-2 text-center">5</td>
            </tr>
            <tr className="bg-orange-100">
              <td className="border border-gray-400 p-2 font-bold text-center" colSpan="6">Co-Curricular Subtotal: 34 / 40</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Performance Summary */}
      <div className="mb-6">
        <div className="bg-blue-50 p-4 border border-gray-200">
          <h3 className="text-center text-lg font-bold text-green-700 mb-3">PERFORMANCE SUMMARY</h3>
          <div className="flex justify-center">
            <table className="border-collapse border border-gray-400 w-4/5">
              <thead>
                <tr className="bg-orange-200">
                  <th className="border border-gray-400 p-2 font-bold">Total Marks</th>
                  <th className="border border-gray-400 p-2 font-bold">Maximum Marks</th>
                  <th className="border border-gray-400 p-2 font-bold">Percentage</th>
                  <th className="border border-gray-400 p-2 font-bold">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-2 text-center">83.6</td>
                  <td className="border border-gray-400 p-2 text-center">100</td>
                  <td className="border border-gray-400 p-2 text-center">83.6%</td>
                  <td className="border border-gray-400 p-2 text-center font-bold">Commendable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Remarks Section */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-400 p-2 font-bold text-left">Class Teacher's Remarks:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 h-20"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Signature Section */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-400 p-2 font-bold">Class Teacher</th>
              <th className="border border-gray-400 p-2 font-bold">Date of Issue</th>
              <th className="border border-gray-400 p-2 font-bold">Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 h-16"></td>
              <td className="border border-gray-400 p-2 h-16"></td>
              <td className="border border-gray-400 p-2 h-16"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Line */}
      <div className="flex justify-center">
        <div className="w-96 h-0.5 bg-orange-500"></div>
      </div>
    </div>
  );
};

export default StudentReportCard;