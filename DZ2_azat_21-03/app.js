// 1
var serial = {
    name: 'настоящий детектив',
    releaseDate: 2014,
    mainActor: 'Мэттью Макконахи, Вуди Харрельсон',
    episodes:{
        season: 3,
        series: 8,
    }
}
console.log('Нзавания сериала: ' + serial.name)
console.log('Дата выхода: ' + serial.releaseDate)
console.log('Главной роли: ' + serial.mainActor)
console.log('Количество сезонов: ' + serial.episodes.season)
console.log('Количество серий: ' + serial.episodes.series)


// 2
var week = prompt('введите день недели')
switch (week) {
    case 'Monday':
    case 'monday':
        console.log('Понедельник')
        break
    case 'Tuesday':
    case 'tuesday':
        console.log('вторник')
        break
    case 'Wendnesday':
    case 'wendnesday':
        console.log('среда')
        break
    case 'Thursday':
    case 'thursday':
        console.log('четверг')
        break
    case 'Friday':
    case 'friday':
        console.log('пятница')
        break
    case 'Saturday':
    case 'saturday':
        console.log('суббота')
        break
    case 'Sunday':
    case 'sunday':
        console.log('воскресенье')
        break
    default:
        console.log('error')
}