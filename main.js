// Study Materials Website - Main JavaScript
// Educational PHP Learning Platform

class StudyPlatform {
    constructor() {
        this.currentUser = this.loadUserProgress();
        this.quizData = this.initializeQuizData();
        this.questionPapers = this.initializeQuestionPapers();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadProgress();
        this.initializeAnimations();
        this.setupSearch();
    }

    // User Progress Management
    loadUserProgress() {
        const defaultProgress = {
            chaptersCompleted: [],
            quizScores: {},
            papersCompleted: [],
            totalStudyTime: 0,
            achievements: [],
            bookmarks: []
        };
        
        const saved = localStorage.getItem('phpStudyProgress');
        return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
    }

    saveUserProgress() {
        localStorage.setItem('phpStudyProgress', JSON.stringify(this.currentUser));
        this.updateProgressDisplay();
    }

    // Quiz System
    initializeQuizData() {
        return {
            chapter1: {
                title: "Introduction to PHP",
                questions: [
                    {
                        type: "multiple",
                        question: "Who developed PHP?",
                        options: ["Rasmus Lerdorf", "Dennis Ritchie", "Bjarne Stroustrup", "James Gosling"],
                        correct: 0,
                        explanation: "PHP was developed by Rasmus Lerdorf in 1994."
                    },
                    {
                        type: "truefalse",
                        question: "PHP stands for Personal Home Page.",
                        correct: false,
                        explanation: "PHP originally stood for Personal Home Page, but now stands for PHP: Hypertext Preprocessor."
                    },
                    {
                        type: "multiple",
                        question: "Which of the following is NOT a feature of PHP?",
                        options: ["Server-side scripting", "Database integration", "Client-side DOM manipulation", "File handling"],
                        correct: 2,
                        explanation: "PHP is primarily a server-side language. Client-side DOM manipulation is typically done with JavaScript."
                    },
                    {
                        type: "short",
                        question: "What symbol is used to start a PHP variable?",
                        answer: "$",
                        explanation: "PHP variables always start with the dollar sign ($)."
                    }
                ]
            },
            chapter2: {
                title: "Functions and Strings",
                questions: [
                    {
                        type: "multiple",
                        question: "How do you define a function in PHP?",
                        options: ["def functionName()", "function functionName()", "func functionName()", "define functionName()"],
                        correct: 1,
                        explanation: "PHP functions are defined using the 'function' keyword."
                    },
                    {
                        type: "truefalse",
                        question: "PHP function names are case-sensitive.",
                        correct: false,
                        explanation: "PHP function names are NOT case-sensitive."
                    },
                    {
                        type: "multiple",
                        question: "Which function returns the ASCII value of a character?",
                        options: ["chr()", "ord()", "ascii()", "char()"],
                        correct: 1,
                        explanation: "The ord() function returns the ASCII value of a character."
                    }
                ]
            },
            chapter3: {
                title: "Working with Arrays",
                questions: [
                    {
                        type: "multiple",
                        question: "How many types of arrays are there in PHP?",
                        options: ["2", "3", "4", "5"],
                        correct: 1,
                        explanation: "PHP has three types of arrays: indexed, associative, and multidimensional."
                    },
                    {
                        type: "truefalse",
                        question: "Array indices in PHP always start from 1.",
                        correct: false,
                        explanation: "Array indices in PHP start from 0 by default."
                    },
                    {
                        type: "multiple",
                        question: "Which function is used to create an array in PHP?",
                        options: ["create_array()", "array()", "new Array()", "make_array()"],
                        correct: 1,
                        explanation: "The array() function is used to create arrays in PHP."
                    }
                ]
            },
            chapter4: {
                title: "Object-Oriented Programming",
                questions: [
                    {
                        type: "multiple",
                        question: "What keyword is used to define a class in PHP?",
                        options: ["class", "object", "define", "struct"],
                        correct: 0,
                        explanation: "The 'class' keyword is used to define a class in PHP."
                    },
                    {
                        type: "truefalse",
                        question: "PHP supports multiple inheritance.",
                        correct: false,
                        explanation: "PHP does not support multiple inheritance, but it supports multiple interfaces."
                    },
                    {
                        type: "multiple",
                        question: "Which access modifier allows access only within the same class?",
                        options: ["public", "private", "protected", "internal"],
                        correct: 1,
                        explanation: "Private members are accessible only within the same class."
                    }
                ]
            },
            chapter5: {
                title: "Files and Directories",
                questions: [
                    {
                        type: "multiple",
                        question: "Which function opens a file in PHP?",
                        options: ["open_file()", "file_open()", "fopen()", "open()"],
                        correct: 2,
                        explanation: "The fopen() function is used to open files in PHP."
                    },
                    {
                        type: "truefalse",
                        question: "The 'w' mode in fopen() creates a new file if it doesn't exist.",
                        correct: true,
                        explanation: "The 'w' mode creates the file if it doesn't exist and truncates it if it does."
                    },
                    {
                        type: "multiple",
                        question: "Which mode is used for reading and writing in fopen()?",
                        options: ["r", "w", "a", "r+"],
                        correct: 3,
                        explanation: "The 'r+' mode opens a file for both reading and writing."
                    }
                ]
            }
        };
    }

