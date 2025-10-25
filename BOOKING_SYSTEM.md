# Booking System Documentation

## Overview
The booking system uses **Netlify Forms** for form submissions and **react-big-calendar** for the calendar interface. It allows customers to select available dates/times and submit booking requests.

## Features
- ✅ Interactive calendar with month, week, and day views
- ✅ Block out specific dates/times
- ✅ Netlify Forms integration for email notifications
- ✅ Mobile-responsive design
- ✅ Pink and white theme matching the site
- ✅ Form validation and success messages

---

## How to Block Out Dates/Times

### Location
The blocked dates are stored in: `/client/public/blocked-dates.json`

### Format
```json
{
  "blockedDates": [
    {
      "start": "2025-12-25T00:00:00",
      "end": "2025-12-26T00:00:00",
      "allDay": true,
      "reason": "Christmas Day"
    }
  ]
}
```

### Adding Blocked Dates

#### Block a Full Day
```json
{
  "start": "2025-11-28T00:00:00",
  "end": "2025-11-29T00:00:00",
  "allDay": true,
  "reason": "Thanksgiving"
}
```

#### Block Specific Hours
```json
{
  "start": "2025-11-15T14:00:00",
  "end": "2025-11-15T16:00:00",
  "allDay": false,
  "reason": "Personal appointment"
}
```

#### Block Multiple Days
```json
{
  "start": "2025-12-24T00:00:00",
  "end": "2025-12-27T00:00:00",
  "allDay": true,
  "reason": "Christmas Holiday"
}
```

### Date Format Explained
- Format: `YYYY-MM-DDTHH:mm:ss`
- `YYYY`: Year (e.g., 2025)
- `MM`: Month (01-12)
- `DD`: Day (01-31)
- `T`: Separator between date and time
- `HH`: Hour in 24-hour format (00-23)
- `mm`: Minutes (00-59)
- `ss`: Seconds (00-59)

### Examples

**Example 1: Block New Year's Day**
```json
{
  "start": "2026-01-01T00:00:00",
  "end": "2026-01-02T00:00:00",
  "allDay": true,
  "reason": "New Year's Day"
}
```

**Example 2: Block Morning Hours (8 AM - 12 PM)**
```json
{
  "start": "2025-11-20T08:00:00",
  "end": "2025-11-20T12:00:00",
  "allDay": false,
  "reason": "Morning blocked"
}
```

**Example 3: Block Every Sunday (Need to add each Sunday separately)**
```json
{
  "start": "2025-11-03T00:00:00",
  "end": "2025-11-04T00:00:00",
  "allDay": true,
  "reason": "Sundays - Closed"
},
{
  "start": "2025-11-10T00:00:00",
  "end": "2025-11-11T00:00:00",
  "allDay": true,
  "reason": "Sundays - Closed"
}
```

---

## How to Update Blocked Dates

### Method 1: Edit Locally
1. Open `/client/public/blocked-dates.json` in any text editor
2. Add your new blocked date to the `blockedDates` array
3. Save the file
4. Commit and push to GitHub
5. Netlify will automatically redeploy with the new dates

### Method 2: Edit on GitHub
1. Go to your GitHub repository
2. Navigate to `client/public/blocked-dates.json`
3. Click the pencil icon to edit
4. Add your new blocked dates
5. Commit directly to main branch
6. Netlify will automatically redeploy

---

## Netlify Forms Setup

### Receiving Booking Notifications

1. **Log in to Netlify**
   - Go to https://app.netlify.com/
   - Select your site (casandras-cleaning)

2. **Access Form Submissions**
   - Go to **Forms** tab in Netlify dashboard
   - You'll see all booking submissions here

3. **Set Up Email Notifications**
   - In Forms tab, click **Settings and usage**
   - Click **Form notifications**
   - Click **Add notification**
   - Choose **Email notification**
   - Enter: `casandra@casandrascleaning.com`
   - Choose **New form submission** trigger
   - Click **Save**

4. **What You'll Receive**
   - Email for every booking request
   - Includes: Name, Email, Phone, Service Type, Preferred Date/Time, Message
   - You can reply directly to the customer

---

## Calendar Settings

### Business Hours
Current hours are set in `/client/src/components/BookingCalendar.jsx`:
- **Days**: Monday - Friday only
- **Hours**: 9:00 AM - 5:00 PM
- **Timezone**: Central Time (America/Chicago)

**Weekends are automatically blocked** - customers cannot book on Saturday or Sunday.

To change business hours:
1. Open `BookingCalendar.jsx`
2. Find these lines:
```javascript
min={new Date(2025, 0, 1, 9, 0, 0)} // 9 AM
max={new Date(2025, 0, 1, 17, 0, 0)} // 5 PM
```
3. Change the hours (24-hour format):
   - `9` = 9 AM
   - `17` = 5 PM
   - Example: For 8 AM to 6 PM, use `8` and `18`

---

## Testing the Booking System

### Test Locally
1. Click any "Book Now" button
2. Calendar should open
3. Try clicking a date
4. Form should appear
5. Fill out and submit

### Test on Live Site
1. Visit https://casandras-cleaning.netlify.app
2. Click "Book Now"
3. Select a date
4. Submit the form
5. Check Netlify dashboard for submission

---

## Troubleshooting

### Issue: Blocked dates not showing
- **Solution**: Make sure JSON syntax is correct (commas, quotes)
- **Solution**: Clear browser cache
- **Solution**: Check browser console for errors

### Issue: Form not submitting
- **Solution**: Check Netlify Forms is enabled in dashboard
- **Solution**: Verify form name is "booking"
- **Solution**: Check browser console for errors

### Issue: Not receiving email notifications
- **Solution**: Check Netlify Form notifications settings
- **Solution**: Check spam folder
- **Solution**: Verify email address is correct

---

## Quick Reference

### JSON Syntax Rules
- Each object must be in curly braces `{}`
- Properties must be in quotes `"start"`
- Values must be in quotes `"2025-11-20"`
- Separate objects with commas `,`
- No comma after the last object
- Booleans (`true`/`false`) don't need quotes

### Valid JSON Example
```json
{
  "blockedDates": [
    {
      "start": "2025-12-25T00:00:00",
      "end": "2025-12-26T00:00:00",
      "allDay": true,
      "reason": "Christmas"
    },
    {
      "start": "2026-01-01T00:00:00",
      "end": "2026-01-02T00:00:00",
      "allDay": true,
      "reason": "New Year"
    }
  ]
}
```

### Invalid JSON Example (Missing comma)
```json
{
  "blockedDates": [
    {
      "start": "2025-12-25T00:00:00",
      "end": "2025-12-26T00:00:00",
      "allDay": true,
      "reason": "Christmas"
    }  ❌ MISSING COMMA HERE
    {
      "start": "2026-01-01T00:00:00",
      "end": "2026-01-02T00:00:00",
      "allDay": true,
      "reason": "New Year"
    }
  ]
}
```

---

## Support
If you need help updating the booking system or blocked dates:
1. Check this documentation first
2. Try the examples above
3. Validate your JSON at https://jsonlint.com/
4. Check browser console for errors (F12 key)

---

**Remember**: After editing `blocked-dates.json`, commit and push to GitHub. Netlify will automatically redeploy with the changes in about 1-2 minutes.
