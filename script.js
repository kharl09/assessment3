document.addEventListener("DOMContentLoaded", () => {
    // Create and insert header
    document.body.innerHTML = `
        <header style="background: black; color: white; padding: 15px;">
            <h2 style="display: inline-block; margin: 0;">My Favorite Artist of All Time</h2>
            <nav style="float: right;">
                <ul style="list-style: none; display: flex; gap: 15px;">
                    <li><a href="#" style="color: white; text-decoration: none;">Home</a></li>
                    <li><a href="#" style="color: white; text-decoration: none;">About</a></li>
                    <li><a href="#" style="color: white; text-decoration: none;">Login</a></li>
                </ul>
            </nav>
        </header>
        <div id="content" style="padding: 20px;"></div>
        <footer style="background: black; color: white; text-align: center; padding: 15px; margin-top: 20px;">
            <h2>All Rights Reserved &copy; 2025</h2>
        </footer>
    `;

    const artists = [
        { name: "Camila Cabello", img: "/images/cabello.jpg", bio: "Camila Cabello is an American singer and songwriter..." },
        { name: "The Weeknd", img: "/images/theweeknd2.jpg", bio: "Abel Makkonen Tesfaye known professionally as The Weeknd..." },
        { name: "Bruno Mars", img: "/images/brunomars.jpg", bio: "Peter Gene Hernandez, known professionally as Bruno Mars..." },
        { name: "The Black Eyed Peas", img: "/images/theblackeyedpeas.jpg", bio: "The Black Eyed Peas are an American musical group..." },
        { name: "Charlie Puth", img: "/images/charlieputh.jpg", bio: "Charles Otto Puth Jr. is an American singer, songwriter..." }
    ];

    const contentDiv = document.getElementById("content");

    artists.forEach(artist => {
        const article = document.createElement("article");
        article.style.cssText = "background: white; padding: 15px; border-radius: 10px; box-shadow: 0px 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px; max-width: 600px; margin: auto;";
        
        article.innerHTML = `
            <h2>${artist.name}</h2>
            <section style="display: flex; align-items: center; gap: 15px;">
                <img src="${artist.img}" alt="${artist.name}" style="width: 100px; height: 100px; border-radius: 10px;">
                <p>${artist.bio}</p>
            </section>
            <button class="like-button">Like ❤️</button>
            <span class="like-counter"> Likes: 0</span>
            <button class="info-button">More Info</button>
        `;

        contentDiv.appendChild(article);
    });

    // Add like functionality
    document.querySelectorAll(".like-button").forEach((button, index) => {
        let likes = 0;
        button.addEventListener("click", () => {
            likes++;
            document.querySelectorAll(".like-counter")[index].textContent = ` Likes: ${likes}`;
        });
    });

    // Fetch artist details asynchronously
    async function fetchArtistDetails(artistName) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`${artistName} has won multiple awards and has a massive global fanbase.`);
            }, 2000);
        });
    }

    // Add more info functionality
    document.querySelectorAll(".info-button").forEach((button, index) => {
        button.addEventListener("click", async () => {
            const paragraph = document.querySelectorAll("article p")[index];
            paragraph.textContent += " (Loading more info... ⏳)";
            const details = await fetchArtistDetails(artists[index].name);
            paragraph.textContent += `\n✨ ${details}`;
        });
    });
});
