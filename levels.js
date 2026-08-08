/* =========================================================
   CHRONO ADVENTURE — LEVELS.JS
   Stable Level / Platform System
   ========================================================= */

const LEVEL_WIDTH = 10000;
const GROUND_Y = 450;
const GROUND_H = 70;

/* =========================================================
   LEVEL DATA
   ========================================================= */

const LEVELS = [

    /* =====================================================
       LEVEL 1 — CHRONO TOWN
       ===================================================== */

    {
        id: 1,
        name: "CHRONO TOWN",
        subtitle: "The Beginning",

        skyTop: "#69d8ff",
        skyBottom: "#e8fbff",

        groundColor: "#4f8d38",
        grassColor: "#79bd4e",

        start: {
            x: 120,
            y: GROUND_Y - 70
        },

        finish: {
            x: 9400,
            y: GROUND_Y - 90
        },

        platforms: [

            // MAIN CONTINUOUS GROUND
            {
                x: 0,
                y: GROUND_Y,
                w: LEVEL_WIDTH,
                h: GROUND_H,
                type: "ground"
            },

            // UPPER PLATFORMS
            {
                x: 650,
                y: 360,
                w: 300,
                h: 30,
                type: "platform"
            },

            {
                x: 1200,
                y: 320,
                w: 340,
                h: 30,
                type: "platform"
            },

            {
                x: 1750,
                y: 370,
                w: 300,
                h: 30,
                type: "platform"
            },

            {
                x: 2250,
                y: 300,
                w: 380,
                h: 30,
                type: "platform"
            },

            {
                x: 2900,
                y: 350,
                w: 320,
                h: 30,
                type: "platform"
            },

            {
                x: 3450,
                y: 280,
                w: 420,
                h: 30,
                type: "platform"
            },

            {
                x: 4150,
                y: 340,
                w: 350,
                h: 30,
                type: "platform"
            },

            {
                x: 4800,
                y: 290,
                w: 420,
                h: 30,
                type: "platform"
            },

            {
                x: 5500,
                y: 350,
                w: 320,
                h: 30,
                type: "platform"
            },

            {
                x: 6100,
                y: 300,
                w: 400,
                h: 30,
                type: "platform"
            },

            {
                x: 6800,
                y: 350,
                w: 350,
                h: 30,
                type: "platform"
            },

            {
                x: 7450,
                y: 290,
                w: 450,
                h: 30,
                type: "platform"
            },

            {
                x: 8250,
                y: 350,
                w: 350,
                h: 30,
                type: "platform"
            },

            {
                x: 8900,
                y: 300,
                w: 400,
                h: 30,
                type: "platform"
            }

        ],

        coins: [
            { x: 750, y: 320 },
            { x: 820, y: 320 },

            { x: 1300, y: 280 },
            { x: 1370, y: 280 },
            { x: 1440, y: 280 },

            { x: 1850, y: 330 },

            { x: 2350, y: 260 },
            { x: 2420, y: 260 },

            { x: 3000, y: 310 },

            { x: 3550, y: 240 },
            { x: 3630, y: 240 },

            { x: 4250, y: 300 },

            { x: 4900, y: 250 },
            { x: 4980, y: 250 },

            { x: 5600, y: 310 },

            { x: 6200, y: 260 },

            { x: 6900, y: 310 },

            { x: 7550, y: 250 },
            { x: 7630, y: 250 },

            { x: 8350, y: 310 },

            { x: 9000, y: 260 }
        ],

        enemies: [
            {
                x: 1100,
                y: GROUND_Y - 55,
                type: "walker"
            },

            {
                x: 2050,
                y: GROUND_Y - 55,
                type: "walker"
            },

            {
                x: 3200,
                y: GROUND_Y - 55,
                type: "runner"
            },

            {
                x: 4500,
                y: GROUND_Y - 55,
                type: "walker"
            },

            {
                x: 5800,
                y: GROUND_Y - 55,
                type: "runner"
            },

            {
                x: 7200,
                y: GROUND_Y - 55,
                type: "walker"
            },

            {
                x: 8600,
                y: GROUND_Y - 55,
                type: "runner"
            }
        ],

        boss: {
            x: 9200,
            y: GROUND_Y - 120,
            type: "chrono_guardian",
            name: "CHRONO GUARDIAN"
        }
    },


    /* =====================================================
       LEVEL 2 — FROZEN WORLD
       ===================================================== */

    {
        id: 2,
        name: "FROZEN WORLD",
        subtitle: "The Ice Dimension",

        skyTop: "#8ddcff",
        skyBottom: "#e9faff",

        groundColor: "#8bc9dd",
        grassColor: "#dffaff",

        start: {
            x: 120,
            y: GROUND_Y - 70
        },

        finish: {
            x: 9400,
            y: GROUND_Y - 90
        },

        platforms: [

            {
                x: 0,
                y: GROUND_Y,
                w: LEVEL_WIDTH,
                h: GROUND_H,
                type: "ice-ground"
            },

            {
                x: 700,
                y: 350,
                w: 320,
                h: 30,
                type: "ice"
            },

            {
                x: 1300,
                y: 300,
                w: 350,
                h: 30,
                type: "ice"
            },

            {
                x: 1900,
                y: 360,
                w: 300,
                h: 30,
                type: "ice"
            },

            {
                x: 2500,
                y: 280,
                w: 400,
                h: 30,
                type: "ice"
            },

            {
                x: 3200,
                y: 340,
                w: 350,
                h: 30,
                type: "ice"
            },

            {
                x: 3900,
                y: 290,
                w: 420,
                h: 30,
                type: "ice"
            },

            {
                x: 4600,
                y: 350,
                w: 350,
                h: 30,
                type: "ice"
            },

            {
                x: 5300,
                y: 300,
                w: 400,
                h: 30,
                type: "ice"
            },

            {
                x: 6000,
                y: 350,
                w: 350,
                h: 30,
                type: "ice"
            },

            {
                x: 6750,
                y: 290,
                w: 400,
                h: 30,
                type: "ice"
            },

            {
                x: 7500,
                y: 350,
                w: 350,
                h: 30,
                type: "ice"
            },

            {
                x: 8250,
                y: 300,
                w: 400,
                h: 30,
                type: "ice"
            },

            {
                x: 8950,
                y: 350,
                w: 400,
                h: 30,
                type: "ice"
            }

        ],

        coins: [
            { x: 800, y: 310 },
            { x: 880, y: 310 },

            { x: 1400, y: 260 },
            { x: 1480, y: 260 },

            { x: 2000, y: 320 },

            { x: 2600, y: 240 },
            { x: 2680, y: 240 },

            { x: 3300, y: 300 },

            { x: 4000, y: 250 },
            { x: 4080, y: 250 },

            { x: 4700, y: 310 },

            { x: 5400, y: 260 },

            { x: 6100, y: 310 },

            { x: 6850, y: 250 },

            { x: 7600, y: 310 },

            { x: 8350, y: 260 },

            { x: 9050, y: 310 }
        ],

        enemies: [
            {
                x: 1050,
                y: GROUND_Y - 55,
                type: "ice-monster"
            },

            {
                x: 2200,
                y: GROUND_Y - 55,
                type: "ice-monster"
            },

            {
                x: 3600,
                y: GROUND_Y - 55,
                type: "ice-runner"
            },

            {
                x: 5000,
                y: GROUND_Y - 55,
                type: "ice-monster"
            },

            {
                x: 6400,
                y: GROUND_Y - 55,
                type: "ice-runner"
            },

            {
                x: 7900,
                y: GROUND_Y - 55,
                type: "ice-monster"
            },

            {
                x: 8750,
                y: GROUND_Y - 55,
                type: "ice-runner"
            }
        ],

        boss: {
            x: 9300,
            y: GROUND_Y - 120,
            type: "frost_titan",
            name: "FROST TITAN"
        }
    },


    /* =====================================================
       LEVEL 3 — SKY WORLD
       ===================================================== */

    {
        id: 3,
        name: "SKY WORLD",
        subtitle: "The Floating Dimension",

        skyTop: "#6c83ff",
        skyBottom: "#dce5ff",

        groundColor: "#6876b8",
        grassColor: "#a9b7ff",

        start: {
            x: 120,
            y: GROUND_Y - 70
        },

        finish: {
            x: 9400,
            y: GROUND_Y - 90
        },

        platforms: [

            // SAFE BASE
            {
                x: 0,
                y: GROUND_Y,
                w: LEVEL_WIDTH,
                h: GROUND_H,
                type: "sky-ground"
            },

            {
                x: 600,
                y: 350,
                w: 280,
                h: 28,
                type: "cloud"
            },

            {
                x: 1100,
                y: 290,
                w: 320,
                h: 28,
                type: "cloud"
            },

            {
                x: 1650,
                y: 350,
                w: 300,
                h: 28,
                type: "cloud"
            },

            {
                x: 2200,
                y: 270,
                w: 380,
                h: 28,
                type: "cloud"
            },

            {
                x: 2900,
                y: 340,
                w: 330,
                h: 28,
                type: "cloud"
            },

            {
                x: 3500,
                y: 260,
                w: 400,
                h: 28,
                type: "cloud"
            },

            {
                x: 4200,
                y: 330,
                w: 350,
                h: 28,
                type: "cloud"
            },

            {
                x: 4900,
                y: 270,
                w: 420,
                h: 28,
                type: "cloud"
            },

            {
                x: 5600,
                y: 340,
                w: 350,
                h: 28,
                type: "cloud"
            },

            {
                x: 6300,
                y: 280,
                w: 400,
                h: 28,
                type: "cloud"
            },

            {
                x: 7000,
                y: 340,
                w: 350,
                h: 28,
                type: "cloud"
            },

            {
                x: 7700,
                y: 270,
                w: 420,
                h: 28,
                type: "cloud"
            },

            {
                x: 8500,
                y: 330,
                w: 350,
                h: 28,
                type: "cloud"
            },

            {
                x: 9100,
                y: 280,
                w: 400,
                h: 28,
                type: "cloud"
            }

        ],

        coins: [
            { x: 700, y: 310 },
            { x: 1180, y: 250 },
            { x: 1740, y: 310 },
            { x: 2300, y: 230 },
            { x: 3000, y: 300 },
            { x: 3600, y: 220 },
            { x: 4300, y: 290 },
            { x: 5000, y: 230 },
            { x: 5700, y: 300 },
            { x: 6400, y: 240 },
            { x: 7100, y: 300 },
            { x: 7800, y: 230 },
            { x: 8600, y: 290 },
            { x: 9200, y: 240 }
        ],

        enemies: [
            {
                x: 1000,
                y: GROUND_Y - 55,
                type: "sky-drone"
            },

            {
                x: 2100,
                y: GROUND_Y - 55,
                type: "sky-drone"
            },

            {
                x: 3300,
                y: GROUND_Y - 55,
                type: "sky-drone"
            },

            {
                x: 4600,
                y: GROUND_Y - 55,
                type: "sky-drone"
            },

            {
                x: 5900,
                y: GROUND_Y - 55,
                type: "sky-drone"
            },

            {
                x: 7200,
                y: GROUND_Y - 55,
                type: "sky-drone"
            },

            {
                x: 8500,
                y: GROUND_Y - 55,
                type: "sky-drone"
            }
        ],

        boss: {
            x: 9300,
            y: GROUND_Y - 120,
            type: "sky_colossus",
            name: "SKY COLOSSUS"
        }
    }

];


