const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');
const answerReviewContainer = document.getElementById('answerReview');
const topicTitle = document.getElementById('topicTitle');
let currentQuestion = 0;
let score = 0;
let currentTopic = 'General Knowledge';
let userAnswers = [];


const questions = {
    'General Knowledge': [
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'London', 'Madrid'],
        correctAnswer: 'Paris'
      },
      // Add more questions for General Knowledge here
      {
        question: 'What is the currency of Japan?',
        options: ['Yen', 'Euro', 'Dollar', 'Pound'],
        correctAnswer: 'Yen'
      },
      {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
        correctAnswer: 'William Shakespeare'
      },
      {
        question: 'What is the largest ocean in the world?',
        options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        correctAnswer: 'Pacific Ocean'
      },
      {
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
      },
      {
        question: 'Who is the author of "Harry Potter" book series?',
        options: ['J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'J.R.R. Tolkien'],
        correctAnswer: 'J.K. Rowling'
      },
      {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale'
      },
      {
        question: 'Which famous scientist developed the theory of relativity?',
        options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie'],
        correctAnswer: 'Albert Einstein'
      },
      {
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Kilimanjaro', 'Mount Everest', 'Mount McKinley', 'Mount Fuji'],
        correctAnswer: 'Mount Everest'
      },
      {
        question: 'Who painted the famous painting "The Starry Night"?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
        correctAnswer: 'Vincent van Gogh'
      },
      // Add more questions here
    ],
    // Add questions for other topics here
    // Add questions for other topics here
    'Science': [
        {
          question: 'What is the chemical symbol for water?',
          options: ['O', 'W', 'H2', 'H2O'],
          correctAnswer: 'H2O'
        },
        {
          question: 'Which gas do plants use for photosynthesis?',
          options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Methane'],
          correctAnswer: 'Carbon dioxide'
        },
        {
          question: 'What is the largest organ in the human body?',
          options: ['Liver', 'Brain', 'Skin', 'Heart'],
          correctAnswer: 'Skin'
        },
        {
          question: 'What is the process by which plants make their food?',
          options: ['Respiration', 'Germination', 'Photosynthesis', 'Transpiration'],
          correctAnswer: 'Photosynthesis'
        },
        {
          question: 'What is the smallest unit of an element that retains its chemical properties?',
          options: ['Atom', 'Molecule', 'Cell', 'Nucleus'],
          correctAnswer: 'Atom'
        },
        {
          question: 'What is the study of the Earth\'s atmosphere and weather?',
          options: ['Geology', 'Biology', 'Meteorology', 'Astronomy'],
          correctAnswer: 'Meteorology'
        },
        {
          question: 'What is the force that opposes the motion of objects through a fluid (liquid or gas)?',
          options: ['Gravity', 'Inertia', 'Friction', 'Tension'],
          correctAnswer: 'Friction'
        },
        {
          question: 'Which gas do humans breathe in?',
          options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
          correctAnswer: 'Oxygen'
        },
        {
          question: 'What is the process by which an organism develops from a fertilized egg?',
          options: ['Evolution', 'Metabolism', 'Reproduction', 'Development'],
          correctAnswer: 'Development'
        },
        {
          question: 'Which part of the plant absorbs water and nutrients from the soil?',
          options: ['Stem', 'Leaves', 'Roots', 'Flowers'],
          correctAnswer: 'Roots'
        },
        // Add more questions here
      ],
  
      'Geography': [
        {
          question: 'Which continent is known as the "Land of the Rising Sun"?',
          options: ['Asia', 'Africa', 'Europe', 'Australia'],
          correctAnswer: 'Asia'
        },
        {
          question: 'What is the largest desert in the world?',
          options: ['Gobi Desert', 'Sahara Desert', 'Kalahari Desert', 'Atacama Desert'],
          correctAnswer: 'Sahara Desert'
        },
        {
          question: 'What is the capital of Canada?',
          options: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
          correctAnswer: 'Ottawa'
        },
        {
          question: 'Which river is the longest in the world?',
          options: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
          correctAnswer: 'Nile'
        },
        {
          question: 'Which country is known as the "Land of Fire and Ice"?',
          options: ['Iceland', 'Greenland', 'Norway', 'Canada'],
          correctAnswer: 'Iceland'
        },
        {
          question: 'Which famous canal connects the Mediterranean Sea to the Red Sea?',
          options: ['Suez Canal', 'Panama Canal', 'Kiel Canal', 'Erie Canal'],
          correctAnswer: 'Suez Canal'
        },
        {
          question: 'What is the tallest mountain in North America?',
          options: ['Mount Kilimanjaro', 'Mount Everest', 'Mount McKinley', 'Mount Fuji'],
          correctAnswer: 'Mount McKinley'
        },
        {
          question: 'Which country is known as the "Land Down Under"?',
          options: ['Australia', 'New Zealand', 'South Africa', 'Argentina'],
          correctAnswer: 'Australia'
        },
        {
          question: 'Which city is famous for its canals, gondolas, and historic architecture?',
          options: ['Paris', 'Venice', 'London', 'Rome'],
          correctAnswer: 'Venice'
        },
        {
          question: 'Which continent is the largest by land area?',
          options: ['Asia', 'Africa', 'North America', 'Antarctica'],
          correctAnswer: 'Asia'
        },
        // Add more questions here
      ],
    // Add more questions for Geography here

    'Math': [
        {
          question: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4'
        },
        {
          question: 'What is the square root of 144?',
          options: ['12', '10', '16', '14'],
          correctAnswer: '12'
        },
        {
          question: 'What is the value of π (pi) to two decimal places?',
          options: ['3.14', '3.16', '3.12', '3.18'],
          correctAnswer: '3.14'
        },
        {
          question: 'What is 8 multiplied by 7?',
          options: ['49', '54', '56', '64'],
          correctAnswer: '56'
        },
        {
          question: 'Simplify the expression: 2(4 + 3) - 5',
          options: ['7', '9', '11', '13'],
          correctAnswer: '11'
        },
        {
          question: 'What is the area of a square with side length 6 units?',
          options: ['18 sq units', '24 sq units', '30 sq units', '36 sq units'],
          correctAnswer: '36 sq units'
        },
        {
          question: 'What is the perimeter of a rectangle with length 12 units and width 8 units?',
          options: ['24 units', '40 units', '56 units', '80 units'],
          correctAnswer: '40 units'
        },
        {
          question: 'If x = 3 and y = 5, what is the value of x + y?',
          options: ['6', '7', '8', '9'],
          correctAnswer: '8'
        },
        {
          question: 'What is the value of 3 to the power of 4?',
          options: ['27', '64', '81', '12'],
          correctAnswer: '81'
        },
        {
          question: 'What is the result of 15 divided by 3 plus 2?',
          options: ['3', '5', '7', '9'],
          correctAnswer: '7'
        },
        // Add more questions here
      ],
};

