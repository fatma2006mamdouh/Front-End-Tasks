//Build a Tiny Template Engine

const template = "Hello, {{name}} You are {{age}} years old.";

const data = {
  name: "fatima",
  age: 20,
};

const placeHolder = (statement) => {
  const arr = statement.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el[0] == "{") {
      const key1 = el.slice(2, -2);

      val = "";
      if (data[key1] != undefined) {
        val = data[key1];
      }
      if (val != "") {
        arr[i] = val;
      }
    }
  }
  let s = "";
  for (el of arr) {
    s += el + " ";
  }

  console.log(s);
};

placeHolder(template);
