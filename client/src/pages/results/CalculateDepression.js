
export const calculateDepression = (str) => {
    let point=0
    if (str.toLowerCase() == "notr") {
        point = point -2
      }
      if (str.toLowerCase() == "mutlu") {
        point = point -5
     }
      if (str.toLowerCase() == "üzgün") {
        point = point + 4 
      }
      if (str.toLowerCase() == "korkmus") {
        point = point + 4
      }
      if (str.toLowerCase() == "sasirmis") {
        point = point + 4
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

