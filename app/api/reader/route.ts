import { reader } from "@/app/utils/reader"
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
    const formData = await request.formData();
    const file: any = formData.get("file");
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename =  file.name.replaceAll(" ", "_");
    await writeFile(
        path.join(process.cwd(), "public/" + filename),
        buffer
      );
    const readerRes = await reader(filename)
    return Response.json({reader: readerRes})
}