
const emotionPercentage = (data,currentPoint) => {
  let sum = 0;
  for (const [key, value] of Object.entries(data.emotionCounts)) {
    if(key == 'Notr') {
      continue;
    }
    console.log(value)
    sum = sum + value
  }
  
  return Math.ceil((currentPoint/sum * 100)/10)
}



export const calculateUmutsuzluk = (data) => {
    let point=0
    if (data.commonEmotion.toLowerCase() == "notr") {
        point = point -2
      }
      if (data.commonEmotion.toLowerCase() == "mutlu") {
        const result = emotionPercentage(data, data.emotionCounts.Mutlu)

        point = point - result
     }
      if (data.commonEmotion.toLowerCase() == "uzgun") {
        const result = emotionPercentage(data, data.emotionCounts.Mutsuz)

        point = point +  result
      }
      if (data.commonEmotion.toLowerCase() == "korkmus") {
        const result = emotionPercentage(data, data.emotionCounts.Korkmus)

        point = point + result
      }
      if (data.commonEmotion.toLowerCase() == "sasirmis") {
        const result = emotionPercentage(data, data.emotionCounts.Sasirmis)

        point = point + result
      }

      return point
}

export const calculateDespairPoint = (point) => {
    let res = ''
    if (point < 4) {
        res = 'Minimal Umutsuzluk tespit edilmiştir'
      } else if (point > 3 && point < 9) {
        res = 'Hafif  Umutsuzluk tespit edilmiştir'
      } else if (point > 8 && point < 15) {
        res = 'Orta Umutsuzluk tespit edilmiştir'
      } else if (point > 15) {
        res = 'Şiddetli Umutsuzluk tespit edilmiştir'
      }
      return res
}

