type Dog = { name: string; breed: string; owner?: string };

const dog: Dog = {
  name: "🐶 Jaccy",
  breed: "Collie",
};

console.log(dog.name);

if (dog.owner) {
  const owner = dog.owner;
  console.log(owner);
}
