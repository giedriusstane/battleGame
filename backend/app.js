import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
import http from "http";
import { Server } from "socket.io";


let allUsersData = [];

let weapon = {
    level: "C",
    weaponImg: "https://m.media-amazon.com/images/I/61Y-85Ei4-L._AC_UF894,1000_QL80_.jpg",
    maxDmg: 1,
    maxEffect: 0,
    gold: 1,
    effectsSlot: [],
    slotId: "idWeapon123456789"
};

let armour = {
    level: "C",
    armourImg: "https://www.3wisemen.co.nz/media/catalog/product/t/2/t20_1022117_1.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
    maxArmour: 1,
    maxEffect: 0,
    effectsSlot: [],
    slotId: "idArmour123456789"
};

let selectedImages = [];
let weaponsImages = [
    "https://kombat-instruments-limited-2.myshopify.com/cdn/shop/products/Kris_Sword__04895_large.webp?v=1678826069",
    "https://files.knifecenter.com/knifecenter/cold-steel-knives/images/CSSWKRISSW_1.jpg",
    "https://m.media-amazon.com/images/I/51K8Dvp-AjL._AC_UF1000,1000_QL80_.jpg",
    "https://qph.cf2.quoracdn.net/main-qimg-118ca8d62f1c8870abdab6db5709b329-lq",
    "https://m.media-amazon.com/images/I/81zE3QSN8DL._AC_UY1000_.jpg",
    "https://wargearshop.com/wp-content/uploads/2021/04/1-jpg-2.jpg",
    "https://gaming.myotakuworld.com/wp-content/uploads/2023/03/17-orchish-battle-axe-skyrim.jpg?ezimgfmt=rs:0x0/rscb10/ng:webp/ngcb9",
    "https://i.mmo.cm/is/image/mmoimg/an-product-max/war-hammer-foam-weapon--mw-121000-1.jpg",
    "https://cdn.media.amplience.net/i/partycity/946109?$large$&fmt=auto&qlt=default",
    "https://static.fandomspot.com/images/11/22087/08-ff12-zodiac-age-kogarasumaru-katana-render.jpg"

];
let armoursImages = [
    "https://m.media-amazon.com/images/I/61mmln9OC6L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/61oWPqGuFUL._AC_UY1000_.jpg",
    "https://m.media-amazon.com/images/I/51hLp8U4AqL._SR240,220_.jpg",
    "https://i.etsystatic.com/37813664/r/il/8c0eb2/4919371706/il_fullxfull.4919371706_p272.jpg",
    "https://www.historicroyalpalaces.com/media/catalog/product/cache/83bfc43444205f2201d44027a3b9ba9e/h/e/helmetarmour-steel-medieval-knightshop-30164015-1-side.jpg",
    "https://www.historicroyalpalaces.com/media/catalog/product/cache/83bfc43444205f2201d44027a3b9ba9e/a/r/armourgreathelmet-steelbrass-medieval-knightshop-30164023-1-hero.jpg",
    "https://www.outfit4events.com/runtime/cache/images/redesignProductFull/mib_0903.jpg",
    "https://m.media-amazon.com/images/I/61npXS01nRL.jpg",
    "https://media.istockphoto.com/id/580108266/photo/grey-metal-finger-gauntlet.jpg?s=612x612&w=0&k=20&c=Fgp_utGEWSKol14-X2cPRxxIZN-Z5VtwG4DGjzojrH0=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWH_yjR6VICZyP1oKJMXQrrkN99SZ05GSyJOeN4Y3EZ8NRPNZ3kVVPkFxQRC2W6FY0cUQ&usqp=CAU"
];



const generateWeapon = () => {

    let weaponObj = {};
    let levels = ["A", "B", "C"];
    let level = Math.floor(Math.random() * 3);



    if (level === 0) {

        let maxDamage = Math.floor(Math.random() * 31) + 6;
        let maxEffectsSlots = Math.floor(Math.random() * 4);
        let maxGoldGenerated = Math.floor(Math.random() * 11);


        let slot = [];

        for (slot.length; slot.length < maxEffectsSlots;) {
            const random = Math.random();

            if (random < 0.5 && slot.length < maxEffectsSlots) {
                slot.push("criticalEffect");

            } else if (random < 0.5 && slot.length < maxEffectsSlots) {
                slot.push("lifeStealEffect");

            }

            if (slot.length < maxEffectsSlots) {
                const secondRandom = Math.random();

                if (secondRandom < 0.4) {
                    slot.push("dodgeEffect");

                }
            }


        }




        return weaponObj = {
            level: levels[level],
            maxDmg: maxDamage,
            maxEffect: maxEffectsSlots,
            gold: maxGoldGenerated,
            weaponImg: weaponsImages[Math.floor(Math.random() * 10)],
            effectsSlot: slot,


        }
    }


    if (level === 1) {

        let maxDamage = Math.floor(Math.random() * 21) + 3;
        let maxEffectsSlots = Math.floor(Math.random() * 2);
        let maxGoldGenerated = Math.floor(Math.random() * 7);


        let slot = [];

        for (slot.length; slot.length < maxEffectsSlots;) {
            const random = Math.random();

            if (random < 0.5 && slot.length < maxEffectsSlots) {
                slot.push("criticalEffect");

            } else if (random < 0.5 && slot.length < maxEffectsSlots) {
                slot.push("lifeStealEffect");

            }

            if (slot.length < maxEffectsSlots) {
                const secondRandom = Math.random();

                if (secondRandom < 0.4) {
                    slot.push("dodgeEffect");

                }
            }


        }


        return weaponObj = {
            level: levels[level],
            maxDmg: maxDamage,
            maxEffect: maxEffectsSlots,
            gold: maxGoldGenerated,
            weaponImg: weaponsImages[Math.floor(Math.random() * 10)],
            effectsSlot: slot,




        }
    }


    if (level === 2) {

        let maxDamage = Math.floor(Math.random() * 6) + 1;
        let maxGoldGenerated = Math.floor(Math.random() * 4);


        return weaponObj = {
            level: levels[level],
            maxDmg: maxDamage,
            maxEffect: 0,
            gold: maxGoldGenerated,
            weaponImg: weaponsImages[Math.floor(Math.random() * 10)],
            effectsSlot: [],


        }
    }


};

