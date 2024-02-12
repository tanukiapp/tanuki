const jsonData = require('./sample-data.json')

const assignWeek = function (animeList) {
  const weekMap = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  const animeWeek = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  }

  const addZeros = (i) => {
    return (i < 10) ? `0${i}` : i
  }

  animeList.map((anime) => {
    const date = new Date(anime.localTime)
    let day = date.getDay()
    day !== 0 ? day -= 1 : day = 6

    const hour = addZeros(date.getHours())
    const minutes = addZeros(date.getMinutes())

    const dayWeek = weekMap[day]

    const animeObject = {
      kitsu_id: anime.kitsu_id,
      title: anime.title,
      episode: anime.Count ? anime.Count : null,
      time: `${hour}:${minutes}`
    }
    animeWeek[dayWeek].push(animeObject)

    return animeWeek
  })

  return animeWeek
}

class AppController {
  static index (req, res, next) {
    res.render('index', { view: 'home' })
  }

  static airing_view (req, res, next) {
    const animeData = assignWeek(jsonData)
    res.render('airing', { data: animeData })
  }
}

module.exports = AppController
