import axios from "axios";

export const localIPAddress = "http://192.168.100.64:3000";
/* export const firebaseServerAddress =
    "https://us-central1-ntf-app-36f1e.cloudfunctions.net/app"; */
export const firebaseServerAddress =
    "https://us-central1-ntf-app-36f1e.cloudfunctions.net/app";

/**
 * Makes a POST call to the backend that adds new user info to firebase.
 * @param thisUser - User object
 */
export async function userCreation(thisUser, newUserName) {
    // const response = await axios.get('http://192.168.100.64:3000/')
    // console.log(response.data);
    console.log("test creation user Request Manager", thisUser.uid);
    console.log("Test after request Manager ", newUserName);

    axios
        .post(`${firebaseServerAddress}/create_user`, {
            user_id: thisUser.uid,
            displayName: newUserName,
        })
        .then(function (response) {
            console.log("Test response Request Manager", response.data);
            return true;
        })
        .catch(function (error) {
            console.log(error);
            return false;
        });
}

/**
 * Makes a GET call to the backend once after the first mount. The response is stored in the state variable legagues.
 * @param uid - User id string
 */
export async function getLeagues(uid) {
    try {
        const res = await axios.get(`${firebaseServerAddress}/leagues`, {
            params: {
                user_id: uid,
            },
        });
        // console.log(res);
        return res;
    } catch (e) {
        console.log(e);
        throw new Error("Something happened in server /leagues");
    }
}
export async function getMatches(leagueId) {
    try {
        const res = await axios.get(`${firebaseServerAddress}/get_matches`, {
            params: {
                leagueId,
            },
        });
        return res;
    } catch (e) {
        console.log(e);
        throw new Error("Something happened in server /get_matches");
    }
}
export async function getUser(uid) {
    try {
        const res = await axios.get(`${firebaseServerAddress}/get_user`, {
            params: {
                uId: uid,
            },
        });
        return res;
    } catch (e) {
        console.log(e);
        throw new Error("Something happened in server /get_user");
    }
}

export async function createLeague(league, uid) {
    axios
        .post(`${firebaseServerAddress}/create_league`, {
            uId: uid,
            leagueName: league.name,
            leagueType: league.leagueType,
            users: league.players,
            iconId: league.icon,
        })
        .then((response) => {
            console.log("League Created");
            return response;
        })
        .catch((error) => {
            console.log(error);
            throw new Error("Error creating the league /create_league");
        });
}
export async function postScore(matchObj) {
    axios
        .post(`${firebaseServerAddress}/add_score`, {
            ...matchObj,
        })
        .then((response) => {
            console.log("Score Added");
            return response;
        })
        .catch((error) => {
            console.log(error);
            throw new Error("Error adding the score /add_score");
        });
}
export async function AddGuestUser(uId, leagueId, userObject) {
    axios
        .post(`${firebaseServerAddress}/new_guest_user`, {
            uId,
            leagueId,
            userObject,
        })
        .then((response) => {
            console.log("User Added");
            return response;
        })
        .catch((error) => {
            console.log(error);
            throw new Error("Error adding new user /new_guest_user");
        });
}
