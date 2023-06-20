import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async function() {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=57.15&longitude=65.53&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m&current_weather=true&windspeed_unit=ms&forecast_days=1")

        const parsedRes = await res.json() 

        return parsedRes;
    }
);


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state, action) => {})
    }
        // [fetchWeather.pending]: (state, action) => {},
        // [fetchWeather.fulfilled]: (state, action) => {},
        // [fetchWeather.rejected]: (state, action) => {},
    
    
});