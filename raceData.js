import http from "http";
import fs from "fs/promises";

const SOURCE_URL = "https://server-for-test-week-13.onrender.com/api/race";
const FILE_PATH = "./data/data.json";

async function loadRaceDataApi() {
  try {
    const res = await fetch(SOURCE_URL);

    if (!res.ok) {
      throw new Error(res.status);
    }

    const data = await res.json();

    await saveToFile(data);

    return;
  } catch (err) {
    throw err;
  }
}

async function saveToFile(obj) {
  try {
    const data = await fs.writeFile(
      FILE_PATH,
      JSON.stringify(obj, null, 2),
      "utf8",
    );

    return;
  } catch (err) {
    throw err;
  }
}

export async function getRaceData() {
  try {
    await loadRaceDataApi();

    const data = await fs.readFile(FILE_PATH, "utf8");
    // const result = await JSON.parse(data);

    return await JSON.parse(data);
  } catch (err) {
    throw err;
  }
}
