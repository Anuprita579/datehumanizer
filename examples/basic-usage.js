// examples/basic-usage.js

const { humanizeDate, addLocale, getSupportedLocales } = require('../src/index');

// Basic usage examples
console.log('\n--- Basic Usage ---');

// Get the current time
const now = new Date();
console.log(`Current time: ${now.toISOString()}`);

// 5 minutes ago
const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
console.log(`5 minutes ago (${fiveMinutesAgo.toISOString()}): ${humanizeDate(fiveMinutesAgo)}`);

// 1 hour ago
const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
console.log(`1 hour ago (${oneHourAgo.toISOString()}): ${humanizeDate(oneHourAgo)}`);

// Yesterday
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
console.log(`Yesterday (${yesterday.toISOString()}): ${humanizeDate(yesterday)}`);

// Last week
const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
console.log(`Last week (${lastWeek.toISOString()}): ${humanizeDate(lastWeek)}`);

// Last month
const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
console.log(`Last month (${lastMonth.toISOString()}): ${humanizeDate(lastMonth)}`);

// Last year
const lastYear = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
console.log(`Last year (${lastYear.toISOString()}): ${humanizeDate(lastYear)}`);

// Future dates
console.log('\n--- Future Dates ---');

// In 5 minutes
const inFiveMinutes = new Date(now.getTime() + 5 * 60 * 1000);
console.log(`In 5 minutes (${inFiveMinutes.toISOString()}): ${humanizeDate(inFiveMinutes)}`);

// Tomorrow
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
console.log(`Tomorrow (${tomorrow.toISOString()}): ${humanizeDate(tomorrow)}`);

// Next week
const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
console.log(`Next week (${nextWeek.toISOString()}): ${humanizeDate(nextWeek)}`);

// Using different locales
console.log('\n--- Internationalization ---');

// List supported locales
const supportedLocales = getSupportedLocales();
console.log(`Supported locales: ${supportedLocales.join(', ')}`);

// Spanish
console.log(`5 minutes ago in Spanish: ${humanizeDate(fiveMinutesAgo, { locale: 'es' })}`);

// French
console.log(`1 hour ago in French: ${humanizeDate(oneHourAgo, { locale: 'fr' })}`);

// Adding a new locale (German)
console.log('\n--- Adding New Locale ---');

// Add German locale
const germanAdded = addLocale('de', {
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

console.log(`Added German locale: ${germanAdded ? 'Success' : 'Failed'}`);

// Using the German locale
console.log(`5 minutes ago in German: ${humanizeDate(fiveMinutesAgo, { locale: 'de' })}`);
console.log(`Tomorrow in German: ${humanizeDate(tomorrow, { locale: 'de' })}`);

// Custom thresholds
console.log('\n--- Custom Thresholds ---');

// 90 minutes ago (normally would be "1 hour ago")
const ninetyMinutesAgo = new Date(now.getTime() - 90 * 60 * 1000);
console.log(`90 minutes ago (default): ${humanizeDate(ninetyMinutesAgo)}`);

// With custom threshold to show minutes up to 120
console.log(`90 minutes ago (custom threshold): ${humanizeDate(ninetyMinutesAgo, {
  thresholds: {
    minute: 120 // Use minutes up to 120 minutes instead of 60
  }
})}`);

console.log('\n--- Custom Examples ---');

// Using string timestamp
console.log(`Using string timestamp: ${humanizeDate('2025-04-26T12:00:00Z')}`);

// Using numeric timestamp
const numericTimestamp = new Date().getTime() - (3 * 60 * 60 * 1000); // 3 hours ago
console.log(`Using numeric timestamp: ${humanizeDate(numericTimestamp)}`);

// Error handling
console.log('\n--- Error Handling ---');
console.log(`Invalid date: ${humanizeDate('not-a-date')}`);

console.log('\nDateHumanizer examples completed.');