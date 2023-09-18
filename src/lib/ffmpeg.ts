import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'


let ffmpeg: FFmpeg | null

export async function getFFmpeg() {
    if (ffmpeg) {
        return ffmpeg
    }

    ffmpeg = new FFmpeg()

    const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.2/dist/esm";

    if (!ffmpeg.loaded) {
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
            workerURL: await toBlobURL(
                `${baseURL}/ffmpeg-core.worker.js`,
                "text/javascript"
              ),
            
        })
    }
    
    return ffmpeg
}


// -------------- COMENTÁRIO PARA FIXAR CÓDIGO QUE ESTÁ NO GITHUB DA NLW IA ------------ 

// import { FFmpeg } from "@ffmpeg/ffmpeg";

// import coreURL from '../ffmpeg/ffmpeg-core.js?url'
// import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url'
// import workerURL from '../ffmpeg/ffmpeg-worker.js?url'

// let ffmpeg: FFmpeg | null;

// export async function getFFmpeg() {
//   if (ffmpeg) {
//     return ffmpeg;
//   }

//   ffmpeg = new FFmpeg()

//   if (!ffmpeg.loaded) {
//     await ffmpeg.load({
//       coreURL,
//       wasmURL,
//       workerURL,
//     });
//   }

//   return ffmpeg;
// }


// import { toBlobURL } from '@ffmpeg/util'

// const blob = await getWasmCoreWasm();
// await this.ffmpegInstance.load({
//     coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
//     wasmURL: await toBlobURL(URL.createObjectURL(blob), 'application/wasm'),
//     workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript'),
// });