const generateArmour = () => {

    let armourObj = {};
    let levels = ["A", "B", "C"];
    let level = Math.floor(Math.random() * 3);

    if (level === 0) {

        let maxArmour = Math.floor(Math.random() * 91) + 10;
        let maxEffectsSlots = Math.floor(Math.random() * 4);



        let slot = [];

        for (slot.length; slot.length < maxEffectsSlots;) {
            slot.push("dodgeEffect");
        }


        return armourObj = {
            level: levels[level],
            maxArm: maxArmour,
            maxEffect: maxEffectsSlots,
            armourImg: armoursImages[Math.floor(Math.random() * 10)],
            effectsSlot: slot


        }
    }


    if (level === 1) {

        let maxArmour = Math.floor(Math.random() * 51);
        let maxEffectsSlots = Math.floor(Math.random() * 2);



        let slot = [];

        for (slot.length; slot.length < maxEffectsSlots;) {
            slot.push("dodgeEffect");
        }


        return armourObj = {
            level: levels[level],
            maxArm: maxArmour,
            maxEffect: maxEffectsSlots,
            armourImg: armoursImages[Math.floor(Math.random() * 10)],
            effectsSlot: slot


        }
    }



    if (level === 2) {

        let maxArmour = Math.floor(Math.random() * 21);


        return armourObj = {
            level: levels[level],
            maxArm: maxArmour,
            maxEffect: 0,
            armourImg: armoursImages[Math.floor(Math.random() * 10)],
            effectsSlot: []


        }
    }


};


const generatePotion = () => {

    let potion = 0;
    return potion = Math.floor(Math.random() * 101) + 1;
}






const server = http.createServer(app);


const io = new Server(server, {

    cors: {
        origin: "http://localhost:5173",

    }
});



