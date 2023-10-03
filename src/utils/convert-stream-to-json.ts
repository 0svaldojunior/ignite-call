// Simule um ReadableStream com dados JSON
const jsonStream = new ReadableStream<Uint8Array>({
  start(controller) {
    controller.enqueue(new TextEncoder().encode('{"key": "value"}')) // Os dados do JSON
    controller.close() // Indica o final do stream
  },
})

// Função para ler um ReadableStream e converter em JSON
export const streamToJson = async (
  stream: ReadableStream<Uint8Array> | null,
): Promise<any> => {
  if (!stream) {
    return null
  }

  const reader = stream.getReader()
  const chunks: Uint8Array[] = []

  return new Promise((resolve, reject) => {
    const pump = async () => {
      try {
        const { done, value } = await reader.read()
        if (done) {
          const jsonStr = new TextDecoder().decode(Uint8Array.of(...chunks))
          try {
            const jsonData = JSON.parse(jsonStr)
            resolve(jsonData)
          } catch (error) {
            reject(error)
          }
        } else {
          chunks.push(value)
          pump()
        }
      } catch (error) {
        reject(error)
      }
    }

    pump()
  })
}

// // Uso da função para converter o ReadableStream em JSON
// ;(async () => {
//   try {
//     const jsonData = await streamToJson(jsonStream)
//     console.log(jsonData)
//   } catch (error) {
//     console.error('Erro ao converter o stream em JSON:', error)
//   }
// })()
