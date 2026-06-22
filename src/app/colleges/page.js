import SearchableCollegeList from "@/components/SearchableCollegeList";

async function getColleges() {
  const res = await fetch("http://localhost:3000/api/colleges", {
    cache: "no-store",
  });

  return res.json();
}

export default async function CollegesPage() {
  const colleges = await getColleges();

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">
        College Listings
      </h1>

      <SearchableCollegeList colleges={colleges} />
    </div>
  );
}