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

const fulldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export const formatDate = (someDateTimeStamp) => {
    const dt = new Date(someDateTimeStamp),
        date = dt.getDate(),
        month = months[dt.getMonth()],
        timeDiff = someDateTimeStamp - Date.now(),
        diffDays = new Date().getDate() - date,
        diffMonths = new Date().getMonth() - dt.getMonth(),
        diffYears = new Date().getFullYear() - dt.getFullYear();

    if(diffYears === 0 && diffDays === 0 && diffMonths === 0){
      return "Today";
    }else if(diffYears === 0 && diffDays === 1) {
      return "Yesterday";
    }else if(diffYears === 0 && diffDays === -1) {
      return "Tomorrow";
    }else if(diffYears === 0 && (diffDays < -1 && diffDays > -7)) {
      return fulldays[dt.getDay()];
    }else if(diffYears >= 1){
      return month + " " + date + ", " + new Date(someDateTimeStamp).getFullYear();
      }else {
        return month + " " + date;
      }
}
