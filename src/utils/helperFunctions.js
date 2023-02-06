export const compare = (a, b) => {
    const scoreA = (+a.wins + +a.loses) > 0 ? +a.wins/(+a.wins + +a.loses) : 0
    const scoreB = (+b.wins + +b.loses) > 0 ? +b.wins/(+b.wins + +b.loses) : 0
    if (scoreA > scoreB){
        return 1
    }else if (scoreA < scoreB){
        return -1
    }else if (+a.wins + +a.loses > +b.wins + +b.loses){
        console.log('Yes : ', a.displayName)
        return 1
    }
    return 0
}

export const firstName = (displayName) => {
    return displayName.split(' ')[0].toUpperCase().charAt(0) + displayName.split(' ')[0].slice(1)
}