/**
 * 이미지 다운로드 스크립트
 * 실행: node scripts/download-images.mjs
 *
 * Unsplash 이미지를 /public/assets/ 폴더에 저장합니다.
 * 다운로드 후 전체 프로젝트를 GitHub에 push하면 이미지가 포함됩니다.
 */

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, "../public/assets");

// 다운로드할 이미지 목록
const IMAGES = [
  {
    filename: "hero-bg.jpg",
    url: "https://images.unsplash.com/photo-1673526759317-be71a1243e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwcHVycGxlJTIwYmx1ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc1MDI1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    filename: "hero-screen.jpg",
    url: "https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXJrfGVufDF8fHx8MTc3NTExMTUxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    filename: "gallery-1.jpg",
    url: "https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzUxMDg1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    filename: "gallery-2.jpg",
    url: "https://images.unsplash.com/photo-1770681381576-f1fdceb2ea01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHNjcmVlbnxlbnwxfHx8fDE3NzUxMDk0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    filename: "gallery-3.jpg",
    url: "https://images.unsplash.com/photo-1573770012830-7cf1777db19c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzUxMTE1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    filename: "gallery-4.jpg",
    url: "https://images.unsplash.com/photo-1561356476-2abbdca2b22f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG1vZGVybiUyMGludGVyaW9yfGVufDF8fHx8MTc3NTExMTUxOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    filename: "author-1.jpg",
    url: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUxMTE1MTh8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    filename: "author-2.jpg",
    url: "https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3NTEwODg2NHww&ixlib=rb-4.1.0&q=80&w=400",
  },
];

// /public/assets 폴더 생성
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`📁 폴더 생성: ${OUTPUT_DIR}`);
}

// 리다이렉트를 따라가며 파일 다운로드
function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);

    const request = (targetUrl) => {
      https.get(targetUrl, (res) => {
        // 리다이렉트 처리
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          request(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(dest);
          reject(new Error(`HTTP ${res.statusCode} — ${targetUrl}`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      }).on("error", (err) => {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        reject(err);
      });
    };

    request(url);
  });
}

// 순차 다운로드
(async () => {
  console.log(`\n🖼️  이미지 ${IMAGES.length}개를 다운로드합니다...\n`);
  let success = 0;

  for (const img of IMAGES) {
    const dest = path.join(OUTPUT_DIR, img.filename);
    process.stdout.write(`  ⬇️  ${img.filename} ... `);
    try {
      await download(img.url, dest);
      console.log("✅ 완료");
      success++;
    } catch (err) {
      console.log(`❌ 실패 (${err.message})`);
    }
  }

  console.log(`\n✨ 완료: ${success}/${IMAGES.length}개 저장됨 → public/assets/`);
  console.log("📦 이제 git add . && git commit && git push 하면 이미지가 포함됩니다.\n");
})();
