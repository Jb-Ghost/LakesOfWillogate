// Enhanced Search Functionality for Lakes of Willowgate Website

// Popular search keywords to suggest
// Popular search keywords to suggest
const POPULAR_SEARCHES = [
    "Calendar",
    "Events",
    "Pool Hours",
    "Fitness Classes",
    "Trainers",
    "Parks",
    "Contact",
    "Forms",
    "Volunteer",
    "Youth Programs"
];

// Comprehensive search database with extensive keywords
const searchDatabase = [
    // COMMUNITY EVENTS PAGE - Calendar Section
    { 
        title: "Community Calendar", 
        url: "community-events.html", 
        scrollTo: ".calendar-section",
        category: "Events", 
        keywords: ["calendar", "community calendar", "event calendar", "dates", "schedule", "monthly calendar", "event dates", "days", "activities schedule", "community events dates", "days for activities", "when", "what day", "date picker"],
        description: "View the full community events calendar with all scheduled activities"
    },
    
    // COMMUNITY EVENTS - Upcoming Events
    { 
        title: "Upcoming Events List", 
        url: "community-events.html#upcoming-list", 
        category: "Events",
        keywords: ["upcoming events", "today", "this week", "this month", "what's happening", "events list", "todays events", "events today", "weekly events", "monthly events"],
        description: "See what's happening in the community today, this week, and this month"
    },
    
    // COMMUNITY EVENTS - Submit Event
    { 
        title: "Submit an Event", 
        url: "community-events.html#submit-event", 
        category: "Events",
        keywords: ["submit event", "add event", "post event", "create event", "event submission", "event form", "submit activity", "organize event", "host event"],
        description: "Add your event to the community calendar"
    },
    
    // COMMUNITY EVENTS - Guidelines
    { 
        title: "Event Guidelines", 
        url: "community-events.html#guidelines", 
        category: "Events",
        keywords: ["event guidelines", "event rules", "hosting rules", "event requirements", "community standards", "event approval", "event moderation", "acceptable events"],
        description: "Rules and guidelines for hosting community events"
    },
    
    // COMMUNITY EVENTS - Specific Events
    { 
        title: "Volunteer Opportunities", 
        url: "community-events.html", 
        category: "Events",
        keywords: ["volunteer", "volunteering", "community service", "give back", "help out", "volunteer work", "service opportunities", "volunteer events"],
        description: "Find volunteer opportunities in the community"
    },
    
    // FITNESS CENTER - Trainers Section
    { 
        title: "Personal Trainers", 
        url: "amenities.html#trainers", 
        category: "Fitness",
        keywords: ["trainers", "personal trainer", "fitness trainer", "book trainer", "training", "coaching", "personal training", "fitness coach", "certified trainer", "Jordan Lee", "Ava Martinez", "Marcus Reid", "Sophie Chen", "Dylan Brooks", "Elena Cruz"],
        description: "Meet our certified personal trainers and book sessions"
    },
    
    // FITNESS CENTER - Classes
    { 
        title: "Fitness Classes Schedule", 
        url: "amenities.html#classes", 
        category: "Fitness",
        keywords: ["classes", "fitness classes", "group classes", "class schedule", "weekly classes", "yoga", "pilates", "zumba", "spin", "hiit", "boxing", "dance fitness", "bootcamp", "cardio", "strength training", "core training", "stretching", "meditation", "wellness workshop"],
        description: "View weekly fitness class schedule and activities"
    },
    
    // FITNESS CENTER - Hours
    { 
        title: "Fitness Center Hours", 
        url: "amenities.html#fitness", 
        category: "Fitness",
        keywords: ["gym hours", "fitness hours", "fitness center hours", "operating hours", "open hours", "when open", "hours of operation", "gym schedule"],
        description: "Fitness center operating hours and schedule"
    },
    
    // FITNESS CENTER - Locations
    { 
        title: "Fitness Center Locations", 
        url: "amenities.html#fitness", 
        category: "Fitness",
        keywords: ["gym location", "fitness location", "fitness centers", "downtown fitness hub", "lakeside athletic complex", "riverside community center", "where is gym", "gym address"],
        description: "Find fitness center locations and addresses"
    },
    
    // FITNESS CENTER - Facilities
    { 
        title: "Fitness Facilities & Amenities", 
        url: "amenities.html#fitness", 
        category: "Fitness",
        keywords: ["gym equipment", "facilities", "amenities", "strength room", "cardio machines", "weights", "treadmill", "elliptical", "locker rooms", "showers", "childcare", "wifi", "outdoor track", "group studio"],
        description: "View all fitness center facilities and amenities"
    },
    
    // POOLS & PARKS - Pool Hours
    { 
        title: "Pool Hours & Schedule", 
        url: "amenities.html#pool-hours", 
        category: "Pools & Parks",
        keywords: ["pool hours", "pool schedule", "swimming hours", "when is pool open", "pool times", "lap swim", "open swim", "adult swim", "family swim", "swim times", "aquatic hours"],
        description: "View operating hours for all community pools"
    },
    
    // POOLS & PARKS - Pool Locations
    { 
        title: "Pool Locations", 
        url: "amenities.html#pools", 
        category: "Pools & Parks",
        keywords: ["pool location", "pools", "swimming pool", "aquatic center", "lakeside aquatic center", "riverside community pool", "downtown fitness pool", "where to swim", "pool address"],
        description: "Find all pool locations and addresses"
    },
    
    // POOLS & PARKS - Pool Rules
    { 
        title: "Pool Rules & Safety", 
        url: "amenities.html#pool-rules", 
        category: "Pools & Parks",
        keywords: ["pool rules", "pool safety", "swimming rules", "pool regulations", "safety guidelines", "pool requirements", "lifeguard", "pool policy"],
        description: "Safety guidelines and pool regulations"
    },
    
    // POOLS & PARKS - Park Locations
    { 
        title: "Park Locations", 
        url: "amenities.html#park-locations", 
        category: "Pools & Parks",
        keywords: ["park", "parks", "park locations", "playground", "outdoor", "central park", "lakeside park", "sports complex", "nature reserve", "where is park", "park address"],
        description: "Find parks and their addresses"
    },
    
    // POOLS & PARKS - Activities
    { 
        title: "Park & Pool Activities", 
        url: "amenities.html#activities", 
        category: "Pools & Parks",
        keywords: ["activities", "things to do", "park activities", "swimming", "hiking", "walking", "sports", "basketball", "tennis", "soccer", "picnic", "playground", "splash pad", "fishing", "trails", "bike paths"],
        description: "Activities available at community parks and pools"
    },
    
    // POOLS & PARKS - Specific Facilities
    { 
        title: "Splash Pad", 
        url: "amenities.html#pools", 
        category: "Pools & Parks",
        keywords: ["splash pad", "water play", "kids splash", "children water", "spray park"],
        description: "Splash pad information and location"
    },
    
    // RESOURCES - Contacts
    { 
        title: "Contact Directory", 
        url: "resource.html#contacts", 
        category: "Resources",
        keywords: ["contact", "contacts", "phone number", "email", "contact us", "community office", "reach us", "get in touch", "directory", "phone", "call", "555-123-4567", "community@willowgate.org"],
        description: "Contact information for community services"
    },
    
    // RESOURCES - Forms
    { 
        title: "Forms & Documents", 
        url: "resource.html#forms", 
        category: "Resources",
        keywords: ["forms", "documents", "downloads", "paperwork", "applications", "membership form", "event form", "facility reservation", "community guidelines", "pdf", "download forms"],
        description: "Download community forms and documents"
    },
    
    // RESOURCES - Hours & Locations
    { 
        title: "Facility Hours & Locations", 
        url: "resource.html#hours", 
        category: "Resources",
        keywords: ["hours", "operating hours", "locations", "addresses", "when open", "facility hours", "office hours", "location map"],
        description: "Hours and locations for all community facilities"
    },
    
    // RESOURCES - Map
    { 
        title: "Community Map", 
        url: "resource.html#map", 
        category: "Resources",
        keywords: ["map", "location map", "google maps", "directions", "where", "address", "find us", "navigate"],
        description: "Interactive map of Lakes of Willowgate"
    },
    
    // RESOURCES - Emergency
    { 
        title: "Emergency Contacts", 
        url: "resource.html", 
        scrollTo: ".contacts-section",
        category: "Resources",
        keywords: ["emergency", "urgent", "911", "emergency contact", "help", "crisis", "security", "safety emergency"],
        description: "24/7 emergency support contacts"
    },
    
    // HOME PAGE
    { 
        title: "Home", 
        url: "index.html", 
        category: "Home",
        keywords: ["home", "homepage", "main page", "welcome", "lakes of willowgate", "community hub"],
        description: "Return to homepage"
    },
    
    // SPECIFIC TRAINER SEARCHES
    { 
        title: "Jordan Lee - Strength Training", 
        url: "amenities.html#trainers", 
        category: "Fitness",
        keywords: ["jordan lee", "strength", "conditioning", "weight training", "muscle building", "powerlifting"],
        description: "Book Jordan Lee for strength and conditioning training"
    },
    { 
        title: "Ava Martinez - Yoga", 
        url: "amenities.html#trainers", 
        category: "Fitness",
        keywords: ["ava martinez", "yoga", "mobility", "flexibility", "meditation", "mindfulness"],
        description: "Book Ava Martinez for yoga and mobility sessions"
    },
    { 
        title: "Marcus Reid - HIIT Training", 
        url: "amenities.html#trainers", 
        category: "Fitness",
        keywords: ["marcus reid", "hiit", "high intensity", "athletic training", "interval training", "sports training"],
        description: "Book Marcus Reid for HIIT and athletic training"
    },
    
    // SPECIFIC CLASS TYPES
    { 
        title: "Yoga Classes", 
        url: "amenities.html#classes", 
        category: "Fitness",
        keywords: ["yoga", "yoga class", "meditation", "mindfulness", "zen", "relaxation"],
        description: "Yoga and meditation class schedule"
    },
    { 
        title: "Dance & Zumba", 
        url: "amenities.html#classes", 
        category: "Fitness",
        keywords: ["dance", "zumba", "dance fitness", "latin dance", "cardio dance"],
        description: "Dance fitness and Zumba classes"
    },
    { 
        title: "Spin & Cycling", 
        url: "amenities.html#classes", 
        category: "Fitness",
        keywords: ["spin", "spin class", "cycling", "bike", "indoor cycling", "stationary bike"],
        description: "Indoor cycling and spin classes"
    },
    
    // MEMBERSHIP & REGISTRATION
    { 
        title: "Membership Information", 
        url: "resource.html#forms", 
        category: "Resources",
        keywords: ["membership", "join", "sign up", "register", "membership application", "become a member", "enrollment"],
        description: "Community membership information and application"
    },
    
    // SEASONAL & SPECIAL
    { 
        title: "Holiday Hours", 
        url: "amenities.html#pools", 
        category: "Pools & Parks",
        keywords: ["holiday", "holiday hours", "christmas", "new year", "seasonal", "winter schedule", "summer schedule"],
        description: "Holiday and seasonal facility hours"
    },
    
    // ADDITIONAL USEFUL SEARCHES
    { 
        title: "Community Office", 
        url: "resource.html", 
        scrollTo: ".hours-location-section",
        category: "Resources",
        keywords: ["community office", "main office", "office location", "office hours", "administration"],
        description: "Community office location and hours"
    },
    { 
        title: "Youth Programs", 
        url: "resource.html#forms", 
        category: "Resources",
        keywords: ["youth", "kids", "children", "youth programs", "summer camp", "kids activities", "children programs"],
        description: "Youth programs and activities"
    },
    { 
        title: "Senior Activities", 
        url: "community-events.html", 
        category: "Events",
        keywords: ["senior", "elderly", "seniors", "older adults", "senior programs", "senior activities"],
        description: "Programs and activities for seniors"
    },
];

