import colleges from "@/data/colleges.json";

export default async function CollegeDetails({ params }) {
  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === Number(id)
  );

  if (!college) {
    return (
      <div className="p-10">
        <h1 className="text-4xl font-bold text-red-500">
          College Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          {college.name}
        </h1>

        <div className="space-y-4 text-lg">

          <p>
            📍 <strong>Location:</strong> {college.location}
          </p>

          <p>
            ⭐ <strong>Rating:</strong> {college.rating}
          </p>

          <p>
            💰 <strong>Fees:</strong> ₹{college.fees}
          </p>
          <p>
            🎓 <strong>Placements:</strong> {college.placements}
          </p>

          <p>
            📖 <strong>Overview:</strong> {college.overview}
         </p>

        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Courses Offered
          </h2>

          <ul className="list-disc pl-6">
            {college.courses.map((course) => (
              <li key={course}>
                {course}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}