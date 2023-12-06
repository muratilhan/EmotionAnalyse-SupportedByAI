
export const calculateUmutsuzluk = (str) => {
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