/* =========================================================
   CURRENT LEVEL
   ========================================================= */

let currentLevelIndex = 0;

let currentLevel =
    LEVELS[currentLevelIndex];


/* =========================================================
   LOAD LEVEL
   ========================================================= */

function loadLevel(index = 0) {

    if (index < 0) {
        index = 0;
    }

    if (index >= LEVELS.length) {
        index = LEVELS.length - 1;
    }

    currentLevelIndex = index;

    currentLevel =
        LEVELS[currentLevelIndex];

    // IMPORTANT:
    // Never modify the original platform array.
    // Create a fresh copy for gameplay.

    if (Array.isArray(currentLevel.platforms)) {

        window.platforms =
            currentLevel.platforms.map(platform => ({
                ...platform
            }));

    } else {

        window.platforms = [];

    }

    // Coins
    window.levelCoins =
        (currentLevel.coins || []).map(coin => ({
            ...coin,
            collected: false
        }));

    // Enemies
    window.levelEnemies =
        (currentLevel.enemies || []).map(enemy => ({
            ...enemy,
            alive: true,
            hp: enemy.hp || 3
        }));

    // Camera
    if (typeof cameraX !== "undefined") {
        cameraX = 0;
    }

    // Player spawn
    if (typeof player !== "undefined" &&
        currentLevel.start) {

        player.x =
            currentLevel.start.x;

        player.y =
            currentLevel.start.y;

        player.vx = 0;
        player.vy = 0;

        player.onGround = true;

        player.checkpointX =
            currentLevel.start.x;

        player.checkpointY =
            currentLevel.start.y;
    }

    console.log(
        "Loaded level:",
        currentLevel.name
    );
}


