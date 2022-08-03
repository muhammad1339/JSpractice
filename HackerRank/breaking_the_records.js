// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  // Write your code here
  let minScore = scores[0] || 0;
  let maxScore = scores[0] || 0;
  let bestScoreRecordCount = 0;
  let worstScoreREcordCount = 0;
  scores.forEach((element) => {
    if (minScore < element) {
      minScore = element;
      worstScoreREcordCount++;
    }
    if (maxScore > element) {
      maxScore = element;
      bestScoreRecordCount++;
    }
  });
  return [worstScoreREcordCount,bestScoreRecordCount];
}