function buildQuiz() {
    const currentQuestionData = questions[currentTopic][currentQuestion];
  
    const card = document.createElement('div');
    card.classList.add('card');
    const questionElement = document.createElement('h4');
    questionElement.textContent = currentQuestionData.question;
    card.appendChild(questionElement);
  
    currentQuestionData.options.forEach((option) => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="question${currentQuestion}" value="${option}">
        ${option}
      `;
      card.appendChild(label);
    });
  
    quizContainer.innerHTML = ''; // Clear the previous content
    quizContainer.appendChild(card); // Add the new content
  }

  function showResult() {
    const selectedOption = quizContainer.querySelector(`input[name=question${currentQuestion}]:checked`);
    if (selectedOption) {
      userAnswers.push(selectedOption.value);
  
      if (selectedOption.value === questions[currentTopic][currentQuestion].correctAnswer) {
        score++;
      }
  
      currentQuestion++;
      if (currentQuestion < questions[currentTopic].length) {
        buildQuiz();
      } else {
        // Store user answers in local storage
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  
        // Hide the quiz and show the result container
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        resultContainer.style.display = 'block';
        resultContainer.querySelector('#score').textContent = `${score} out of ${questions[currentTopic].length}`;
  
        // Attach event listener to the "Review Answers" button
        const reviewAnswersButton = document.getElementById('reviewAnswers');
        reviewAnswersButton.addEventListener('click', goToReviewPage);
      }
    }
  }
  
  function goToReviewPage() {
    // Retrieve the user's answers from local storage
    const storedUserAnswers = localStorage.getItem('userAnswers');
    if (storedUserAnswers) {
      const userAnswers = JSON.parse(storedUserAnswers);
  
      // Display the review on the review page
      const answerReviewContainer = document.getElementById('answerReview');
      answerReviewContainer.innerHTML = '';
      for (let i = 0; i < questions[currentTopic].length; i++) {
        const questionData = questions[currentTopic][i];
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer');
  
        // Display the question
        const questionElement = document.createElement('h4');
        questionElement.textContent = questionData.question;
        answerElement.appendChild(questionElement);
  
        // Display the user's answer
        const userAnswerElement = document.createElement('p');
        userAnswerElement.textContent = `Your Answer: ${userAnswers[i]}`;
        if (userAnswers[i] === questionData.correctAnswer) {
          userAnswerElement.style.color = 'green'; // Mark correct answers in green
        } else {
          userAnswerElement.style.color = 'red'; // Mark incorrect answers in red
        }
        answerElement.appendChild(userAnswerElement);
  
        // Display the correct answer
        const correctAnswerElement = document.createElement('p');
        correctAnswerElement.textContent = `Correct Answer: ${questionData.correctAnswer}`;
        answerElement.appendChild(correctAnswerElement);
  
        answerReviewContainer.appendChild(answerElement);
      }
    } else {
      // Handle the case where there are no stored user answers
      console.log('No user answers found.');
    }
  
    // Display the user's score on the review page
    const reviewScoreElement = document.getElementById('score'); // Fix this line
    reviewScoreElement.textContent = `Your Score: ${score} out of ${questions[currentTopic].length}`;
  
    // Show the review page and hide the main result container
    document.getElementById('result').style.display = 'none';
    document.getElementById('answerReview').style.display = 'block';
  }
  
  
  function changeTopic(topic) {
    currentTopic = topic;
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    topicTitle.textContent = `${currentTopic} Quiz`;
    buildQuiz();
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    submitButton.style.display = 'block';
    answerReviewContainer.style.display = 'none';
  }
buildQuiz();

submitButton.addEventListener('click', showResult);
