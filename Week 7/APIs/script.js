const url = "https://reqres.in/api/users?page=2";

fetch(url, {
    method: "GET"
})
.then(response => response.json())
.then(data => {console.log(data)})
.catch((error) => console.log(error.message))