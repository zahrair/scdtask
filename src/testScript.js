const { createEvent, getEventsByCategory, setReminder, getUpcomingEvents, registerUser, loginUser } = require("./events");

// User Registration and Authentication
console.log(registerUser("user1", "password123"));
console.log(loginUser("user1", "password123"));

// Create Events
console.log(createEvent("Team Meeting", "Discuss project status", "2025-03-20", "10:00", "Meetings", "user1"));
console.log(createEvent("Doctor's Appointment", "Annual checkup", "2025-03-22", "14:00", "Appointments", "user1"));

// Set Reminder
console.log(setReminder(1));

// View Events
console.log(getEventsByCategory("Meetings"));
console.log(getUpcomingEvents());