let selectedIndex = -1;
let currentSuggestions = [];
let showPopularSearches = false;

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    const searchContainer = document.querySelector('.search-container');
    
    if (!searchInput) return;
    
    // Create suggestions dropdown if it doesn't exist
    let suggestionsDiv = document.getElementById('searchSuggestions');
    if (!suggestionsDiv) {
        suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'search-suggestions';
        suggestionsDiv.id = 'searchSuggestions';
        searchContainer.appendChild(suggestionsDiv);
    }
    
    // Enable input event for live suggestions - NOW ACTIVE!
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        if (query.length === 0) {
            showPopularSearchesDropdown();
        } else {
            showSuggestions(query);
        }
    });
    
    // Focus event - show popular searches when input is focused and empty
    searchInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            showPopularSearchesDropdown();
        }
    });
    
    // Keyboard navigation with arrow keys and Enter
    searchInput.addEventListener('keydown', function(e) {
        const items = document.querySelectorAll('.search-suggestion-item');
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelectedItem(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, -1);
            updateSelectedItem(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIndex >= 0 && selectedIndex < currentSuggestions.length) {
                navigateToResult(currentSuggestions[selectedIndex]);
            } else {
                performSearch();
            }
        }
    });
    
    // Click outside to close
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            hideSuggestions();
        }
    });
    
    // Search button click
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
}

