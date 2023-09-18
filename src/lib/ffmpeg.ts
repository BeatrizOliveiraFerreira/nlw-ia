import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'


let ffmpeg: FFmpeg | null

export async function getFFmpeg() {
    if (ffmpeg) {
        return ffmpeg
    }

    ffmpeg = new FFmpeg()

    const baseURL = 'https://unpkg.com/browse/@ffmpeg/core-mt@0.12.2/dist/esm/'

    if (!ffmpeg.loaded) {
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'https://unpkg.com/@ffmpeg/core-mt@0.12.2/dist/umd/ffmpeg-core.js'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        })
    }
    
    return ffmpeg
}



