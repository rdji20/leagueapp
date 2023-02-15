export const leagueTypes= [

    {
        title:'Highest Score',
        description:"Absolute scoring. If your scoring is based strictly on who has more points, this is the league type for you. ",
        rules:[{title:'Ranking', value:'Individual'}, {title:'Scoring', value:'Regular'}, {title:'Elo Rating', value:'Available'}],
        available:true

    },
    {
        title:'Padel',
        description:"Choose a partner and stick to them as this league type will be team-based. Rankings will work with teams and not individuals. Padel Type Scoring",
        rules:[{title:'Ranking', value:'Teams'}, {title:'Ranking', value:'Individual'}, {title:'Ranking', value:'Individual'}],
        available:false
    },
    {
        title:'Tennis',
        description:"Exactly what you expect. Tennis-based scoring. ",
        rules:[{title:'Ranking', value:'Individual'}, {title:'Ranking', value:'Individual'}, {title:'Ranking', value:'Individual'}],
        available:false
    },
    {
        title:'Golf',
        description:"Each player records the score of the week. We'll collect each player's performance and rank everyone according to their performances in that week. Handicapp will be taken account.",
        rules:[{title:'Ranking', value:'Individual'}, {title:'Ranking', value:'Individual'}, {title:'Ranking', value:'Individual'}],
        available:false
    },

]
