// Actual member resource links
const links = {
    bootcamp: 'http://learn.dreammakershq.com',
    whatsapp: 'https://chat.whatsapp.com/KQs4r4hDWlo7NnQ2px3nJC?mode=hqctshi',
    replays: 'https://drive.google.com/drive/folders/1ZwAIf0S_rjXhaEFzv58VmmfKs1IwNsqj?usp=sharing'
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
