const randomuserurl = "https://randomuser.me/api/";
const fetchUser = () => {
  showSpinner();
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      const resu = data.results[0];
      if (resu.gender === "male") {
        document.body.style.backgroundColor = "lightblue";
      } else {
        document.body.style.backgroundColor = "pink";
      }
      document.querySelector(
        "#user"
      ).innerHTML = `<div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${resu.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${resu.name.first} ${resu.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${resu.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${resu.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${resu.location.street.name}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${resu.registered.age}</p>
            </div>
          </div>
        </div>`;
      hideSpinner();
    });
};
function showSpinner() {
  document.querySelector(".spinner").classList.remove("hidden");
}
function hideSpinner() {
  document.querySelector(".spinner").classList.add("hidden");
}
fetchUser();
document.querySelector("button").addEventListener("click", fetchUser);
