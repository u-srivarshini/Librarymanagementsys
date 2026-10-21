
let books = [];

const form = document.getElementById("bookForm");
const list = document.getElementById("bookList");
const search = document.getElementById("search");

function displayBooks() {
    list.innerHTML = "";
    books.filter(b =>
        (b.title + b.author).toLowerCase().includes(search.value.toLowerCase())
    ).forEach((b, i) => {
        const li = document.createElement("li");
        li.textContent = b.title + " - " + b.author + " ";

        const btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = () => {
            books.splice(i, 1);
            displayBooks();
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

form.onsubmit = e => {
    e.preventDefault();

    books.push({
        title: document.getElementById("title").value.trim(),
        author: document.getElementById("author").value.trim()
    });

    form.reset();
    displayBooks();
};

search.oninput = displayBooks;
