import path from 'node:path'
import fs from 'node:fs'
import { Readable } from 'node:stream'
import { finished } from 'node:stream/promises'
import googleTTS from './api/googleTTS.js'
import { langList } from './utils/lang.js'

/**
 * Convert message to MP3 with multiple languages.
 * @param {string} message - The message to be converted.
 * @param {Object} [config] - The TTS configuration.
 * @param {string} [config.lang='es-ES'] - The language of the TTS [Default: 'es-ES'] [https://cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages].
 * @param {string} [config.path='.'] - The relative path to save the file [Default: '.'].
 * @param {string} [config.filename='tts.mp3'] - The file name. [Default: 'tts.mp3'].
 * @returns {Promise<string>} Promise string of the file path.
 */
export default function textToSpechMp3 (message , config = { lang: 'es-ES', path: '.', filename: 'tts.mp3'}) {
  return new Promise(async (resolve, reject) => {
    const res = await googleTTS(message, config.lang || 'es-ES')
    if (res.status !== 200) {
      const error = new Error(`request to ${res.url} failed, status code = ${res.status} (${res.statusText})`)
      console.error(error)
      reject(error)
    }
    const pathFile = path.join(config.path || '.', config.filename || 'tts.mp3')
    const fileStream = fs.createWriteStream(pathFile, { encoding: 'base64' })
    const err = await finished(Readable.fromWeb(res.body).pipe(fileStream))
    if (err) {
      console.error('Download TTS ERROR => ', err)
      reject(err)
    }
    resolve(pathFile)
  })
}

/**
 * Check if the language exists in this repository.
 * @param {string} messageLang - The language of the TTS (Example: 'es-ES').
 * @returns {Boolean} True or False if the language exists in this repository.
 */
export function checkLang (messageLang) {
  const found = langList.find((lang) => { return lang === messageLang })
  return found !== undefined
}