io.on("connection", (socket) => {

    io.to(socket.id).emit("selected_images", selectedImages);



    socket.on("generate_btn_data", () => {
        const userData = allUsersData.find((userData) => userData.userId === socket.id);

        if (userData && userData.userMoney >= 100) {
            userData.userMoney -= 100;

            let weapon = generateWeapon();
            let armour = generateArmour();
            let potion = generatePotion();

            userData.generatedWeapon = generateWeapon();
            userData.generatedArmour = generateArmour();
            userData.generatedPotion = generatePotion();

            userData.weaponTaken = false;
            userData.armourTaken = false;

            io.to(socket.id).emit("need_to_generate", { msg: "" });
            io.to(socket.id).emit("need_to_generate_armour", { msg: "" });


            io.to(socket.id).emit("btn_data_generated", { weapon, armour, potion, money: userData.userMoney });
        }

    });


    socket.on("on_take_btn_data", (data) => {
        const userData = allUsersData.find((userData) => userData.userId === socket.id);


        if (userData && userData.numberOfSlots <= 9 && userData.weaponTaken === false) {


            let slotId = `idWeapon${Math.random()}${Math.floor(Math.random() * 1000)}`;
            data.weapon.slotId = slotId;
            userData.itemsInSlot.push(data.weapon);
            userData.weaponTaken = true;



            let inventoryData = userData.itemsInSlot.filter((item) => !item.slotId.startsWith("idArmour"));
            userData.numberOfSlots += 1;



            io.to(socket.id).emit("inventory_items_data", inventoryData);


            userData.weaponTaken = true;

            if (userData.weaponTaken === true) {

                io.to(socket.id).emit("need_to_generate", { msg: "click to generate!" });
            }




        }
    });



    socket.on("on_take_armour_btn_data", (data) => {
        const userData = allUsersData.find((userData) => userData.userId === socket.id);


        if (userData && userData.numberOfSlots <= 9 && userData.armourTaken === false) {


            let slotId = `idArmour${Math.random()}${Math.floor(Math.random() * 1000)}`;
            data.armour.slotId = slotId;
            userData.itemsInSlot.push(data.armour);
            userData.armourTaken = true;



            let inventoryData = userData.itemsInSlot.filter((item) => !item.slotId.startsWith("idWeapon"));
            userData.numberOfSlots += 1;


            io.to(socket.id).emit("inventory_armour_items_data", inventoryData);

            userData.armourTaken = true;

            if (userData.armourTaken === true) {

                io.to(socket.id).emit("need_to_generate_armour", { msg: "click to generate!" });
            }




        }
    });




    socket.on("unequip_btn_data", () => {
        const userData = allUsersData.find((userData) => userData.userId === socket.id);

        if (userData) {


            userData.equipedWeapon = weapon;

            let equipedWeapon = userData.equipedWeapon;
            io.to(socket.id).emit("equipedWeapon_data", { weapon: equipedWeapon });
        }

    });


    socket.on("unequip_armour_btn_data", () => {
        const userData = allUsersData.find((userData) => userData.userId === socket.id);

        if (userData) {


            userData.equipedArmour = armour;

            let equipedArmour = userData.equipedArmour;
            io.to(socket.id).emit("equipedArmour_data", { armour: equipedArmour });
        }

    });


    socket.on("on_inventory_item_btn_data", (data) => {
        const userData = allUsersData.find((userData) => userData.userId === socket.id);

        if (userData) {

            userData.equipedWeapon = data;
            let equipedWeapon = userData.equipedWeapon;
            io.to(socket.id).emit("equipedWeapon_data", equipedWeapon);
        }

    });



    socket.on("on_inventory_armour_item_btn_data", (data) => {
        const userData = allUsersData.find((userData) => userData.userId === socket.id);

        if (userData) {

            userData.equipedArmour = data;
            let equipedArmour = userData.equipedArmour;
            io.to(socket.id).emit("equipedArmour_data", equipedArmour);
        }

    });



    socket.on("default_equipment", () => {

        const userData = allUsersData.find((userData) => userData.userId === socket.id);

        if (userData) {

            userData.equipedWeapon = weapon;

            let equipedWeapon = userData.equipedWeapon;
            io.to(socket.id).emit("default_equipment", { weapon: equipedWeapon });
        }


    });



    socket.on("default_armour_equipment", () => {

        const userData = allUsersData.find((userData) => userData.userId === socket.id);

        if (userData) {


            userData.equipedArmour = armour;

            let equipedArmour = userData.equipedArmour;
            io.to(socket.id).emit("default_armour_equipment", { armour: equipedArmour });
        }



    })

    socket.on("on_inventory_item_btn_delete_data", (data) => {
        const userData = allUsersData.find((userData) => userData.userId === socket.id);

        if (userData) {
            userData.itemsInSlot = userData.itemsInSlot.filter((itemSlot) => itemSlot.slotId !== data.weapon.slotId);


            let inventoryData = userData.itemsInSlot.filter((item) => !item.slotId.startsWith("idArmour"));
            userData.numberOfSlots -= 1;


            io.to(socket.id).emit("inventory_items_data", inventoryData);


            if (userData.equipedWeapon && userData.equipedWeapon.weapon) {
                if (userData.equipedWeapon.weapon.slotId === data.weapon.slotId) {
                    userData.equipedWeapon = weapon;
                    let equipedWeapon = userData.equipedWeapon;
                    io.to(socket.id).emit("default_equipment", { weapon: equipedWeapon });
                }
            }
        }
    });




    socket.on("on_inventory_armour_item_btn_delete_data", (data) => {
        const userData = allUsersData.find((userData) => userData.userId === socket.id);

        if (userData) {
            userData.itemsInSlot = userData.itemsInSlot.filter((itemSlot) => itemSlot.slotId !== data.armour.slotId);


            let inventoryData = userData.itemsInSlot.filter((item) => !item.slotId.startsWith("idWeapon"));
            userData.numberOfSlots -= 1;




            io.to(socket.id).emit("inventory_armour_items_data", inventoryData);


            if (userData.equipedArmour && userData.equipedArmour.armour) {
                if (userData.equipedArmour.armour.slotId === data.armour.slotId) {
                    userData.equipedArmour = armour;
                    let equipedArmour = userData.equipedArmour;
                    io.to(socket.id).emit("default_armour_equipment", { armour: equipedArmour });
                }
            }
        }
    });





    socket.on("user_data", (data) => {

        const user = {
            userId: socket.id,
            userName: data.userName,
            userImage: data.userImage,
            userMoney: 4000,
            userHp: 100,
            userGold: 0,
            itemsInSlot: [],
            equipedWeapon: {},
            equipedArmour: {},
            numberOfSlots: 0,
            weaponTaken: true,
            armourTaken: true,
        };

        allUsersData.push(user);
        selectedImages.push(data.userImage);



        const userData = allUsersData.find((userData) => userData.userId === socket.id);


        if (userData) {
            io.to(socket.id).emit("user_data", userData);


            // const connectedUsers = allUsersData.filter((connectedUser) => connectedUser.userId !== socket.id);


            socket.emit("connected_users", allUsersData);
            socket.broadcast.emit("connected_users", allUsersData);

        }


    });








});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});