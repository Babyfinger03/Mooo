// Array of facts
const facts = [
  "The natural life expectancy of a cow is around twenty years. Some get up to 25 years old. The age of a cow can be determined by looking at its teeth. Also, the number of rings in its horns draws conclusions about the age. In the dairy industry, cows usually don’t become older than five years.",
  "Cows don’t need much sleep. Per day they only sleep around 30 minutes in deep sleep that is divided in 6-10 short periods. Nevertheless, they are lying up to 10 hours daily.",
  "Cows are very social animals. They live in small herds of 20-30 animals and form close friendships with other animals in their herd. Licking each other reinforces relationships between the animals and has a relaxing effect."
];

// Get the paragraph element to display the fact
const factText = document.getElementById("fact-text");

// Function to display facts
function displayFacts() {
  let index = 0;
  factText.textContent = facts[index]; // Set initial text
  const changeFact = () => {
    index = (index + 1) % facts.length;
    factText.textContent = facts[index]; // Update text content with next fact
  };
  changeFact(); // Initial call
  setInterval(changeFact, 5000); // Change fact every 5 seconds
}

// Call displayFacts function
displayFacts();
