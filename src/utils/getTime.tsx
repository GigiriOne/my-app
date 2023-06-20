export function getHours(time: Date): string {
    const hours = time.getHours() 
    const minutes = time.getMinutes()
    let res = ""
    if(hours < 10) res += `0${hours}:`
    else res += `${hours}:`

    if(minutes < 10) res += `0${minutes}`
    else res += `${minutes}`

    return res
}

