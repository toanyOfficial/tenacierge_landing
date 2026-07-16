import { queryCleaningTotal } from "../../../lib/data.js";

export async function GET() {
  return queryCleaningTotal("Data query failed");
}
