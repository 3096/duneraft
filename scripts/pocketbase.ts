import * as os from "os";
import * as https from "https";
import * as fs from "fs";
import * as path from "path";
import { spawn } from "child_process";
import * as unzipper from "unzipper";

function getLatestVersion(): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(
        {
          hostname: "api.github.com",
          path: "/repos/pocketbase/pocketbase/releases/latest",
          headers: { "User-Agent": "node" },
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => {
            try {
              const json = JSON.parse(data);
              resolve(json.tag_name.replace(/^v/, ""));
            } catch (e) {
              reject(e);
            }
          });
        }
      )
      .on("error", reject);
  });
}

async function main() {
  const version = await getLatestVersion();
  const platform = os.platform();
  let downloadUrl: string, zipName: string, exeName: string;

  if (platform === "win32") {
    downloadUrl = `https://github.com/pocketbase/pocketbase/releases/download/v${version}/pocketbase_${version}_windows_amd64.zip`;
    zipName = `pocketbase_${version}_windows_amd64.zip`;
    exeName = "pocketbase.exe";
  } else if (platform === "darwin") {
    downloadUrl = `https://github.com/pocketbase/pocketbase/releases/download/v${version}/pocketbase_${version}_darwin_amd64.zip`;
    zipName = `pocketbase_${version}_darwin_amd64.zip`;
    exeName = "pocketbase";
  } else if (platform === "linux") {
    downloadUrl = `https://github.com/pocketbase/pocketbase/releases/download/v${version}/pocketbase_${version}_linux_amd64.zip`;
    zipName = `pocketbase_${version}_linux_amd64.zip`;
    exeName = "pocketbase";
  } else {
    console.error("Unsupported platform:", platform);
    process.exit(1);
  }

  const outDir = "pocketbase_bin";
  const zipPath = path.join(outDir, zipName);
  const exePath = path.join(outDir, exeName);

  function downloadPocketBase(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      if (fs.existsSync(exePath)) return resolve();

      console.log(`Downloading PocketBase v${version}...`);

      function download(url: string) {
        https
          .get(url, (response) => {
            // Handle redirect
            if (
              response.statusCode &&
              response.statusCode >= 300 &&
              response.statusCode < 400 &&
              response.headers.location
            ) {
              return download(response.headers.location);
            }
            if (response.statusCode !== 200) {
              return reject(new Error(`Failed to download: ${response.statusCode}`));
            }
            const file = fs.createWriteStream(zipPath);
            response.pipe(file);
            file.on("finish", () => {
              file.close();
              resolve();
            });
            file.on("error", reject);
          })
          .on("error", reject);
      }

      download(downloadUrl);
    });
  }

  function extractPocketBase(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (fs.existsSync(exePath)) return resolve();
      console.log("Extracting...");
      fs.createReadStream(zipPath)
        .pipe(unzipper.Extract({ path: outDir }))
        .on("close", () => {
          fs.unlinkSync(zipPath);
          if (platform !== "win32") fs.chmodSync(exePath, 0o755);
          resolve();
        })
        .on("error", reject);
    });
  }

  await downloadPocketBase();
  await extractPocketBase();
  console.log("Starting PocketBase...");
  const child = spawn(exePath, ["serve"], { stdio: "inherit" });
  child.on("close", (code) => process.exit(code ?? 0));
}

main();
