// Placeholder links - update these with actual URLs
const links = {
    calendar: 'https://calendar.google.com/calendar/u/0?cid=YOUR_CALENDAR_ID',
    bootcamp: 'https://bootcamp.dreammakershq.com',
    whatsapp: 'https://chat.whatsapp.com/YOUR_GROUP_INVITE',
    replays: 'https://replays.dreammakershq.com'
};

// Update links when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.calendar-link').href = links.calendar;
    document.querySelector('.bootcamp-link').href = links.bootcamp;
    document.querySelector('.whatsapp-link').href = links.whatsapp;
    document.querySelector('.replays-link').href = links.replays;
});
