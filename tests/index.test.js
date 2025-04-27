// tests/index.test.js

const { humanizeDate, addLocale, getSupportedLocales } = require('../src/index');

describe('humanizeDate', () => {
  // Mock the current date for consistent testing
  const NOW = new Date('2025-04-27T12:00:00Z');
  
  test('should handle just now', () => {
    const result = humanizeDate(new Date('2025-04-27T11:59:58Z'), { now: NOW });
    expect(result).toBe('just now');
  });
  
  test('should handle seconds ago', () => {
    const result = humanizeDate(new Date('2025-04-27T11:59:30Z'), { now: NOW });
    expect(result).toBe('30 seconds ago');
  });
  
  test('should handle a minute ago', () => {
    const result = humanizeDate(new Date('2025-04-27T11:59:00Z'), { now: NOW });
    expect(result).toBe('a minute ago');
  });
  
  test('should handle minutes ago', () => {
    const result = humanizeDate(new Date('2025-04-27T11:55:00Z'), { now: NOW });
    expect(result).toBe('5 minutes ago');
  });
  
  test('should handle an hour ago', () => {
    const result = humanizeDate(new Date('2025-04-27T11:00:00Z'), { now: NOW });
    expect(result).toBe('an hour ago');
  });
  
  test('should handle hours ago', () => {
    const result = humanizeDate(new Date('2025-04-27T09:00:00Z'), { now: NOW });
    expect(result).toBe('3 hours ago');
  });
  
  test('should handle yesterday', () => {
    const result = humanizeDate(new Date('2025-04-26T12:00:00Z'), { now: NOW });
    expect(result).toBe('yesterday');
  });
  
  test('should handle days ago', () => {
    const result = humanizeDate(new Date('2025-04-24T12:00:00Z'), { now: NOW });
    expect(result).toBe('3 days ago');
  });
  
  test('should handle last week', () => {
    const result = humanizeDate(new Date('2025-04-20T12:00:00Z'), { now: NOW });
    expect(result).toBe('last week');
  });
  
  test('should handle weeks ago', () => {
    const result = humanizeDate(new Date('2025-04-06T12:00:00Z'), { now: NOW });
    expect(result).toBe('3 weeks ago');
  });
  
  test('should handle last month', () => {
    const result = humanizeDate(new Date('2025-03-27T12:00:00Z'), { now: NOW });
    expect(result).toBe('last month');
  });
  
  test('should handle months ago', () => {
    const result = humanizeDate(new Date('2025-01-27T12:00:00Z'), { now: NOW });
    expect(result).toBe('3 months ago');
  });
  
  test('should handle last year', () => {
    const result = humanizeDate(new Date('2024-04-27T12:00:00Z'), { now: NOW });
    expect(result).toBe('last year');
  });
  
  test('should handle years ago', () => {
    const result = humanizeDate(new Date('2022-04-27T12:00:00Z'), { now: NOW });
    expect(result).toBe('3 years ago');
  });
  
  // Future dates
  test('should handle in seconds', () => {
    const result = humanizeDate(new Date('2025-04-27T12:00:30Z'), { now: NOW });
    expect(result).toBe('in 30 seconds');
  });
  
  test('should handle in a minute', () => {
    const result = humanizeDate(new Date('2025-04-27T12:01:00Z'), { now: NOW });
    expect(result).toBe('in a minute');
  });
  
  test('should handle in minutes', () => {
    const result = humanizeDate(new Date('2025-04-27T12:05:00Z'), { now: NOW });
    expect(result).toBe('in 5 minutes');
  });
  
  test('should handle in an hour', () => {
    const result = humanizeDate(new Date('2025-04-27T13:00:00Z'), { now: NOW });
    expect(result).toBe('in an hour');
  });
  
  test('should handle in hours', () => {
    const result = humanizeDate(new Date('2025-04-27T15:00:00Z'), { now: NOW });
    expect(result).toBe('in 3 hours');
  });
  
  test('should handle tomorrow', () => {
    const result = humanizeDate(new Date('2025-04-28T12:00:00Z'), { now: NOW });
    expect(result).toBe('tomorrow');
  });
  
  test('should handle in days', () => {
    const result = humanizeDate(new Date('2025-04-30T12:00:00Z'), { now: NOW });
    expect(result).toBe('in 3 days');
  });
  
  test('should handle invalid dates', () => {
    const result = humanizeDate('invalid-date');
    expect(result).toBe('Invalid date');
  });
  
  test('should use a different locale', () => {
    const result = humanizeDate(new Date('2025-04-27T11:55:00Z'), { 
      now: NOW,
      locale: 'es' 
    });
    expect(result).toBe('hace 5 minutos');
  });
  
  test('should use custom thresholds', () => {
    const result = humanizeDate(new Date('2025-04-27T10:30:00Z'), { 
      now: NOW,
      thresholds: {
        minute: 120 // Use minutes up to 120 minutes instead of 60
      }
    });
    expect(result).toBe('90 minutes ago');
  });
});

describe('addLocale', () => {
  test('should add a new locale', () => {
    const result = addLocale('de', {
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
    
    expect(result).toBe(true);
    
    // Test the new locale
    const NOW = new Date('2025-04-27T12:00:00Z');
    const germanResult = humanizeDate(new Date('2025-04-27T11:55:00Z'), { 
      now: NOW,
      locale: 'de' 
    });
    
    expect(germanResult).toBe('vor 5 Minuten');
  });
  
  test('should fail to add an incomplete locale', () => {
    // Missing some required keys
    const result = addLocale('it', {
      just_now: 'proprio ora',
      seconds_ago: '{count} secondi fa'
      // Missing other keys
    });
    
    expect(result).toBe(false);
  });
});

describe('getSupportedLocales', () => {
  test('should return the list of supported locales', () => {
    // First add a new locale to test
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
    
    const locales = getSupportedLocales();
    expect(locales).toContain('en');
    expect(locales).toContain('es');
    expect(locales).toContain('fr');
    expect(locales).toContain('de');
  });
});