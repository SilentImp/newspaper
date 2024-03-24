import fs from "node:fs";
import csvjson from "csvjson";
import { NextResponse } from "next/server";
import CONFIG from "@/config/server";

export async function GET() {
  const startTime = performance.now();
  const headers = new Headers();

  const data = fs.readFileSync(CONFIG.CSVPath, { encoding: 'utf8' });
  const readingCSVTime = performance.now();
  const readingCSVDuration = readingCSVTime - startTime;
  headers.append('server-timing', `Reading.CSV;dur=${readingCSVDuration}`);

  const jsonData = csvjson.toObject(data, {
    delimiter: ';',
  });

  const convertingToJSONTime = performance.now();
  const convertingToJSONDuration = convertingToJSONTime - readingCSVTime;
  headers.append('server-timing', `Converting.to.JSON;dur=${convertingToJSONDuration}`);
  return NextResponse.json(jsonData, {
    headers,
    status: 200,
  });
}
