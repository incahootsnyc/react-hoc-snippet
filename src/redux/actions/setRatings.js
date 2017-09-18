export const SET_RATINGS = 'SET_RATINGS';

function setRatings(ratings) {
    return {
        type: SET_RATINGS,
        data: {
            ratings
        }
    }
}

export default {
    setRatings,
    SET_RATINGS
};