    // Question Papers Data
    initializeQuestionPapers() {
        const papers = [];
        
        for (let i = 1; i <= 10; i++) {
            papers.push({
                id: i,
                title: `PHP Question Paper ${i}`,
                duration: 90, // 1:30 hours in minutes
                totalMarks: 40,
                sections: {
                    sectionA: {
                        title: "Section A: Short Answer Questions",
                        marks: 20,
                        questions: [
                            { marks: 2, question: "Explain the difference between echo and print in PHP." },
                            { marks: 2, question: "What are the different types of arrays in PHP?" },
                            { marks: 2, question: "Define constructor and its purpose in OOP." },
                            { marks: 2, question: "Explain file opening modes in PHP." },
                            { marks: 3, question: "Write a PHP program to calculate the factorial of a number." },
                            { marks: 3, question: "Explain the concept of inheritance with an example." },
                            { marks: 3, question: "How do you handle file uploads in PHP?" },
                            { marks: 3, question: "What is the difference between GET and POST methods?" }
                        ]
                    },
                    sectionB: {
                        title: "Section B: Long Answer Questions",
                        marks: 20,
                        questions: [
                            { marks: 5, question: "Explain the features and advantages of PHP as a server-side scripting language." },
                            { marks: 5, question: "Write a detailed note on PHP functions with examples of parameterized and non-parameterized functions." },
                            { marks: 5, question: "Explain object-oriented programming concepts in PHP with suitable examples." },
                            { marks: 5, question: "Describe file handling operations in PHP with proper examples." }
                        ]
                    }
                }
            });
        }
        
        return papers;
    }

