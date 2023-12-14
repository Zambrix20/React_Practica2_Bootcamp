import React from "react";
import StreamerTwitch from "./StreamerTwitch";

export default function AsideStreamers() {
    return (
        <aside>
            <div className="aside-streamers">
                <div className="header-streamers">
                    <h2>Canales recomendados</h2>
                </div>
                <div className="aside-streamers__content">
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/bbe9b7f7-8c58-4734-adab-52c2c791b9a6-profile_image-70x70.png"
                        name="VEGETTA777"
                        categorie="Fortnite"
                        viewers="10530"
                        online
                    />
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/78528288-6216-4e21-872b-7f415b602a9a-profile_image-70x70.png"
                        name="alexelcapo"
                        categorie="Cyberpunk 2077"
                        viewers="2702"
                        online
                    />
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/3ecade58-a91d-4399-9b2e-d6da8957d5f9-profile_image-70x70.png"
                        name="MYM?ALKAPONE"
                        categorie="Rust"
                        viewers="7887"
                        online
                    />
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/198c0fe9-cf41-4ef1-ad55-405c1e599f25-profile_image-70x70.png"
                        name="elxokas"
                        categorie="Charlando"
                        viewers="15299"
                        online
                    />
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/593b5641-c626-4ba4-ba49-11cb33f6c3e8-profile_image-70x70.png"
                        name="IlloJuan"
                        categorie="DayZ"
                        viewers="42267"
                        online
                    />
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/bf1d52e3-b46b-4c07-9b4f-a1ab8c4e40f8-profile_image-70x70.png"
                        name="auronplay"
                        categorie="Charlando"
                        viewers="14182"
                        online
                    />
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/folagorlives-profile_image-2456af9afdbefda3-70x70.jpeg"
                        name="FolagorLives"
                        categorie="Pokémon Scarlet/Violet"
                        viewers="3072"
                        online
                    />
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/5b73f4b998324548-profile_image-70x70.jpeg"
                        name="knekro"
                        categorie="Charlando"
                        viewers="3759"
                        online
                    />
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/edc0529a-0250-4ad4-a77f-e3072ff29c81-profile_image-70x70.png"
                        name="TheGrefg"
                        categorie="Charlando"
                        viewers="7082"
                        online
                    />
                    <StreamerTwitch
                        icon="https://static-cdn.jtvnw.net/jtv_user_pictures/413e9efe-c431-4996-ba06-448da296c733-profile_image-70x70.png"
                        name="Toniki"
                        categorie="Overwaych 2"
                        viewers=""
                        online={false}
                    />
                </div>
            </div>
        </aside>
    );
}
