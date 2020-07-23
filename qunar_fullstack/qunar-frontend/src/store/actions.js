export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'ACTION_SET_IS_CITY_SELECTOR_VISIBLE';
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATA';

export function showCitySelector() {
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload: true,
    }
}

// 对 ACTION_SET_CITY_DATA 设置一个action
export function fectCityData() {
    return (dispatch, getState) => {
        fetch('/rest/cities')
            .then(res => res.json())
            .then(cityData => {
                dispatch(setCityData(cityData))
            })
    }
}

export function setCityData(cityData) {
    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
    }
}

export function showCitySelector(isCitySelectorVisible) {
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload: !isCitySelectorVisible,
    }
}

export function showLoadingCityData(isLoadingCityData) {
    return {
        type: ACTION_SET_IS_LOADING_CITY_DATA,
        payload: !isLoadingCityData,
    }
}
