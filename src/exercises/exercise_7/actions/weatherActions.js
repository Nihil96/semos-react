export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST"
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS"
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE"

// Async action using Redux Thunk
export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_WEATHER_REQUEST })

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=faac19de1f77b9f80295e9042a868b93&units=metric`
      )
      const data = await response.json()

      if (response.ok) {
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data })
      } else {
        dispatch({ type: FETCH_WEATHER_FAILURE, payload: data.message })
      }
    } catch (error) {
      dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message })
    }
  }
}
