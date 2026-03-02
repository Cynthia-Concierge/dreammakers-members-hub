// Placeholder links - update these with actual URLs
const links = {
    bootcamp: 'https://bootcamp.dreammakershq.com',
    whatsapp: 'https://chat.whatsapp.com/YOUR_GROUP_INVITE',
    replays: 'https://replays.dreammakershq.com'
};

// Update links when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.bootcamp-link').href = links.bootcamp;
    document.querySelector('.whatsapp-link').href = links.whatsapp;
    document.querySelector('.replays-link').href = links.replays;
});

// Toggle calendar embed visibility
function toggleCalendar() {
    const calendarEmbed = document.getElementById('calendar-embed');
    calendarEmbed.classList.toggle('hidden');

    // Scroll to calendar when opening
    if (!calendarEmbed.classList.contains('hidden')) {
        setTimeout(() => {
            calendarEmbed.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}