// Show popular searches when input is empty
function showPopularSearchesDropdown() {
    const suggestionsDiv = document.getElementById('searchSuggestions');
    
    const popularHTML = `
        <div style="padding: 12px 20px; font-size: 11px; color: #0052a3; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; border-bottom: 1px solid #f0f0f0;">Popular Searches</div>
        ${POPULAR_SEARCHES.map((search) => `
            <div class="search-suggestion-item" onclick="document.getElementById('searchInput').value='${search}'; performSearch();">
                <div class="suggestion-title">🔍 ${search}</div>
                <div class="suggestion-description">Search for ${search.toLowerCase()}</div>
            </div>
        `).join('')}
    `;
    
    suggestionsDiv.innerHTML = popularHTML;
    suggestionsDiv.classList.add('active');
    currentSuggestions = [];
    selectedIndex = -1;
    showPopularSearches = true;
}

// Show suggestions based on query
function showSuggestions(query) {
    const suggestionsDiv = document.getElementById('searchSuggestions');
    showPopularSearches = false;
    
    if (!query || query.length < 1) {
        showPopularSearchesDropdown();
        return;
    }
    
    // Filter and rank results based on keywords
    currentSuggestions = searchDatabase.filter(item => {
        // Search in keywords array (highest priority)
        const keywordMatch = item.keywords && item.keywords.some(keyword => 
            keyword.toLowerCase().includes(query)
        );
        
        // Search in title
        const titleMatch = item.title.toLowerCase().includes(query);
        
        // Search in description
        const descMatch = item.description.toLowerCase().includes(query);
        
        return keywordMatch || titleMatch || descMatch;
    }).sort((a, b) => {
        // Prioritize exact keyword matches
        const aExactMatch = a.keywords && a.keywords.some(k => k.toLowerCase() === query);
        const bExactMatch = b.keywords && b.keywords.some(k => k.toLowerCase() === query);
        
        if (aExactMatch && !bExactMatch) return -1;
        if (!aExactMatch && bExactMatch) return 1;
        
        // Then prioritize keyword matches
        const aKeywordMatch = a.keywords && a.keywords.some(k => k.toLowerCase().includes(query));
        const bKeywordMatch = b.keywords && b.keywords.some(k => k.toLowerCase().includes(query));
        
        if (aKeywordMatch && !bKeywordMatch) return -1;
        if (!aKeywordMatch && bKeywordMatch) return 1;
        
        return 0;
    }).slice(0, 8); // Limit to 8 suggestions
    
    if (currentSuggestions.length === 0) {
        // Show "no results" message with helpful suggestions
        suggestionsDiv.innerHTML = `
            <div style="padding: 20px; text-align: center; color: #999;">
                <div style="font-size: 14px; margin-bottom: 10px;">No results for "${query}"</div>
                <div style="font-size: 12px; color: #bbb;">Try searching for: calendar, events, yoga, pool, trainers</div>
            </div>
        `;
        suggestionsDiv.classList.add('active');
        return;
    }
    
    // Build suggestions HTML
    suggestionsDiv.innerHTML = currentSuggestions.map((item, index) => `
        <div class="search-suggestion-item" data-index="${index}" onclick="navigateToResult(currentSuggestions[${index}])">
            <div class="suggestion-category">${item.category}</div>
            <div class="suggestion-title">${highlightMatch(item.title, query)}</div>
            <div class="suggestion-description">${highlightMatch(item.description, query)}</div>
        </div>
    `).join('');
    
    suggestionsDiv.classList.add('active');
    selectedIndex = -1;
}

