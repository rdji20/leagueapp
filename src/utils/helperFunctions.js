export const compare = (a, b) => {
    const scoreA = (+a.wins + +a.loses) > 0 ? +a.wins/(+a.wins + +a.loses) : 0
    const scoreB = (+b.wins + +b.loses) > 0 ? +b.wins/(+b.wins + +b.loses) : 0
    if (scoreA > scoreB){
        return 1
    }    
    if (scoreA < scoreB){
        return -1
    }
    if (+a.wins + +a.loses > +b.wins + +b.loses){
        return 1
    }    
    if (+a.wins + +a.loses < +b.wins + +b.loses){
        return -1
    }
    return 0
}

export const firstName = (displayName) => {
    return displayName.split(' ')[0].toUpperCase().charAt(0) + displayName.split(' ')[0].slice(1)
}

export const fullName = (displayName) => {
    //return displayName.split(' ').map((word) => {word.toUpperCase().charAt(0) + word.slice(1)}).join(' ')
    return displayName.split(' ').map((word) => word.toUpperCase().charAt(0) + word.slice(1)).join(' ')
}