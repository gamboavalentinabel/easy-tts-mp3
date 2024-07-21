# Easy TTS MP3 - 📄🔊

<div align="center">
  <img width="200"
    src="https://i.imgur.com/xcD15Fw.png">
</div>

Library for easily converting text to speech in multiple languages. No dependencies.

> [!NOTE]
> This library uses the Google Translate API with the base URL https://translate.google.com/translate_tts. <br> __Example (Copy and paste into the browser) ↴__ 
> ```
> https://translate.google.com/translate_tts?ie=UTF-8&q=Esto%20es%20un%20test&tl=es-ES&total=1&idx=0&textlen=15&client=tw-ob&prev=input&ttsspeed=1
>``` 

## 📥 Installation  ↴
```
npm i easy-tts-mp3
```
***NPM Package →*** [📦](https://www.npmjs.com/package/easy-tts-mp3)

## 🤔  How to use ↴
```js
import easyTTSmp3 from 'easy-tts-mp3'

const stringFilePath = await easyTTSmp3(message, config)
```

- `message`: String with text to convert to speech

- `config`: Object with TTS configuration.

### ⚙️ TTS configuration ↴

|Name|Description|Default|
|-----|-------|-------|
|Lang|The language of the TTS - [All Languages](https://cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages]) | 'es-ES' |
|Path|The relative path to save the file| ' . ' |
|Filename|The file name| 'tts.mp3' |

## ✅ Check Lang ↴
```js
import { checkLang } from 'easy-tts-mp3'

const check = checkLang(lang)
```

- `lang`: The language of the TTS (Example: 'es-ES').

This function checks if the language exists in this [library](/src/utils/lang.js).

## 🧪 Test Command ↴
```
npm run test
```

This command create `tts.mp3` file with the translated text *"esto es una prueba" in spanish.*