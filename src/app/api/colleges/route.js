import colleges from "@/data/colleges.json";

export async function GET() {
  return Response.json(colleges);
}