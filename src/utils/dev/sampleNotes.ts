export const sampleNotes = [
  {
    filename: 'welcome.md',
    content: `# Welcome to VoidTxt

A simple note-taking app built with Tauri and React.

## Features
- Markdown support
- Local file storage
- Clean interface`
  },
  {
    filename: 'getting-started.md',
    content: `# Getting Started

1. Click the **new** button to create a note
2. Start typing in markdown format
3. Click **save** to store your note
4. Use **list** to browse all notes`
  },
  {
    filename: 'sample-note.md',
    content: `# Sample Note

This is a sample note to demonstrate the app.

## Markdown Features
- **Bold text**
- *Italic text*
- \`Code snippets\`
- Lists and more!

Enjoy taking notes!`
  },
  {
    filename: 'budget-tracker.md',
    content: `# Budget Tracker - January 2026

## Income
**Salary:** $4,200
**Freelance:** $300
**Total:** $4,500

## Expenses

### Housing
- Rent: $1,200
- Utilities: $150
**Total:** $1,350

### Food
- Groceries: $400
- Dining out: $150
**Total:** $550

### Transportation
- Car payment: $350
- Gas: $120
**Total:** $470

### Total Expenses: $2,370
### Remaining: $2,130

## Savings Goals
- Emergency fund: $1,000/month target
- Vacation fund: $500/month target
- Investment: $500/month target`
  },
  {
    filename: 'clean-code-notes.md',
    content: `# Book Notes - Clean Code

## Key Takeaways

### Chapter 1: Clean Code
- Code should be elegant and efficient
- Clean code reads like well-written prose
- Consider the next developer who will maintain your code

### Chapter 2: Meaningful Names
- Choose descriptive and unambiguous names
- Avoid disinformation and noise words
- Use pronounceable and searchable names

### Chapter 3: Functions
- Functions should be small (4-6 lines ideally)
- Do one thing, do it well
- Use descriptive names that reveal intent

## Action Items
- [ ] Review current codebase for naming improvements
- [ ] Break down large functions into smaller ones
- [ ] Add meaningful comments where needed`
  },
  {
    filename: 'code-snippets.md',
    content: `# Code Snippets

## React Hook
\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setStoredValue = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setStoredValue];
}
\`\`\`

## CSS Flexbox
\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## Git Commands
\`\`\`bash
git add .
git commit -m "feat: add new feature"
git push origin main
\`\`\``
  },
  {
    filename: 'coding-tips.md',
    content: `# Coding Tips

## JavaScript
- Use \`const\` by default, \`let\` when reassignment needed
- Prefer \`===\` over \`==\`
- Use template literals for string interpolation
- Arrow functions for concise syntax

## React
- Keep components small and focused
- Use hooks for state and side effects
- Memoize expensive computations
- Keys are required for list items

## CSS
- Use Flexbox for layouts
- Grid for complex layouts
- CSS custom properties for theming
- Mobile-first responsive design

## General
- Write self-documenting code
- Use meaningful variable names
- Keep functions small (single responsibility)
- Comment complex logic`
  },
  {
    filename: 'contacts.md',
    content: `# Contact Information

## Family
- Mom: (555) 123-4567
- Dad: (555) 234-5678
- Sister: (555) 345-6789

## Friends
- Alice: (555) 456-7890
- Bob: (555) 567-8901
- Charlie: (555) 678-9012

## Work
- Manager: (555) 789-0123
- HR: (555) 890-1234
- IT Support: (555) 901-2345

## Emergency
- Doctor: (555) 012-3456
- Dentist: (555) 123-4567
- Police: 911`
  },
  {
    filename: 'daily-journal.md',
    content: `# Daily Journal - January 11, 2026

## Morning Reflection
Feeling productive today. Got a good night's sleep and have a clear plan for the day.

## Accomplishments
- Completed VoidTxt app features
- Fixed several bugs in the UI
- Updated documentation
- Reviewed pull requests

## Gratitude
- Thankful for good health
- Grateful for supportive colleagues
- Appreciative of modern development tools

## Tomorrow's Goals
- Start learning TypeScript advanced patterns
- Plan the next app feature
- Review personal budget
- Exercise routine`
  },
  {
    filename: 'dream-journal.md',
    content: `# Dream Journal

## Last Night's Dream
I was flying over a beautiful landscape. The ground was covered in flowers and there were rivers flowing through valleys. I could control my flight path just by thinking about where I wanted to go.

Suddenly, I found myself in a library with books that contained all the knowledge of the universe. I was trying to find a specific book about programming, but the titles kept changing.

## Interpretation
- Flying often represents freedom and control
- Libraries symbolize knowledge and learning
- Changing titles might indicate uncertainty about career path

## Recurring Themes
- Flying dreams
- Being chased
- Discovering hidden knowledge
- Time travel elements`
  },
  {
    filename: 'gardening.md',
    content: `# Gardening Notes

## Spring Planting
- Tomatoes: Started seeds indoors
- Peppers: Direct sow after frost
- Lettuce: Succession planting every 2 weeks
- Herbs: Basil, cilantro, parsley

## Current Plants
- Rose bush in front yard
- Tomato plants on balcony
- Herb garden in kitchen window
- Succulents on desk

## Tasks
- [ ] Water plants twice a week
- [ ] Fertilize monthly
- [ ] Prune dead leaves
- [ ] Check for pests

## Harvest Log
- Lettuce: 2 heads this week
- Herbs: Regular kitchen use
- Tomatoes: First ripe fruit expected soon`
  },
  {
    filename: 'health-goals.md',
    content: `# Health Goals

## Fitness
- [ ] Run 5K without stopping
- [ ] Increase push-up count to 50
- [ ] Try yoga once a week
- [ ] Maintain healthy weight

## Nutrition
- [ ] Drink 8 glasses of water daily
- [ ] Eat 5 servings of vegetables
- [ ] Reduce processed foods
- [ ] Meal prep for the week

## Mental Health
- [ ] Meditate 10 minutes daily
- [ ] Read 30 minutes before bed
- [ ] Limit screen time after 9 PM
- [ ] Practice gratitude daily`
  },
  {
    filename: 'home-maintenance.md',
    content: `# Home Maintenance

## Monthly Tasks
- [ ] Clean refrigerator coils
- [ ] Check smoke detector batteries
- [ ] Vacuum baseboards
- [ ] Dust light fixtures

## Quarterly Tasks
- [ ] Clean dryer vent
- [ ] Service HVAC system
- [ ] Check gutters
- [ ] Test water pressure

## Annual Tasks
- [ ] Clean chimney
- [ ] Service water heater
- [ ] Check foundation
- [ ] Paint exterior

## Emergency Contacts
- Plumber: (555) 123-4567
- Electrician: (555) 234-5678
- HVAC: (555) 345-6789`
  },
  {
    filename: 'interview-prep.md',
    content: `# Interview Preparation

## Technical Skills
- Data structures: Arrays, linked lists, trees, graphs
- Algorithms: Sorting, searching, dynamic programming
- System design: Scalability, databases, APIs
- Languages: JavaScript, TypeScript, Python

## Behavioral Questions
- Tell me about a challenging project
- How do you handle conflicting priorities?
- Describe a time you failed and learned
- How do you stay updated with technology?

## Company Research
- Mission and values
- Recent news and products
- Leadership team
- Company culture and benefits
- Tech stack and tools used

## Practice Strategy
- Daily coding problems on LeetCode
- Mock interviews with peers
- System design practice
- Behavioral story preparation

## Offer Negotiation
- Research salary ranges (levels.fyi)
- Consider total compensation
- Don't accept first offer
- Prepare counter-offers with data`
  },
  {
    filename: 'japan-travel.md',
    content: `# Travel Plans - Japan Trip

## Trip Overview
**Destination:** Tokyo, Kyoto, Osaka
**Duration:** 10 days (March 15-25, 2026)
**Budget:** $3,500 total

## Itinerary

### Days 1-3: Tokyo
- Shibuya Crossing
- Senso-ji Temple
- Tokyo Skytree
- Tsukiji Outer Market

### Days 4-6: Kyoto
- Fushimi Inari Shrine
- Kinkaku-ji (Golden Pavilion)
- Arashiyama Bamboo Forest

### Days 7-9: Osaka
- Osaka Castle
- Dotonbori district
- Universal Studios

### Day 10: Return
- Flight back home

## Packing List
- [ ] Passport
- [ ] Japan Rail Pass
- [ ] Portable WiFi
- [ ] Comfortable walking shoes
- [ ] Light jacket
- [ ] Universal adapter

## Reservations
- [x] Flights booked
- [x] Tokyo hotel
- [x] Kyoto ryokan
- [ ] Osaka hotel`
  },
  {
    filename: 'language-learning.md',
    content: `# Language Learning - Spanish

## Current Progress
- Level: Intermediate (B1)
- Started: September 2025
- Daily practice: 30-45 minutes

## Skills Breakdown
- Listening: Good comprehension of podcasts
- Speaking: Can hold basic conversations
- Reading: Understands news articles
- Writing: Can write emails and short stories

## Learning Resources
- Duolingo: Daily streak 247 days
- SpanishPod101: Intermediate lessons
- Netflix: Spanish shows with subtitles
- Local language exchange meetups

## Goals for 2026
- Reach B2 level by June
- Have 30-minute conversation without switching to English
- Read a novel in Spanish
- Write a journal entry daily

## Vocabulary Focus
- Business terminology
- Cooking and food
- Travel phrases
- Idiomatic expressions

## Challenges
- Subjunctive mood still difficult
- Regional variations (Spain vs Latin America)
- False cognates
- Maintaining consistency during travel`
  },
  {
    filename: 'learning-plan.md',
    content: `# Learning Plan

## This Month
- [ ] Complete React tutorial
- [ ] Learn TypeScript basics
- [ ] Practice CSS Grid
- [ ] Build a small project

## Skills to Learn
- Advanced JavaScript
- Node.js backend
- Database design
- API development

## Resources
- MDN Web Docs
- freeCodeCamp
- YouTube tutorials
- Official documentation`
  },
  {
    filename: 'meeting-notes.md',
    content: `# Meeting Notes - Team Standup

**Date:** January 11, 2026
**Time:** 9:00 AM - 9:30 AM
**Attendees:** Alice, Bob, Charlie, Diana

## Agenda
1. Project updates
2. Blockers
3. Next steps

## Discussion Points

### Project Updates
- Frontend development: 80% complete
- Backend API: 65% complete
- Testing: 40% complete

### Blockers
- Waiting for design approval
- Database connection issues
- Third-party API limitations

### Action Items
- [ ] Alice: Follow up on design feedback
- [ ] Bob: Debug database connection
- [ ] Charlie: Research API alternatives
- [ ] Diana: Update project timeline

## Next Meeting
January 18, 2026 - 9:00 AM`
  },
  {
    filename: 'movie-reviews.md',
    content: `# Movie Reviews

## Recent Watches

### The Matrix (1999) - ★★★★★
Revolutionary sci-fi action film that redefined the genre. Groundbreaking visual effects and philosophical themes about reality vs simulation.

### Inception (2010) - ★★★★☆
Mind-bending heist thriller in dream worlds. Christopher Nolan's complex storytelling keeps you engaged throughout.

### Blade Runner 2049 (2017) - ★★★★☆
Beautiful dystopian sequel with stunning visuals and deep philosophical questions about humanity and AI.

## To Watch
- [ ] Dune (2021)
- [ ] The Martian
- [ ] Arrival
- [ ] Interstellar`
  },
  {
    filename: 'passwords.md',
    content: `# Password Manager

## Banking
- Main Bank: user123 / pass456!
- Credit Union: jsmith / secure789

## Email
- Gmail: john.smith@gmail.com / appPass123
- Work: jsmith@company.com / workPass456

## Social Media
- Twitter: @johnsmith / social789
- LinkedIn: john.smith@email.com / linked321

## Security Notes
- Use unique passwords for each account
- Enable two-factor authentication
- Change passwords every 3 months
- Never share passwords via email`
  },
  {
    filename: 'pet-care.md',
    content: `# Pet Care - Max

## Daily Routine
- Morning walk: 30 minutes
- Breakfast: 1 cup kibble + wet food
- Afternoon walk: 20 minutes
- Dinner: 1 cup kibble + wet food
- Evening play: 15 minutes

## Health
- Vet visits: Annual checkup due
- Vaccinations: Up to date
- Weight: 75 lbs (healthy)
- Energy level: High

## Supplies Needed
- [ ] Dog food (2 bags)
- [ ] Treats
- [ ] Flea medication
- [ ] New collar

## Training
- Commands mastered: sit, stay, come
- Working on: loose leash walking
- Tricks: shake paws, roll over`
  },
  {
    filename: 'photography-tips.md',
    content: `# Photography Tips

## Camera Settings
- Portrait: f/2.8, 1/125s, ISO 100-400
- Landscape: f/11, 1/250s, ISO 100
- Street: f/5.6, 1/500s, ISO 400-800
- Low light: f/2.8, 1/60s, ISO 1600+

## Composition Rules
- Rule of Thirds: Divide frame into 3x3 grid
- Leading Lines: Use roads, rivers, fences
- Framing: Doorways, windows, natural frames
- Symmetry: Balanced, mirror-like shots

## Lighting
- Golden Hour: 1 hour after sunrise/before sunset
- Blue Hour: 20-30 min before sunrise/after sunset
- Avoid: Harsh midday sun
- Use: Reflectors, diffusers for control

## Post-Processing
- Lightroom: Exposure, contrast, color grading
- Sharpening: Apply at end, mask as needed
- Noise reduction: For high ISO shots
- Export: Web (72 DPI), Print (300 DPI)`
  },
  {
    filename: 'project-ideas.md',
    content: `# Ideas for Side Projects

## Web Apps
- Personal finance tracker
- Recipe management system
- Habit tracking app
- Local event finder

## Mobile Apps
- Workout planner
- Language learning flashcards
- Grocery list optimizer
- Plant care reminders

## Desktop Tools
- File organizer
- Code snippet manager
- Writing productivity timer
- Note-taking with encryption

## Current Priority
Building VoidTxt - a clean, simple note-taking app with markdown support and local storage.`
  },
  {
    filename: 'shopping-list.md',
    content: `# Shopping List

## Groceries
- [ ] Milk
- [ ] Bread
- [ ] Eggs
- [ ] Cheese
- [ ] Apples
- [ ] Bananas
- [ ] Chicken
- [ ] Rice
- [ ] Pasta
- [ ] Coffee

## Household
- [ ] Laundry detergent
- [ ] Dish soap
- [ ] Trash bags
- [ ] Paper towels
- [ ] Toilet paper

## Personal Care
- [ ] Toothpaste
- [ ] Shampoo
- [ ] Deodorant
- [ ] Razor blades`
  },
  {
    filename: 'songwriting.md',
    content: `# Songwriting Ideas

## Current Project
**Title:** Midnight Drive
**Genre:** Indie Folk
**Progress:** 80% complete

### Verse 1
Headlights cut through the pouring rain
Neon signs blur as we drive again
Your hand on my knee, the radio low
Whispering secrets only we know

### Chorus
We're chasing ghosts down these empty roads
Heartbreak highway, carrying our loads
Midnight drive, nowhere to go
Just you and me and the radio

## Future Songs
- City Lights (pop/rock)
- Paper Chains (acoustic)
- Echo Chamber (electronic)
- Broken Compass (folk)

## Recording Setup
- Interface: Focusrite Scarlett
- Microphone: Audio-Technica AT2020
- Software: GarageBand + Logic Pro
- Instruments: Guitar, ukulele, keyboard`
  },
  {
    filename: 'spaghetti-recipe.md',
    content: `# Recipe - Spaghetti Carbonara

## Ingredients
- 400g spaghetti
- 200g pancetta or guanciale
- 2 large eggs
- 1 cup grated Pecorino Romano cheese
- Freshly ground black pepper
- Salt

## Instructions
1. Cook spaghetti in salted boiling water until al dente
2. Cook pancetta in a skillet until crispy
3. Whisk eggs with cheese and pepper
4. Reserve pasta water, then drain pasta
5. Combine hot pasta with pancetta
6. Remove from heat and add egg mixture
7. Toss quickly, adding pasta water if needed
8. Serve immediately

## Tips
- Work quickly to avoid scrambled eggs
- Use high-quality cheese
- Pasta water helps create the sauce`
  },
  {
    filename: 'tech-tutorials.md',
    content: `# Tech Tutorials

## React Hooks Guide

### useState
\`\`\`javascript
const [count, setCount] = useState(0);
// State variable and setter function
\`\`\`

### useEffect
\`\`\`javascript
useEffect(() => {
  // Side effect logic
  return () => {
    // Cleanup function
  };
}, [dependencies]); // Dependency array
\`\`\`

### useContext
\`\`\`javascript
const ThemeContext = createContext('light');
const theme = useContext(ThemeContext);
\`\`\`

### Custom Hooks
\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setStoredValue = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setStoredValue];
}
\`\`\`

## CSS Grid vs Flexbox

### Flexbox (1D layouts)
\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

### Grid (2D layouts)
\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
}
\`\`\`

## Git Workflow
\`\`\`bash
# Feature branch workflow
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
# Create pull request
\`\`\``
  },
  {
    filename: 'todo.md',
    content: `# Todo List

## Work Tasks
- [ ] Finish project documentation
- [ ] Review code changes
- [ ] Update dependencies
- [ ] Run tests

## Personal Tasks
- [ ] Grocery shopping
- [ ] Clean the house
- [ ] Call family
- [ ] Exercise`
  },
  {
    filename: 'weekend-plans.md',
    content: `# Weekend Plans

## Saturday
- Morning: Gym workout
- Afternoon: Grocery shopping
- Evening: Movie night

## Sunday
- Morning: Brunch with friends
- Afternoon: Read book
- Evening: Prepare meals for week

## Tasks
- [ ] Laundry
- [ ] Clean apartment
- [ ] Pay bills
- [ ] Plan next week`
  },
  {
    filename: 'workout-log.md',
    content: `# Workout Log

## This Week's Plan
- Monday: Upper body strength
- Tuesday: Cardio (30 min run)
- Wednesday: Lower body strength
- Thursday: Rest or light yoga
- Friday: Full body circuit
- Saturday: Long hike
- Sunday: Active recovery

## Today's Workout - Upper Body
**Date:** January 11, 2026

### Exercises
- Bench Press: 3 sets × 10 reps @ 185 lbs
- Bent-over Rows: 3 sets × 12 reps @ 135 lbs
- Shoulder Press: 3 sets × 10 reps @ 115 lbs
- Bicep Curls: 3 sets × 12 reps @ 45 lbs
- Tricep Extensions: 3 sets × 12 reps @ 40 lbs

### Notes
- Good energy level today
- Form felt solid on all lifts
- Increased weight on bench press
- Cardio: 20 min brisk walking

## Goals
- Increase bench press to 200 lbs
- Run 5K in under 25 minutes
- Maintain consistent workout schedule
- Improve overall flexibility`
  }
];
