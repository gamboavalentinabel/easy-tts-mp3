const base = 'https://translate.google.com/translate_tts'

export default async function (message, lang) {
  const url = new URL(urlQuery(message, lang), base)
  return await fetch(url)
}

const urlQuery = (message, lang) => {
  const encodeMessage = encodeURIComponent(message)
  return `?ie=UTF-8&q=${encodeMessage}&tl=${lang}&total=1&idx=0&textlen=${encodeMessage.length}&client=tw-ob&prev=input&ttsspeed=1`
}

