# Easy TTS MP3 - 📄🔊

<div align="center">
  <img width="200"
    src="/assets/Logo2.png">
</div>

Library for easily converting text to speech in multiple languages. No dependencies.

> [!NOTE]
> This library uses the Google Translate API with the base URL https://translate.google.com/translate_tts. <br> __Example →__ [🔊](https://translate.google.com/translate_tts?ie=UTF-8&q=Esto%20es%20un%20test&tl=es-ES&total=1&idx=0&textlen=15&client=tw-ob&prev=input&ttsspeed=1)

## How to use ↴
```js
await easyTTSmp3(message, config)
```

- `message`: String with text to convert to speech

- `config`: Object with TTS configuration.

### TTS configuration ↴

|Name|Description|Default|
|-----|-------|-------|
|Lang|The language of the TTS - [All Languages](https://cloud.google.com/speech-to-text/docs/speech-to-text-supported-languages]) | 'es-ES' |
|Path|The relative path to save the file| '.' |
|Filename|The file name| 'tts.mp3' |