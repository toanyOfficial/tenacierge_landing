import { queryCleaningTotal } from "../../../lib/data.js";

export const dynamic = "force-dynamic";

export async function GET() {
  return queryCleaningTotal("Data query failed");
}