    // Search Functionality
    setupSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        
        if (!searchInput) return;
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                searchResults.classList.add('hidden');
                return;
            }
            
            const results = this.performSearch(query);
            this.displaySearchResults(results, searchResults);
        });
    }

    performSearch(query) {
        const results = [];
        
        // Search in chapter titles and content
        const chapters = [
            { id: 'chapter1', title: 'Introduction to PHP', content: 'PHP evolution features syntax variables echo print' },
            { id: 'chapter2', title: 'Functions and Strings', content: 'functions strings built-in user-defined parameters' },
            { id: 'chapter3', title: 'Working with Arrays', content: 'arrays indexed associative multidimensional' },
            { id: 'chapter4', title: 'Object-Oriented Programming', content: 'classes objects inheritance polymorphism encapsulation' },
            { id: 'chapter5', title: 'Files and Directories', content: 'file handling fopen fread fwrite directory operations' }
        ];
        
        chapters.forEach(chapter => {
            if (chapter.title.toLowerCase().includes(query) || chapter.content.toLowerCase().includes(query)) {
                results.push({
                    type: 'chapter',
                    title: chapter.title,
                    url: `${chapter.id}.html`,
                    description: `Study material for ${chapter.title}`
                });
            }
        });
        
        // Search in quiz questions
        Object.keys(this.quizData).forEach(chapterId => {
            const chapter = this.quizData[chapterId];
            chapter.questions.forEach((question, index) => {
                if (question.question.toLowerCase().includes(query)) {
                    results.push({
                        type: 'quiz',
                        title: `Quiz: ${chapter.title}`,
                        url: `quiz.html?chapter=${chapterId}&q=${index}`,
                        description: question.question.substring(0, 50) + '...'
                    });
                }
            });
        });
        
        return results.slice(0, 8); // Limit to 8 results
    }

    displaySearchResults(results, container) {
        if (results.length === 0) {
            container.innerHTML = '<div class="p-4 text-gray-500">No results found</div>';
        } else {
            container.innerHTML = results.map(result => `
                <div class="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0">
                    <a href="${result.url}" class="block">
                        <div class="font-medium text-blue-600">${result.title}</div>
                        <div class="text-sm text-gray-600 mt-1">${result.description}</div>
                        <div class="text-xs text-gray-400 mt-1 capitalize">${result.type}</div>
                    </a>
                </div>
            `).join('');
        }
        
        container.classList.remove('hidden');
    }

    // Quiz System
    startQuiz(chapterId, difficulty = 'medium', questionCount = 5) {
        const quizData = this.quizData[chapterId];
        if (!quizData) return;
        
        // Shuffle questions and select based on count
        const shuffled = [...quizData.questions].sort(() => Math.random() - 0.5);
        const selectedQuestions = shuffled.slice(0, Math.min(questionCount, shuffled.length));
        
        this.currentQuiz = {
            chapterId,
            questions: selectedQuestions,
            currentQuestion: 0,
            answers: [],
            score: 0,
            startTime: Date.now()
        };
        
        this.displayQuizQuestion();
    }

    displayQuizQuestion() {
        const quiz = this.currentQuiz;
        const question = quiz.questions[quiz.currentQuestion];
        const quizContainer = document.getElementById('quizContainer');
        
        if (!quizContainer) return;
        
        const progress = ((quiz.currentQuestion + 1) / quiz.questions.length) * 100;
        
        quizContainer.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-6">
                <div class="mb-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm text-gray-600">Question ${quiz.currentQuestion + 1} of ${quiz.questions.length}</span>
                        <span class="text-sm text-blue-600">Score: ${quiz.score}/${quiz.currentQuestion}</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
                    </div>
                </div>
                
                <h3 class="text-lg font-semibold mb-4">${question.question}</h3>
                
                <div id="questionOptions" class="space-y-3 mb-6">
                    ${this.renderQuestionOptions(question)}
                </div>
                
                <div class="flex justify-between">
                    <button onclick="studyPlatform.previousQuestion()" 
                            class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
                            ${quiz.currentQuestion === 0 ? 'disabled' : ''}>
                        Previous
                    </button>
                    <button onclick="studyPlatform.nextQuestion()" 
                            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                            id="nextButton">
                        ${quiz.currentQuestion === quiz.questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        `;
    }

    renderQuestionOptions(question) {
        switch (question.type) {
            case 'multiple':
                return question.options.map((option, index) => `
                    <label class="flex items-center space-x-3 cursor-pointer p-3 border rounded-lg hover:bg-gray-50">
                        <input type="radio" name="answer" value="${index}" class="text-blue-600">
                        <span>${option}</span>
                    </label>
                `).join('');
                
            case 'truefalse':
                return `
                    <label class="flex items-center space-x-3 cursor-pointer p-3 border rounded-lg hover:bg-gray-50">
                        <input type="radio" name="answer" value="true" class="text-blue-600">
                        <span>True</span>
                    </label>
                    <label class="flex items-center space-x-3 cursor-pointer p-3 border rounded-lg hover:bg-gray-50">
                        <input type="radio" name="answer" value="false" class="text-blue-600">
                        <span>False</span>
                    </label>
                `;
                
            case 'short':
                return `
                    <input type="text" id="shortAnswer" 
                           class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           placeholder="Type your answer here...">
                `;
                
            default:
                return '';
        }
    }

    nextQuestion() {
        const quiz = this.currentQuiz;
        const question = quiz.questions[quiz.currentQuestion];
        const selectedAnswer = this.getSelectedAnswer(question);
        
        if (selectedAnswer === null) {
            alert('Please select an answer before continuing.');
            return;
        }
        
        // Store answer and check correctness
        quiz.answers[quiz.currentQuestion] = selectedAnswer;
        const isCorrect = this.checkAnswer(question, selectedAnswer);
        
        if (isCorrect) {
            quiz.score++;
        }
        
        // Move to next question or finish
        if (quiz.currentQuestion < quiz.questions.length - 1) {
            quiz.currentQuestion++;
            this.displayQuizQuestion();
        } else {
            this.finishQuiz();
        }
    }

    getSelectedAnswer(question) {
        switch (question.type) {
            case 'multiple':
            case 'truefalse':
                const selected = document.querySelector('input[name="answer"]:checked');
                return selected ? parseInt(selected.value) : null;
            case 'short':
                const input = document.getElementById('shortAnswer');
                return input ? input.value.trim() : '';
            default:
                return null;
        }
    }

    checkAnswer(question, answer) {
        switch (question.type) {
            case 'multiple':
                return answer === question.correct;
            case 'truefalse':
                return answer === question.correct;
            case 'short':
                return answer.toLowerCase() === question.answer.toLowerCase();
            default:
                return false;
        }
    }

    finishQuiz() {
        const quiz = this.currentQuiz;
        const percentage = Math.round((quiz.score / quiz.questions.length) * 100);
        const timeSpent = Math.round((Date.now() - quiz.startTime) / 1000);
        
        // Save score
        this.currentUser.quizScores[quiz.chapterId] = {
            score: quiz.score,
            total: quiz.questions.length,
            percentage: percentage,
            timeSpent: timeSpent,
            date: new Date().toISOString()
        };
        
        this.saveUserProgress();
        this.displayQuizResults();
    }

    displayQuizResults() {
        const quiz = this.currentQuiz;
        const percentage = Math.round((quiz.score / quiz.questions.length) * 100);
        const quizContainer = document.getElementById('quizContainer');
        
        let grade = 'Needs Improvement';
        if (percentage >= 90) grade = 'Excellent';
        else if (percentage >= 80) grade = 'Very Good';
        else if (percentage >= 70) grade = 'Good';
        else if (percentage >= 60) grade = 'Fair';
        
        quizContainer.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                <div class="mb-6">
                    <div class="text-6xl font-bold text-blue-600 mb-2">${percentage}%</div>
                    <div class="text-xl text-gray-700">${quiz.score}/${quiz.questions.length} Correct</div>
                    <div class="text-lg text-gray-600 mt-2">${grade}</div>
                </div>
                
                <div class="space-y-4 mb-6">
                    ${quiz.questions.map((question, index) => {
                        const isCorrect = this.checkAnswer(question, quiz.answers[index]);
                        return `
                            <div class="text-left p-3 border rounded-lg ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}">
                                <div class="font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}">
                                    Question ${index + 1}: ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                                </div>
                                ${!isCorrect ? `<div class="text-sm mt-1 text-gray-600">${question.explanation}</div>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="flex justify-center space-x-4">
                    <button onclick="studyPlatform.retakeQuiz()" 
                            class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Retake Quiz
                    </button>
                    <button onclick="studyPlatform.goToChapter()" 
                            class="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors">
                        Back to Chapter
                    </button>
                </div>
            </div>
        `;
    }

    // Question Paper System
    startQuestionPaper(paperId) {
        const paper = this.questionPapers.find(p => p.id === paperId);
        if (!paper) return;
        
        this.currentPaper = {
            ...paper,
            startTime: Date.now(),
            answers: {},
            currentSection: 'sectionA'
        };
        
        this.displayQuestionPaper();
        this.startPaperTimer();
    }

    displayQuestionPaper() {
        const paper = this.currentPaper;
        const container = document.getElementById('paperContainer');
        
        if (!container) return;
        
        container.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-6">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold">${paper.title}</h2>
                    <div class="text-right">
                        <div class="text-lg font-semibold text-red-600" id="paperTimer">90:00</div>
                        <div class="text-sm text-gray-600">Time Remaining</div>
                    </div>
                </div>
                
                <div class="mb-6">
                    <div class="flex space-x-4 border-b">
                        <button onclick="studyPlatform.switchPaperSection('sectionA')" 
                                class="px-4 py-2 border-b-2 ${paper.currentSection === 'sectionA' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'}">
                            Section A (${paper.sections.sectionA.marks} marks)
                        </button>
                        <button onclick="studyPlatform.switchPaperSection('sectionB')" 
                                class="px-4 py-2 border-b-2 ${paper.currentSection === 'sectionB' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'}">
                            Section B (${paper.sections.sectionB.marks} marks)
                        </button>
                    </div>
                </div>
                
                <div id="paperQuestions">
                    ${this.renderPaperSection(paper.currentSection)}
                </div>
                
                <div class="flex justify-between mt-6">
                    <button onclick="studyPlatform.savePaperProgress()" 
                            class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors">
                        Save Progress
                    </button>
                    <button onclick="studyPlatform.submitPaper()" 
                            class="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                        Submit Paper
                    </button>
                </div>
            </div>
        `;
    }

    renderPaperSection(sectionId) {
        const paper = this.currentPaper;
        const section = paper.sections[sectionId];
        
        return `
            <div class="space-y-6">
                <h3 class="text-lg font-semibold text-gray-800">${section.title}</h3>
                ${section.questions.map((question, index) => `
                    <div class="border rounded-lg p-4">
                        <div class="flex justify-between items-start mb-3">
                            <div class="flex-1">
                                <p class="font-medium mb-2">${question.question}</p>
                                <p class="text-sm text-gray-600">[${question.marks} marks]</p>
                            </div>
                        </div>
                        <textarea 
                            class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows="4"
                            placeholder="Write your answer here..."
                            onchange="studyPlatform.savePaperAnswer('${sectionId}', ${index}, this.value)"
                            data-section="${sectionId}"
                            data-question="${index}"
                        >${paper.answers[`${sectionId}_${index}`] || ''}</textarea>
                    </div>
                `).join('')}
            </div>
        `;
    }

    startPaperTimer() {
        const duration = 90 * 60; // 90 minutes in seconds
        let timeLeft = duration;
        
        this.paperTimer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            
            const timerElement = document.getElementById('paperTimer');
            if (timerElement) {
                timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                if (timeLeft <= 300) { // Last 5 minutes
                    timerElement.classList.add('text-red-800', 'animate-pulse');
                }
            }
            
            if (timeLeft <= 0) {
                this.submitPaper();
                clearInterval(this.paperTimer);
            }
            
            timeLeft--;
        }, 1000);
    }

    // Event Listeners
    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        // Chapter cards click handlers
        document.querySelectorAll('.chapter-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('button')) {
                    const chapterId = card.dataset.chapter;
                    window.location.href = `${chapterId}.html`;
                }
            });
        });
        
        // Search functionality
        document.addEventListener('click', (e) => {
            const searchContainer = document.getElementById('searchContainer');
            const searchResults = document.getElementById('searchResults');
            
            if (searchContainer && !searchContainer.contains(e.target)) {
                searchResults.classList.add('hidden');
            }
        });
    }

    // Animation Initialization
    initializeAnimations() {
        // Initialize Anime.js animations
        if (typeof anime !== 'undefined') {
            // Fade in elements on page load
            anime({
                targets: '.fade-in',
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: anime.stagger(100),
                easing: 'easeOutQuart'
            });
            
            // Chapter cards hover animation
            document.querySelectorAll('.chapter-card').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    anime({
                        targets: card,
                        scale: 1.05,
                        duration: 300,
                        easing: 'easeOutQuart'
                    });
                });
                
                card.addEventListener('mouseleave', () => {
                    anime({
                        targets: card,
                        scale: 1,
                        duration: 300,
                        easing: 'easeOutQuart'
                    });
                });
            });
        }
        
        // Initialize p5.js background if on homepage
        if (document.getElementById('heroBackground')) {
            this.initHeroBackground();
        }
    }

    initHeroBackground() {
        // P5.js sketch for animated background
        const sketch = (p) => {
            let particles = [];
            
            p.setup = () => {
                const canvas = p.createCanvas(p.windowWidth, 400);
                canvas.parent('heroBackground');
                
                // Create particles
                for (let i = 0; i < 50; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-1, 1),
                        vy: p.random(-1, 1),
                        size: p.random(2, 6),
                        opacity: p.random(0.3, 0.8)
                    });
                }
            };
            
            p.draw = () => {
                p.clear();
                
                // Update and draw particles
                particles.forEach(particle => {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    // Wrap around edges
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;
                    
                    // Draw particle
                    p.fill(0, 188, 212, particle.opacity * 255);
                    p.noStroke();
                    p.circle(particle.x, particle.y, particle.size);
                });
                
                // Draw connections
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dist = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        if (dist < 100) {
                            p.stroke(0, 188, 212, (1 - dist / 100) * 50);
                            p.strokeWeight(1);
                            p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                        }
                    }
                }
            };
            
            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, 400);
            };
        };
        
        new p5(sketch);
    }

    // Utility Functions
    loadProgress() {
        this.updateProgressDisplay();
    }

    updateProgressDisplay() {
        // Update chapter progress indicators
        document.querySelectorAll('.chapter-progress').forEach(element => {
            const chapterId = element.dataset.chapter;
            const isCompleted = this.currentUser.chaptersCompleted.includes(chapterId);
            element.style.width = isCompleted ? '100%' : '0%';
            
            if (isCompleted) {
                element.closest('.chapter-card').classList.add('completed');
            }
        });
        
        // Update overall stats
        const statsElements = {
            chaptersCompleted: document.getElementById('chaptersCompleted'),
            quizzesTaken: document.getElementById('quizzesTaken'),
            averageScore: document.getElementById('averageScore'),
            studyStreak: document.getElementById('studyStreak')
        };
        
        if (statsElements.chaptersCompleted) {
            statsElements.chaptersCompleted.textContent = this.currentUser.chaptersCompleted.length;
        }
        
        if (statsElements.quizzesTaken) {
            statsElements.quizzesTaken.textContent = Object.keys(this.currentUser.quizScores).length;
        }
        
        if (statsElements.averageScore) {
            const scores = Object.values(this.currentUser.quizScores);
            const average = scores.length > 0 ? 
                Math.round(scores.reduce((sum, score) => sum + score.percentage, 0) / scores.length) : 0;
            statsElements.averageScore.textContent = `${average}%`;
        }
    }

    // Navigation Functions
    goToChapter() {
        if (this.currentQuiz) {
            window.location.href = `${this.currentQuiz.chapterId}.html`;
        }
    }

    retakeQuiz() {
        if (this.currentQuiz) {
            this.startQuiz(this.currentQuiz.chapterId);
        }
    }

    switchPaperSection(sectionId) {
        if (this.currentPaper) {
            this.currentPaper.currentSection = sectionId;
            this.displayQuestionPaper();
        }
    }

    savePaperAnswer(sectionId, questionIndex, value) {
        if (this.currentPaper) {
            this.currentPaper.answers[`${sectionId}_${questionIndex}`] = value;
        }
    }

    savePaperProgress() {
        if (this.currentPaper) {
            localStorage.setItem('currentPaper', JSON.stringify(this.currentPaper));
            this.showNotification('Progress saved successfully!', 'success');
        }
    }

    submitPaper() {
        if (confirm('Are you sure you want to submit the paper? This action cannot be undone.')) {
            clearInterval(this.paperTimer);
            
            // Calculate score (simplified - in real implementation, this would be more complex)
            const totalQuestions = Object.keys(this.currentPaper.answers).length;
            const answeredQuestions = Object.values(this.currentPaper.answers).filter(answer => answer.trim().length > 0).length;
            
            this.currentUser.papersCompleted.push({
                paperId: this.currentPaper.id,
                completedAt: new Date().toISOString(),
                answers: this.currentPaper.answers,
                attemptedQuestions: answeredQuestions,
                totalQuestions: totalQuestions
            });
            
            this.saveUserProgress();
            this.showPaperResults();
        }
    }

    showPaperResults() {
        const container = document.getElementById('paperContainer');
        const paper = this.currentPaper;
        const totalQuestions = Object.keys(paper.answers).length;
        const answeredQuestions = Object.values(paper.answers).filter(answer => answer.trim().length > 0).length;
        
        container.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                <h2 class="text-2xl font-bold mb-6">Paper Submitted Successfully!</h2>
                
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-blue-600">${paper.id}</div>
                        <div class="text-sm text-gray-600">Paper Number</div>
                    </div>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-green-600">${answeredQuestions}/${totalQuestions}</div>
                        <div class="text-sm text-gray-600">Questions Attempted</div>
                    </div>
                </div>
                
                <div class="space-y-4 mb-6">
                    <h3 class="text-lg font-semibold">Your Answers:</h3>
                    ${Object.entries(paper.answers).map(([key, answer]) => {
                        if (answer.trim()) {
                            return `
                                <div class="text-left p-3 bg-gray-50 rounded-lg">
                                    <div class="font-medium mb-2">Question ${key.replace('_', '.')}</div>
                                    <div class="text-sm text-gray-700">${answer}</div>
                                </div>
                            `;
                        }
                        return '';
                    }).join('')}
                </div>
                
                <div class="flex justify-center space-x-4">
                    <button onclick="window.location.href='papers.html'" 
                            class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Back to Papers
                    </button>
                    <button onclick="studyPlatform.downloadPaperResults()" 
                            class="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                        Download Results
                    </button>
                </div>
            </div>
        `;
    }

    downloadPaperResults() {
        // Simplified PDF generation - in real implementation, use a library like jsPDF
        const paper = this.currentPaper;
        const content = `
PHP Question Paper ${paper.id} - Results

Submitted: ${new Date().toLocaleString()}

Answers:
${Object.entries(paper.answers).map(([key, answer]) => 
    `Question ${key.replace('_', '.')}: ${answer}`
).join('\n')}
        `;
        
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `PHP_Paper_${paper.id}_Results.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize the platform when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.studyPlatform = new StudyPlatform();
});

// Utility functions for global access
function startQuiz(chapterId) {
    if (window.studyPlatform) {
        window.studyPlatform.startQuiz(chapterId);
    }
}

function startQuestionPaper(paperId) {
    if (window.studyPlatform) {
        window.studyPlatform.startQuestionPaper(paperId);
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}