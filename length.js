var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let maxLength = friends[0];

for (i = 0; i < friends.length; i++) {
  if (friends[i].length > maxLength.length) maxLength = friends[i];
}
console.log(maxLength);
