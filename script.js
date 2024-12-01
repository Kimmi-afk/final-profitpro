

// Event listener for the calculate button

// JS OF NEW

function calculate() {
  // Inputs
  const cogs = parseFloat(document.getElementById('cogs').value) || 0;
  const fixedCosts = parseFloat(document.getElementById('fixedCosts').value) || 0;
  const variableCosts = parseFloat(document.getElementById('variableCosts').value) || 0;
  const profitMargin = parseFloat(document.getElementById('profitMargin').value) || 0;
  const salesVolume = parseFloat(document.getElementById('salesVolume').value) || 0;
  const elasticity = parseFloat(document.getElementById('elasticity').value) || 0;
  const competitorPricing = parseFloat(document.getElementById('competitorPricing').value) || 0;
  const discount = parseFloat(document.getElementById('discount').value) || 0;

  // Calculations
  const adjustedCOGS = cogs - discount; // Adjusted COGS after discount
  const sellingPrice = adjustedCOGS + variableCosts + (adjustedCOGS * profitMargin / 100);
  const profitPerUnit = sellingPrice - (adjustedCOGS + variableCosts);
  const totalProfit = profitPerUnit * salesVolume - fixedCosts;
  const totalRevenue = sellingPrice * salesVolume;
  const breakEvenUnits = fixedCosts / profitPerUnit;

  // Suggested Pricing Strategy (simple based on elasticity and competitor pricing)
  let strategy = "Neutral";
  if (elasticity > 1 && sellingPrice > competitorPricing) {
    strategy = "Lower Price";
  } else if (elasticity < 1 && sellingPrice < competitorPricing) {
    strategy = "Raise Price";
  }

  // Outputs
  document.getElementById('sellingPrice').value = sellingPrice.toFixed(2);
  document.getElementById('profitPerUnit').value = profitPerUnit.toFixed(2);
  document.getElementById('totalProfit').value = totalProfit.toFixed(2);
  document.getElementById('totalRevenue').value = totalRevenue.toFixed(2);
  document.getElementById('breakEvenUnits').value = breakEvenUnits > 0 ? breakEvenUnits.toFixed(2) : "N/A";
  document.getElementById('pricingStrategy').value = strategy;
}

function clearInputs() {
  // Get all input elements inside the table
  const inputs = document.querySelectorAll('.input-table input');
  
  // Clear the value of each input
  inputs.forEach(input => {
    input.value = '';
  });
}

// Function to load feedback from localStorage and display it
function loadFeedback() {
  const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || []; // Get feedback from localStorage or empty array
  const feedbackListElement = document.getElementById('feedback-list');
  feedbackListElement.innerHTML = ''; // Clear existing feedback list
  
  // Loop through feedback items and display them
  feedbackList.forEach(function(feedback, index) {
    const feedbackItem = document.createElement('li');
    feedbackItem.textContent = feedback.text;
    
    // Create a "Remove" button for each feedback item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    
    // Add an event listener to the "Remove" button
    removeButton.addEventListener('click', function() {
      removeFeedback(index); // Pass the index of the feedback to be removed
    });
    
    feedbackItem.appendChild(removeButton);
    feedbackListElement.appendChild(feedbackItem);
  });
}

// Function to remove feedback from localStorage
function removeFeedback(index) {
  const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
  
  // Remove the feedback item from the array
  feedbackList.splice(index, 1);
  
  // Save updated feedback list to localStorage
  localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
  
  // Reload the feedback list to reflect the changes
  loadFeedback();
}

// Function to load feedback from localStorage and display it
function loadFeedback() {
  const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || []; // Get feedback from localStorage or empty array
  const feedbackListElement = document.getElementById('feedback-list');
  feedbackListElement.innerHTML = ''; // Clear existing feedback list
  
  // Loop through feedback items and display them
  feedbackList.forEach(function(feedback, index) {
    const feedbackItem = document.createElement('li');
    feedbackItem.textContent = feedback.text;
    
    // Create a "Remove" button for each feedback item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    
    // Add an event listener to the "Remove" button
    removeButton.addEventListener('click', function() {
      removeFeedback(index); // Pass the index of the feedback to be removed
    });
    
    feedbackItem.appendChild(removeButton);
    feedbackListElement.appendChild(feedbackItem);
  });
}

// Function to remove feedback from localStorage
function removeFeedback(index) {
  const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
  
  // Remove the feedback item from the array
  feedbackList.splice(index, 1);
  
  // Save updated feedback list to localStorage
  localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
  
  // Reload the feedback list to reflect the changes
  loadFeedback();
}

// Handle feedback form submission
document.getElementById('feedback-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get the feedback and user name from the form inputs
  const feedbackText = document.getElementById('feedback').value.trim();
  const userName = document.getElementById('user-name').value.trim(); // Added user name field

  // Only proceed if the feedback is not empty
  if (feedbackText !== '' && userName !== '') {
    // Get existing feedback from localStorage
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    
    // Create a new feedback object with a user name and feedback text
    const newFeedback = {
      text: `${userName}: ${feedbackText}`, // Store feedback with user name
      timestamp: Date.now() // Timestamp as a unique ID for each feedback
    };
    
    // Add new feedback to the list
    feedbackList.push(newFeedback);
    
    // Save updated feedback list to localStorage
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
    
    // Clear the feedback textarea and user name input after submission
    document.getElementById('feedback').value = '';
    document.getElementById('user-name').value = '';  // Clear user name
    
    // Reload the feedback list to display the new entry
    loadFeedback();
  }
});

// Load feedback when the page is loaded
window.onload = function() {
  loadFeedback();
};

