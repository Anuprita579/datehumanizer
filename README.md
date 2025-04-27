<!-- [![NPM Version](https://img.shields.io/npm/v/datehumanizer.svg)](https://www.npmjs.com/package/datehumanizer) -->
<!-- [![License](https://img.shields.io/npm/l/datehumanizer.svg)](https://github.com/Anuprita579/datehumanizer/blob/main/LICENSE) -->
<!-- [![Downloads](https://img.shields.io/npm/dt/datehumanizer.svg)](https://www.npmjs.com/package/datehumanizer) -->

# DateHumanizer — Lightweight Library to Humanize Dates and Timestamps

**DateHumanizer** is a lightweight, blazing-fast JavaScript library that converts dates and timestamps into human-readable natural language — like **"5 minutes ago"**, **"yesterday"**, or **"in 3 hours"**.

Perfect for **social media apps**, **CMS**, **chat apps**, **e-commerce**, and **project management tools**.

## ✨ Features

- **Simple time descriptions**: "Just now", "5 minutes ago", "in 2 hours", "Yesterday", etc.
- **Supports past and future dates**.
- **Internationalization (i18n)** out of the box: English (en), Spanish (es), French (fr).
- **Easily add your own languages** or customize text formats.
- **Customizable thresholds** between seconds, minutes, hours, days, etc.
- **Zero dependencies** — small footprint and fast performance.
- **Node.js, React, Vue, Angular** — compatible everywhere.

## 📦 Installation

```bash
npm install datehumanizer
```

## 🚀 Quick Start

### Basic Usage

```javascript
const { humanizeDate } = require('datehumanizer');

// Humanize a Date object
const timeAgo = humanizeDate(new Date(Date.now() - 5 * 60 * 1000));
console.log(timeAgo); 
// Output: "5 minutes ago"

// Humanize a timestamp
const timeAhead = humanizeDate('2025-05-01T12:00:00Z');
console.log(timeAhead); 
// Output might be: "in 4 days"

// Humanize a timestamp number (milliseconds since epoch)
const timestamp = Date.now() - (24 * 60 * 60 * 1000); // 1 day ago
const yesterday = humanizeDate(timestamp);
console.log(yesterday); 
// Output: "yesterday"
```

### 🌍 Internationalization (i18n) Support

```javascript
const { humanizeDate } = require('datehumanizer');

// Use Spanish locale
const spanishTimeAgo = humanizeDate(new Date(Date.now() - 5 * 60 * 1000), {
  locale: 'es'
});
console.log(spanishTimeAgo); 
// Output: "hace 5 minutos"

// Use French locale
const frenchTimeAgo = humanizeDate(new Date(Date.now() - 60 * 60 * 1000), {
  locale: 'fr'
});
console.log(frenchTimeAgo); 
// Output: "il y a une heure"
```

## 🛠️ Customization
### ➡️ Add New Languages
```javascript
const { addLocale, humanizeDate } = require('datehumanizer');

// Add German locale
addLocale('de', {
  just_now: 'gerade eben',
  seconds_ago: 'vor {count} Sekunden',
  minute_ago: 'vor einer Minute',
  minutes_ago: 'vor {count} Minuten',
  hour_ago: 'vor einer Stunde',
  hours_ago: 'vor {count} Stunden',
  yesterday: 'gestern',
  days_ago: 'vor {count} Tagen',
  last_week: 'letzte Woche',
  weeks_ago: 'vor {count} Wochen',
  last_month: 'letzten Monat',
  months_ago: 'vor {count} Monaten',
  last_year: 'letztes Jahr',
  years_ago: 'vor {count} Jahren',
  in_seconds: 'in {count} Sekunden',
  in_minute: 'in einer Minute',
  in_minutes: 'in {count} Minuten',
  in_hour: 'in einer Stunde',
  in_hours: 'in {count} Stunden',
  tomorrow: 'morgen',
  in_days: 'in {count} Tagen',
  in_week: 'in einer Woche',
  in_weeks: 'in {count} Wochen',
  in_month: 'in einem Monat',
  in_months: 'in {count} Monaten',
  in_year: 'in einem Jahr',
  in_years: 'in {count} Jahren'
});

// Use German locale
const germanTimeAgo = humanizeDate(new Date(Date.now() - 5 * 60 * 1000), {
  locale: 'de'
});
console.log(germanTimeAgo); 
// Output: "vor 5 Minuten"
```

### ➡️ Customizing Thresholds

```javascript
const { humanizeDate } = require('datehumanizer');

// Custom thresholds for time units
const customTimeAgo = humanizeDate(new Date(Date.now() - 90 * 60 * 1000), {
  thresholds: {
    minute: 120 // Switch from minutes to hours after 120 minutes (2 hours)
  }
});
console.log(customTimeAgo); 
// Output: "90 minutes ago" instead of "1 hour ago"
```

### ➡️ Getting Supported Locales

```javascript
const { getSupportedLocales } = require('datehumanizer');

const locales = getSupportedLocales();
console.log(locales); 
// Output: ["en", "es", "fr"]
```

## 📚 API Documentation

### `humanizeDate(date, options)`

Converts a date to a human-readable format.

#### Parameters

| Parameter | Type | Description | Default |
|------|------|---------|-------------|
| `date` | Date/string/number | The date to convert | - |
| `options` | Object (optional) | Configuration options. | - |
| `options:locale` | string (optional) | The locale to use. | 'en' |
| `options:thresholds` | Object (optional) | Custom thresholds for time units. | - |
| `options:includeSeconds` | boolean (optional) | Whether to show 'just now' vs seconds. | true |
| `options:now` | Date (optional) | Override the current date (useful for testing). | - |

#### Returns

> (string): Human-readable representation of the date.

### `addLocale(locale, translations)`

Adds a new locale configuration.

#### Parameters

| Parameter | Type | Description | 
|------------|---------|-------------|
| `locale` | string | The locale code (e.g., 'de', 'it'). |
| `translations` | Object | The translations for this locale. | 

#### Returns

> (boolean): True if the locale was added successfully.

### `getSupportedLocales()`

Gets the list of supported locales.

#### Parameters
| Parameter | Description | 
|------------|---------|
| `getSupportedLocales()` | Gets the list of supported locales. |

#### Returns

> (Array<string>): Array of supported locale codes.


## 📈 Real-World Use Cases
- Social media posts ("5 minutes ago")
- Chat applications ("Seen yesterday")
- Blog posts and articles ("Published 3 days ago")
- E-commerce product updates ("Restocked 2 hours ago")
- Event management ("Event starts in 2 days")

## License

MIT
