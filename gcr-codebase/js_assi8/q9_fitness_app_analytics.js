const workoutLogs = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(dataset) {
    if (!Array.isArray(dataset) || dataset.length === 0) {
      throw new Error("Workout dataset cannot be empty.");
    }
    this.dataset = dataset;
  }

  getActiveUsers() {
    return this.dataset.filter((entry) => entry.steps > 7000);
  }

  getAverageCalories() {
    const totalCalories = this.dataset.reduce((sum, entry) => sum + entry.calories, 0);
    return Number((totalCalories / this.dataset.length).toFixed(2));
  }

  getUserSummary() {
    return this.dataset.map(
      (entry) =>
        `User ${entry.user} walked ${entry.steps.toLocaleString()} steps and burned ${entry.calories} kcal.`
    );
  }
}

try {
  const analytics = new FitnessAnalytics(workoutLogs);

  console.log("Active Users (> 7,000 steps):", analytics.getActiveUsers());
  console.log("Average Calories Burned:", analytics.getAverageCalories(), "kcal");
  console.log("User Summaries:");
  analytics.getUserSummary().forEach((summary) => console.log(" -", summary));

  const emptyAnalytics = new FitnessAnalytics([]);
} catch (error) {
  console.error(`Analytics Error: ${error.message}`);
}