// Hide suggestions
function hideSuggestions() {
    const suggestionsDiv = document.getElementById('searchSuggestions');
    if (suggestionsDiv) {
        suggestionsDiv.classList.remove('active');
        selectedIndex = -1;
    }
}

// Update selected item styling
function updateSelectedItem(items) {
    items.forEach((item, index) => {
        if (index === selectedIndex) {
            item.classList.add('selected');
            item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else {
            item.classList.remove('selected');
        }
    });
}

// Highlight matching text
function highlightMatch(text, query) {
    if (!query || query.length === 0) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong style="color: #0052a3; background: rgba(0, 82, 163, 0.1); padding: 0 2px; border-radius: 2px;">$1</strong>');
}

// Navigate to selected result with smooth scrolling to specific section
function navigateToResult(item) {
    if (item.scrollTo) {
        // Store scroll target in sessionStorage
        sessionStorage.setItem('scrollToSection', item.scrollTo);
    }
    window.location.href = item.url;
}

// Check for scroll target on page load
document.addEventListener('DOMContentLoaded', function() {
    const scrollTarget = sessionStorage.getItem('scrollToSection');
    if (scrollTarget) {
        sessionStorage.removeItem('scrollToSection');
        setTimeout(() => {
            const element = document.querySelector(scrollTarget);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Add a highlight effect
                element.style.transition = 'background-color 0.6s ease';
                const originalBg = element.style.backgroundColor;
                element.style.backgroundColor = 'rgba(0, 82, 163, 0.1)';
                setTimeout(() => {
                    element.style.backgroundColor = originalBg;
                }, 2000);
            }
        }, 300);
    }
});

