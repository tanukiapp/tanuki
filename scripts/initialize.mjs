import { writeFile, mkdir } from "fs/promises";

const openApiSchemas = {
  catalog: "https://raw.githubusercontent.com/tanukiapp/tanuki-openapi/main/openapi/v1/catalog-api.yaml",
  schedule: "https://raw.githubusercontent.com/tanukiapp/tanuki-openapi/main/openapi/v1/schedule-api.yaml",
};

// Asegurar que el directorio openapi existe
await mkdir("openapi", { recursive: true });

for (const [schema, url] of Object.entries(openApiSchemas)) {
  try {
    console.log(`📦 Downloading ${schema}...`);
    const res = await fetch(url);

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const buffer = await res.arrayBuffer();
    const fileName = `services/${schema}/openapi.yaml`;
    await writeFile(fileName, Buffer.from(buffer));

    console.log(`✔  ${schema} downloaded successfully as ${fileName}\n`);
  } catch (error) {
    console.error(`❌ Error downloading ${schema}:`, error.message);
  }
}
