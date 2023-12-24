
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


export const calculateDepression = (data) => {
  console.log(data)
    let point=0
    if (data.commonEmotion.toLowerCase() == "notr") {
        point = point - 2
      }
      if (data.commonEmotion.toLowerCase() == "mutlu") {
        const result = emotionPercentage(data, data.emotionCounts.Mutlu)
        point = point - result
     }
      if (data.commonEmotion.toLowerCase() == "mutsuz") {
        const result = emotionPercentage(data, data.emotionCounts.Mutsuz)
        point = point + result
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

export const calculateDepressionPoint = (point) => {
    let res = ''
    if (point < 10) {
        res = 'Minimal Depresyon'
      } else if (point > 9 && point < 17) {
        res = 'Hafif Depresyon'
      } else if (point > 16 && point < 30) {
        res = 'Orta Depresyon'
      } else if (point > 29) {
        res = 'Şiddetli Depresyon'
      }
      return res
}