// Perform search (fallback or when Enter is pressed without selection)
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    
    // Find best matches using keywords
    const results = searchDatabase.map(item => {
        let score = 0;
        
        // Check keywords (highest weight)
        if (item.keywords) {
            item.keywords.forEach(keyword => {
                const keywordLower = keyword.toLowerCase();
                if (keywordLower === query) {
                    score += 100; // Exact match
                } else if (keywordLower.includes(query)) {
                    score += 50; // Partial match
                } else if (query.includes(keywordLower)) {
                    score += 30;
                }
            });
        }
        
        // Check title
        const titleLower = item.title.toLowerCase();
        if (titleLower === query) {
            score += 80;
        } else if (titleLower.includes(query)) {
            score += 40;
        }
        
        // Check description
        if (item.description.toLowerCase().includes(query)) {
            score += 20;
        }
        
        return { ...item, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
    
    if (results.length === 0) {
        alert('No results found for: "' + query + '"\n\nTry searching for:\n• Calendar, events, dates\n• Trainers, classes, yoga\n• Pool hours, swimming\n• Parks, hiking, activities\n• Contacts, forms, resources');
        return;
    }
    
    // Navigate to best match with scroll support
    navigateToResult(results[0]);
}

function initializeHeaderBehavior() {
    const siteHeader = document.querySelector('header');
    if (!siteHeader) {
        return;
    }

    const updateHeaderState = () => {
        const shouldCompact = window.scrollY > 40;
        siteHeader.classList.toggle('is-compact', shouldCompact);
    };

    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);
    updateHeaderState();
}

function initializeRatingPrompt() {
    if (window.__ratingGlobalInitialized) {
        return;
    }

    window.__ratingGlobalInitialized = true;
    window.__ratingGlobal = true;

    const minDelayMs = 180000;
    const maxDelayMs = 180000;
    const pageId = (window.location.pathname.split('/').pop() || 'index').replace('.html', '') || 'index';
    const ratingStoreKey = 'pageRatings:' + pageId;
    let ratingTimerId = null;

    const ensureRatingModal = () => {
        let modal = document.getElementById('siteRatingModal');
        if (modal) {
            return modal;
        }

        modal = document.createElement('div');
        modal.id = 'siteRatingModal';
        modal.className = 'rating-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('aria-labelledby', 'ratingTitle');
        modal.innerHTML = `
            <div class="rating-modal-content">
                <button type="button" class="rating-close" aria-label="Close">&times;</button>
                <p class="eyebrow">Feedback</p>
                <h2 id="ratingTitle">Rate site functionality</h2>
                <p class="rating-desc">How well did the site function for what you needed?</p>
                <form id="ratingForm" class="modal-form">
                    <div class="rating-stars" role="radiogroup" aria-label="Star rating">
                        <input type="radio" id="rating-5" name="rating" value="5">
                        <label for="rating-5" aria-label="5 stars">★</label>
                        <input type="radio" id="rating-4" name="rating" value="4">
                        <label for="rating-4" aria-label="4 stars">★</label>
                        <input type="radio" id="rating-3" name="rating" value="3">
                        <label for="rating-3" aria-label="3 stars">★</label>
                        <input type="radio" id="rating-2" name="rating" value="2">
                        <label for="rating-2" aria-label="2 stars">★</label>
                        <input type="radio" id="rating-1" name="rating" value="1">
                        <label for="rating-1" aria-label="1 star">★</label>
                    </div>
                    <div class="form-field">
                        <label for="ratingComment">Comment (optional)</label>
                        <textarea id="ratingComment" name="comment" rows="3" placeholder="Tell us what worked or what did not function as expected."></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="btn-secondary">Not now</button>
                        <button type="submit" class="btn-primary">Send Feedback</button>
                    </div>
                </form>
                <p class="rating-note">This feedback is stored locally for demo purposes.</p>
            </div>
        `;

        document.body.appendChild(modal);
        return modal;
    };

    const openRatingModal = () => {
        const modal = ensureRatingModal();
        if (!modal) {
            return;
        }

        const scrollY = window.scrollY || window.pageYOffset;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('is-open');
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflowX = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.dataset.scrollY = scrollY;
    };

    const closeRatingModal = () => {
        const modal = document.getElementById('siteRatingModal');
        if (!modal) {
            return;
        }

        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('is-open');
        const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowX = '';
        document.body.style.paddingRight = '';
        delete document.body.dataset.scrollY;
        window.scrollTo(0, scrollY);
        const form = modal.querySelector('#ratingForm');
        if (form) {
            form.reset();
        }
        scheduleNextPrompt();
    };

    const getRandomDelay = () => {
        return Math.floor(Math.random() * (maxDelayMs - minDelayMs + 1)) + minDelayMs;
    };

    const scheduleNextPrompt = () => {
        if (ratingTimerId) {
            clearTimeout(ratingTimerId);
        }

        const delay = getRandomDelay();
        ratingTimerId = setTimeout(() => {
            const modal = ensureRatingModal();
            if (!modal) {
                scheduleNextPrompt();
                return;
            }

            if (modal.classList.contains('is-open')) {
                scheduleNextPrompt();
                return;
            }

            openRatingModal();
        }, delay);
    };

    const modal = ensureRatingModal();
    if (!modal) {
        return;
    }

    const form = modal.querySelector('#ratingForm');
    const closeButton = modal.querySelector('.rating-close');
    const dismissButton = modal.querySelector('.btn-secondary');

    if (closeButton) {
        closeButton.addEventListener('click', closeRatingModal);
    }

    if (dismissButton) {
        dismissButton.addEventListener('click', closeRatingModal);
    }

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeRatingModal();
        }
    });

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const selectedRating = modal.querySelector('input[name="rating"]:checked');
            if (!selectedRating) {
                alert('Please choose a star rating before submitting.');
                return;
            }

            const payload = {
                rating: selectedRating.value,
                comment: modal.querySelector('#ratingComment').value.trim(),
                submittedDate: new Date().toLocaleString(),
                page: pageId
            };

            const ratings = JSON.parse(localStorage.getItem(ratingStoreKey) || '[]');
            ratings.push(payload);
            localStorage.setItem(ratingStoreKey, JSON.stringify(ratings));

            alert('Thanks for your feedback!');
            closeRatingModal();
        });
    }

    scheduleNextPrompt();
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initializeSearch();
        initializeHeaderBehavior();
        initializeRatingPrompt();
    });
} else {
    initializeSearch();
    initializeHeaderBehavior();
    initializeRatingPrompt();
}

