import { spawn } from "child_process";

export async function POST(req: Request) {
  const { question } = await req.json();

  if (!question) {
    return new Response(JSON.stringify({ error: "Question is required" }), { status: 400 });
  }

  try {
    const response = await queryOllama(question);
    return new Response(JSON.stringify({ answer: response }));
  } catch {
    return new Response(JSON.stringify({ error: "Failed to get response from Ollama" }), { status: 500 });
  }
}

function queryOllama(question: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const process = spawn("ollama", ["run", "mistral"], { shell: true });

    let output = "";
    process.stdout.on("data", (data) => {
      output += data.toString();
    });

    process.stderr.on("data", (data) => {
      console.error(`Ollama Error: ${data}`);
    });

    process.on("close", () => resolve(output.trim()));
    process.on("error", (error) => reject(error));

    process.stdin.write(question + "\n");
    process.stdin.end();
  });
}
