import SearchableCollegeList from "@/components/SearchableCollegeList";
import colleges from "@/data/colleges.json";

export default function CollegesPage() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">
        College Listings
      </h1>

      <SearchableCollegeList colleges={colleges} />
    </div>
  );
}