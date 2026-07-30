export async function GET() {
  try {
    const response = await fetch(
      "https://bullaccess.com.ar/api/public/events?organization_slug=nero-producciones&limit=20",
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      return Response.json({ data: [], error: "Failed to fetch events" }, { status: 500 });
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching events:", error);
    return Response.json({ data: [], error: "Internal server error" }, { status: 500 });
  }
}
