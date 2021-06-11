function showSalary(users, age) {
  // ваш код...
  let userAge = users.filter((item) => item.age <= age);
  let string = userAge.map((item) => item.name + ', ' + item.balance).join('\n');
  return string;
}
