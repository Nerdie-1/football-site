export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.football-data.org/v4/competitions/PL/standings",
      {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_API_KEY,
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch standings" });
  }
}
