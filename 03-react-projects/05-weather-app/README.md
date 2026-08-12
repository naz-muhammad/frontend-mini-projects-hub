# 🌤️ Weather App

A simple weather application built with React using the OpenWeather API.

## 🔄 Application Flow

```text
USER
 │
 │ types city
 ▼
searchInput state
 │
 │ clicks Search
 ▼
getWeatherData(city)
 │
 ▼
fetch(url)
 │
 │ network request
 ▼
SERVER / WEATHER API
 │
 ▼
Response object
 │
 ├── response.ok
 │      │
 │      ├── false
 │      │    ↓
 │      │   throw Error
 │      │    ↓
 │      │   catch
 │      │    ↓
 │      │   error state
 │      │
 │      └── true
 │           ↓
 │      response.json()
 │           ↓
 │      JavaScript object
 │           ↓
 │      setWeatherData(data)
 │           ↓
 │      React schedules a re-render
 │           ↓
 │      WeatherCard receives weatherData
 │           ↓
 ▼
USER SEES WEATHER
```

## ⏳ Loading Flow

```text
Search starts
     ↓
setLoading(true)
     ↓
Loading UI appears
     ↓
API request finishes
     ↓
setLoading(false)
     ↓
Weather data OR error is displayed
```

## 🧠 What I Learned

### React

* Components
* JSX
* `useState`
* Controlled inputs
* Event handling
* Conditional rendering
* Props
* Passing functions as props
* Component decomposition
* State-driven UI
* Loading and error states

### JavaScript

* `async/await`
* Promises
* `fetch()`
* `try/catch`
* Template literals
* Functions
* Object and array access
* `.trim()`
* Error handling

### API Concepts

* API endpoints
* Query parameters
* API keys
* HTTP responses
* `response.ok`
* `response.json()`
* JSON → JavaScript object
* API error handling
* Loading states
* Network requests

## 🏗️ Data Flow

```text
Input
  ↓
searchInput
  ↓
getWeatherData()
  ↓
fetch()
  ↓
Weather API
  ↓
response
  ↓
response.json()
  ↓
weatherData
  ↓
React re-render
  ↓
WeatherCard
```

## 🎯 Main Lesson

> **Input → State → API Request → Response → State Update → UI**
