const feedback = "Great product! Fast delivery and amazing sound quality!";
const wordCount = feedback.trim().split(/\s+/).length;
const normalizedFeedback = feedback.toLowerCase();
const hasNegativeFeedback = normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");

console.log(`Word count: ${wordCount}`);
if (!hasNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