/* =========================================================
   PLATFORM DRAWING
   ========================================================= */

function drawLevelPlatforms(ctx) {

    if (!window.platforms) {
        return;
    }

    for (const platform of window.platforms) {

        /*
         * IMPORTANT:
         * Camera only changes drawing position.
         * Platform itself is NEVER deleted.
         */

        const screenX =
            platform.x - cameraX;

        /*
         * Skip drawing only when far outside
         * the visible screen.
         */

        if (
            screenX + platform.w < -300 ||
            screenX > canvas.width + 300
        ) {
            continue;
        }


        /* =============================================
           MAIN GROUND
           ============================================= */

        if (
            platform.type === "ground" ||
            platform.type === "ice-ground" ||
            platform.type === "sky-ground"
        ) {

            if (
                currentLevelIndex === 1 ||
                platform.type === "ice-ground"
            ) {

                ctx.fillStyle =
                    "#8bd1e6";

            }

            else if (
                currentLevelIndex === 2 ||
                platform.type === "sky-ground"
            ) {

                ctx.fillStyle =
                    "#6677b8";

            }

            else {

                ctx.fillStyle =
                    currentLevel.groundColor ||
                    "#4f8d38";
            }


            ctx.fillRect(
                screenX,
                platform.y,
                platform.w,
                platform.h
            );


            // Grass / top surface

            ctx.fillStyle =
                currentLevel.grassColor ||
                "#79bd4e";

            ctx.fillRect(
                screenX,
                platform.y,
                platform.w,
                10
            );


            continue;
        }


        /* =============================================
           ICE PLATFORM
           ============================================= */

        if (platform.type === "ice") {

            ctx.fillStyle =
                "#b9f3ff";

            ctx.fillRect(
                screenX,
                platform.y,
                platform.w,
                platform.h
            );

            ctx.fillStyle =
                "#eaffff";

            ctx.fillRect(
                screenX,
                platform.y,
                platform.w,
                7
            );

            continue;
        }


        /* =============================================
           CLOUD PLATFORM
           ============================================= */

        if (platform.type === "cloud") {

            ctx.fillStyle =
                "#ffffff";

            ctx.beginPath();

            ctx.roundRect(
                screenX,
                platform.y,
                platform.w,
                platform.h,
                15
            );

            ctx.fill();

            continue;
        }


        /* =============================================
           NORMAL PLATFORM
           ============================================= */

        ctx.fillStyle =
            "#82512f";

        ctx.fillRect(
            screenX,
            platform.y,
            platform.w,
            platform.h
        );

        ctx.fillStyle =
            "#76b94c";

        ctx.fillRect(
            screenX,
            platform.y,
            platform.w,
            7
        );
    }
}


