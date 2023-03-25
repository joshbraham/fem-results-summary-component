const data = [
	{
		category: "Reaction",
		score: 80,
		icon: "./assets/images/icon-reaction.svg",
	},
	{
		category: "Memory",
		score: 92,
		icon: "./assets/images/icon-memory.svg",
	},
	{
		category: "Verbal",
		score: 61,
		icon: "./assets/images/icon-verbal.svg",
	},
	{
		category: "Visual",
		score: 72,
		icon: "./assets/images/icon-visual.svg",
	},
];

const overallScore = Math.round(
	data.reduce((sum, category) => sum + category.score, 0) / data.length
);

const overallScoreElement = document.querySelector(".overall-score");
overallScoreElement.textContent = overallScore;

const stats = document.querySelectorAll(".stat");
stats.forEach((stat) => {
	const score = stat.querySelector(".score");
	score.textContent = data.find(
		(obj) => obj.category.toLowerCase() === stat.dataset.type
	).score;
});