/*
 * COMPREHENSIVE SEARCH ENGINE - Lakes of Willowgate
 * 
 * This search engine provides intelligent navigation across the entire website with:
 * 
 * 1. KEYWORD-BASED SEARCH
 *    - 200+ keywords covering all website content
 *    - Multiple variations for each concept (e.g., "calendar", "dates", "schedule")
 *    - Smart matching prioritizes exact matches over partial matches
 * 
 * 2. AUTO-SCROLL FUNCTIONALITY
 *    - Automatically scrolls to specific sections on pages
 *    - Highlights the target section briefly for user orientation
 *    - Uses sessionStorage for cross-page scroll coordination
 * 
 * 3. LIVE SUGGESTIONS
 *    - Real-time search suggestions as you type (min 1 character)
 *    - Up to 8 relevant suggestions shown
 *    - Keyboard navigation with arrow keys
 *    - Visual highlighting of matches
 *    - Popular searches shown when input is focused and empty
 * 
 * 4. SMART RANKING
 *    - Exact keyword matches: 100 points
 *    - Partial keyword matches: 50 points
 *    - Title matches: 40-80 points
 *    - Description matches: 20 points
 * 
 * 5. COVERED CONTENT AREAS
 *    - Community Events (calendar, upcoming events, submissions, guidelines)
 *    - Fitness Center (trainers, classes, schedules, facilities)
 *    - Pools & Parks (hours, locations, rules, activities)
 *    - Resources (contacts, forms, hours, maps, emergency info)
 * 
 * EXAMPLE USAGE:
 *    - Search "calendar" → Community Events page, scrolls to calendar
 *    - Search "yoga" → Fitness Center page, scrolls to class schedule
 *    - Search "pool hours" → Pools & Parks page, scrolls to hours section
 *    - Search "contact" → Resources page, scrolls to contact directory
 *    - Click on a popular search term or type to see suggestions
 * 
 * FEATURES:
 *    - Click search box → See 10 popular search terms
 *    - Type in search box → See up to 8 relevant results
 *    - Use arrow keys → Navigate suggestions
 *    - Press Enter → Go to selected result or perform search
 */