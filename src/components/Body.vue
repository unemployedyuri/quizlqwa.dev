<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
    <div class = "grid content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">

        <div class = "card">
            <h3 id = "the" class = "card-title">The</h3>
            <h3 class = "card-title">Welcome to my website</h3>
            <img src = "https://cdn.discordapp.com/attachments/756183563367612509/1569142684130480178/silly-dog.gif?ex=6af26181&is=6af11001&hm=1fd89d97ed00d69a8cfe95970f5f52745de76b85f6415171523a91f1d96818f0&">

            <audio controls>
                <source :src="`${baseUrl}awesome.mp3`">
            </audio>

            <p><font-awesome-icon icon = "fa-venus"/> Emily ~ she/her</p>
            <p><font-awesome-icon icon = "fa-paintbrush"/> Video editor & beginner dev</p>
            <p><font-awesome-icon icon = "fa-code"/> TypeScript, Java, Python</p>
        </div>

        <div class = "card">
            <h3 class = "card-title">Things I enjoy:</h3>
            <hr>

            <p>- Video editing</p>
            <p>- Yuri !!!!!</p>
            <p>- and girls</p>
            <p>- Bocchi the Rock!</p>
            <p>- Lycoris Recoil</p>
            <p>- Girls Band Cry</p>
            <p>- Minecraft</p>
            <p>- Geometry Dash</p>
            <p>- Fortnite</p>
            <p>- Hoyoslop</p>
        </div>

        <div class = "card">
            <h3 class = "card-title">Stuff I worked on</h3>
            <hr>

            <div class = "list">
                <img class = "pride-flag" :src="`${baseUrl}16gdps.png`" alt="1.6 logo" />
                <a class = "card-text card-link" href = "https://gdps.wayveyx.com/">1.6 GDPS (site frontend)</a>
            </div>

            <div class = "list">
                <img class = "pride-flag" :src="`${baseUrl}19gdps.png`" alt="1.9 logo" />
                <a class = "card-text card-link" href = "https://19gdps.com/">1.9 GDPS (in-game features)</a>
            </div>

            <div class = "list">
                <img class = "pride-flag" :src="`${baseUrl}favicon.ico`" alt="1.9 logo" />
                <a class = "card-text card-link" href = "https://quizlqwa.dev/">quizlqwa.dev (this site)</a>
            </div>
        </div>

        <div class = "card">
            <h3 class = "card-title">My socials</h3>
            <hr>

            <div class = "list">
                <font-awesome-icon id = "github" icon = "fa-brands fa-github"/>
                <a class = "card-text card-link" href = "https://github.com/unemployedyuri">@unemployedyuri</a>
            </div>

            <div class = "list">
                <font-awesome-icon id = "twitter" icon = "fa-brands fa-twitter"/>
                <a class = "card-text card-link" href = "https://x.com/unemployedyuri">@unemployedyuri</a>
            </div>

            <div class = "list">
                <font-awesome-icon id = "discord" icon = "fa-brands fa-discord"/>
                <a class = "card-text card-link" href = "https://discord.gg/PrwXhTqwws">my server :3</a>
            </div>

            <div class = "list">
                <font-awesome-icon id = "youtube" icon = "fa-brands fa-youtube"/>
                <a class = "card-text card-link" href = "https://www.youtube.com/@sumire1107">Sumire1107</a>
            </div>

        </div>

    </div>
</template>