/* =========================================================
   PLATFORM COLLISION
   ========================================================= */

function checkLevelPlatformCollision(player) {

    if (!window.platforms) {
        return false;
    }

    let landed = false;

    for (const platform of window.platforms) {

        /*
         * IMPORTANT:
         * Collision uses WORLD coordinates.
         * Do NOT subtract cameraX here.
         */

        const horizontal =
            player.x + player.w >
            platform.x &&
            player.x <
            platform.x + platform.w;

        if (!horizontal) {
            continue;
        }


        const playerBottom =
            player.y + player.h;

        const previousBottom =
            playerBottom - player.vy;


        /*
         * Only land while falling.
         */

        if (
            player.vy >= 0 &&
            previousBottom <= platform.y &&
            playerBottom >= platform.y
        ) {

            player.y =
                platform.y - player.h;

            player.vy = 0;

            player.onGround = true;

            landed = true;

            break;
        }
    }

    return landed;
}


/* =========================================================
   FALL / CHECKPOINT SAFETY
   ========================================================= */

function protectPlayerFromFalling(player) {

    /*
     * Main ground already extends across
     * the complete level, so normal falling
     * should almost never happen.
     */

    if (player.y > 850) {

        player.x =
            player.checkpointX ||
            currentLevel.start.x;

        player.y =
            player.checkpointY ||
            currentLevel.start.y;

        player.vx = 0;
        player.vy = 0;

        player.onGround = true;

        if (typeof toast === "function") {
            toast("💾 CHECKPOINT!");
        }
    }
}


/* =========================================================
   LEVEL FINISH
   ========================================================= */

function isLevelFinished(player) {

    if (!currentLevel.finish) {
        return false;
    }

    return (
        player.x >=
        currentLevel.finish.x
    );
}


/* =========================================================
   NEXT LEVEL
   ========================================================= */

function nextLevel() {

    if (
        currentLevelIndex <
        LEVELS.length - 1
    ) {

        loadLevel(
            currentLevelIndex + 1
        );

        return true;
    }

    return false;
}


/* =========================================================
   PREVIOUS LEVEL
   ========================================================= */

function previousLevel() {

    if (currentLevelIndex > 0) {

        loadLevel(
            currentLevelIndex - 1
        );

        return true;
    }

    return false;
}


/* =========================================================
   AUTO LOAD FIRST LEVEL
   ========================================================= */

if (
    typeof window !== "undefined"
) {

    window.platforms = [];

    window.levelCoins = [];

    window.levelEnemies = [];

    /*
     * Don't force-load if another script
     * already handles game initialization.
     */

    window.addEventListener(
        "load",
        () => {

            if (
                typeof currentLevel !==
                "undefined"
            ) {

                loadLevel(
                    currentLevelIndex
                );
            }

        }
    );
}
