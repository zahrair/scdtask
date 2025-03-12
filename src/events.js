const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/events.json");

function loadEvents() {
    if (!fs.existsSync(dataFilePath)) {
        fs.writeFileSync(dataFilePath, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
}

function saveEvents(events) {
    fs.writeFileSync(dataFilePath, JSON.stringify(events, null, 2));
}

// 1. Create an Event
function createEvent(name, description, date, time, category, user) {
    const events = loadEvents();
    const newEvent = {
        id: events.length + 1,
        name,
        description,
        date,
        time,
        category,
        user,
        reminderSet: false
    };
    events.push(newEvent);
    saveEvents(events);
    return newEvent;
}

// 2. Get Events by Category
function getEventsByCategory(category) {
    const events = loadEvents();
    return events.filter(event => event.category === category);
}

// 3. Set Reminder
function setReminder(eventId) {
    const events = loadEvents();
    const event = events.find(e => e.id === eventId);
    if (event) {
        event.reminderSet = true;
        saveEvents(events);
        return event;
    }
    return null;
}

// 4. View Upcoming Events
function getUpcomingEvents() {
    const events = loadEvents();
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// 5. User Authentication
const users = {};
function registerUser(username, password) {
    if (users[username]) return "User already exists";
    users[username] = password;
    return "User registered successfully";
}

function loginUser(username, password) {
    return users[username] === password ? "Login successful" : "Invalid credentials";
}

module.exports = {
    createEvent,
    getEventsByCategory,
    setReminder,
    getUpcomingEvents,
    registerUser,
    loginUser
};
