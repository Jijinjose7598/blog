
const outputContainer = document.createElement("div");
outputContainer.setAttribute("id", "output-container");
outputContainer.setAttribute(
  "style",
  "display:flex;align-items:center;justify-content:center;height:100vh;font-size:40px;background:black;color:white"
);
document.body.appendChild(outputContainer);


const print = (num = 0, callback = () => {}) => {
  setTimeout(() => {
    outputContainer.textContent = num === 0 ? "Happy Independence Day" : num;
    callback();
  }, 1000);
};
const callbackSequence = [
  () =>
    print(9, () =>
      print(8, () =>
        print(7, () =>
          print(6, () =>
            print(5, () =>
              print(4, () =>
                print(3, () => print(2, () => print(1, () => print(0))))
              )
            )
          )
        )
      )
    ),
];
print(10, callbackSequence[0]);
