function isOldEnoughToVote(age) {
  // your code here
  if (age < 18) {
    return false;
  } else if (age >= 18) {
    return true;
  }
}
