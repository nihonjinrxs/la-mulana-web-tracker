const fields = [
    '../fields/SRFC.png',
    '../fields/GUID.png',
    '../fields/ILSN.png',
    '../fields/MAUS.png',
    '../fields/GRYD.png',
    '../fields/SUN.png',
    '../fields/MOON.png',
    '../fields/SPRG.png',
    '../fields/GDSS.png',
    '../fields/INFR.png',
    '../fields/RUIN.png',
    '../fields/EXTN.png',
    '../fields/BRTH.png',
    '../fields/TWIN.png',
    '../fields/ENDL.png',
    '../fields/DMNS.png',
    '../fields/MOM.png',
    '../fields/MOM+.png',
    '../fields/HELL.png',
]
window.trackerChecks = [
    { key: "whip", steps: ["../sprites/whip1.png", "../sprites/whip2.png", "../sprites/whip3.png"], type: "step", title: "Whip" },
    { key: "knife", image: "../sprites/knife.png", type: "toggle", title: "Knife" },
    { key: "ksword", image: "../sprites/ksword.png", type: "toggle", title: "Key Sword" },
    { key: "axe", image: "../sprites/axe.png", type: "toggle", title: "Axe" },
    { key: "katana", image: "../sprites/katana.png", type: "toggle", title: "Katana" },
    { key: "shuriken", image: "../sprites/shuriken.png", type: "toggle", title: "Shuriken" },
    { key: "rshuriken", image: "../sprites/rshuriken.png", type: "toggle", title: "Rolling Shuriken" },
    { key: "espear", image: "../sprites/earthspear.png", type: "toggle", title: "Earth Spear" },
    { key: "flaregun", image: "../sprites/flaregun.png", type: "toggle", title: "Flare Gun" },
    { key: "bomb", image: "../sprites/bomb.png", type: "toggle", title: "Bomb" },
    { key: "chakram", image: "../sprites/chakram.png", type: "toggle", title: "Chakram" },
    { key: "caltrops", image: "../sprites/caltrops.png", type: "toggle", title: "Caltrops" },
    { key: "pistol", image: "../sprites/pistol.png", type: "toggle", title: "Pistol" },
    { key: "shield", steps: ["../sprites/buckler.png", "../sprites/silvershield.png", "../sprites/ashield.png"], type: "step", title: "Shield" },
    { key: "handscan", image: "../sprites/handscan.png", type: "toggle", title: "Hand Scanner" },
    { key: "djedpillar", image: "../sprites/djed.png", type: "toggle", title: "Djed Pillar" },
    { key: "minidoll", image: "../sprites/minidoll.png", type: "toggle", title: "Mini Doll" },
    { key: "megatama", image: "../sprites/megatama.png", type: "toggle", title: "Jade Magatama" },
    { key: "soulcog", image: "../sprites/soulcog.png", type: "toggle", title: "Cog of the Soul" },
    { key: "timelamp", image: "../sprites/timelamp.png", type: "toggle", title: "Lamp of Time" },
    { key: "pochette", image: "../sprites/pochettekey.png", type: "toggle", title: "Pochette Key" },
    { key: "dragonbone", image: "../sprites/dragonbone.png", type: "toggle", title: "Dragon Bone" },
    { key: "cskull", image: "../sprites/cskull.png", type: "toggle", title: "Crystal Skull" },
    { key: "vessel", steps: ["../sprites/vessel.png", "../sprites/medicine.png"], type: "step", title: "Vessel" },
    { key: "pepper", image: "../sprites/pepper.png", type: "toggle", title: "Pepper" },
    { key: "wmstatue", image: "../sprites/wmstatue.png", type: "toggle", title: "Woman Statue/Maternity Statue" },
    { key: "eternitykey", image: "../sprites/eternitykey.png", type: "toggle", title: "Key of Eternity" },
    { key: "sstaff", image: "../sprites/sstaff.png", type: "toggle", title: "Serpent Staff" },
    { key: "mtalisman", steps: ["../sprites/diary.png", "../sprites/talisman.png", "../sprites/mtalisman.png"], type: "step", title: "Mulana Talisman" },
    { key: "superx2", image: "../sprites/superx2.png", type: "toggle", title: "Moble Super X2" },
    { key: "shrinechecks", image: "../sprites/shrine.png", title: "Remove Walls from Shrine of the Mother" },
    { key: "shrinemap", image: "../sprites/map.png", type: "toggle", title: "Map (Shrine of the Mother)" },
    { key: "glove", image: "../sprites/glove.png", type: "toggle", title: "Glove" },
    { key: "grail", image: "../sprites/grail.png", type: "toggle", title: "Holy Grail" },
    { key: "isispendant", image: "../sprites/isipendant.png", type: "toggle", title: "Isis' Pendant" },
    { key: "crucifix", image: "../sprites/crucifix.png", type: "toggle", title: "Crucifix" },
    { key: "helmet", image: "../sprites/helmet.png", type: "toggle", title: "Helmet" },
    { key: "grappleclaw", image: "../sprites/grappleclaw.png", type: "toggle", title: "Grapple Claw" },
    { key: "bmirror", image: "../sprites/bmirror.png", type: "toggle", title: "Bronze Mirror" },
    { key: "trutheye", image: "../sprites/trutheye.png", type: "toggle", title: "Eye of Truth" },
    { key: "scalesphere", image: "../sprites/scalesphere.png", type: "toggle", title: "Scalesphere" },
    { key: "ring", image: "../sprites/ring.png", type: "toggle", title: "Ring" },
    { key: "gauntlet", image: "../sprites/gauntlet.png", type: "toggle", title: "Gauntlet" },
    { key: "anchor", steps: ["../sprites/treasures.png", "../sprites/anchor.png", "../sprites/anchor_treasures.png"], type: "step", title: "Treasures/Anchor" },
    { key: "plane", image: "../sprites/plane.png", type: "toggle", title: "Golden Plane" },
    { key: "ocarina", image: "../sprites/ocarina.png", type: "toggle", title: "Philospher's Ocarina" },
    { key: "feather", image: "../sprites/feather.png", type: "toggle", title: "Feather" },
    { key: "bookdead", image: "../sprites/bookdead.png", type: "toggle", title: "Book of the Dead" },
    { key: "fclothes", image: "../sprites/fclothes.png", type: "toggle", title: "Fairy Clothes" },
    { key: "scriptures", image: "../sprites/scriptures.png", type: "toggle", title: "Scriptures" },
    { key: "hboots", image: "../sprites/hboots.png", type: "toggle", title: "Hermes' Boots" },
    { key: "edenfruit", image: "../sprites/edenfruit.png", type: "toggle", title: "Fruit of Eden" },
    { key: "twinstatue", image: "../sprites/twinstatue.png", type: "toggle", title: "Twin Statue" },
    { key: "bracelet", image: "../sprites/bracelet.png", type: "toggle", title: "Bracelet" },
    { key: "perfume", image: "../sprites/perfume.png", type: "toggle", title: "Perfume" },
    { key: "spaulder", image: "../sprites/spaulder.png", type: "toggle", title: "Spaulder" },
    { key: "dimenkey", image: "../sprites/dimenkey.png", type: "toggle", title: "Dimensional Key" },
    { key: "icecape", image: "../sprites/icecape.png", type: "toggle", title: "Ice Cape" },
    { key: "reader", image: "../sprites/reader.png", type: "toggle", title: "reader.exe" },
    { key: "yagomap", image: "../sprites/yagomap.png", type: "toggle", title: "yagomap.exe" },
    { key: "yagostr", image: "../sprites/yagostr.png", type: "toggle", title: "yagostr.exe" },
    { key: "torude", image: "../sprites/torude.png", type: "toggle", title: "torude.exe" },
    { key: "mantra", image: "../sprites/mantra.png", type: "toggle", title: "mantra.exe" },
    { key: "mekuri", image: "../sprites/mekuri.png", type: "toggle", title: "mekuri.exe" },
    { key: "miracle", image: "../sprites/miracle.png", type: "toggle", title: "miracle.exe" },
    { key: "mirai", image: "../sprites/mirai.png", type: "toggle", title: "mirai.exe" },
    { key: "keyfairy", image: "../sprites/keyfairy.png", title: "Consistent Key Fairy Access" },
    { key: "sealorigin", image: "../sprites/sealorigin.png", type: "toggle", title: "Origin Seal" },
    { key: "sealbirth", image: "../sprites/sealbirth.png", type: "toggle", title: "Birth Seal" },
    { key: "seallife", image: "../sprites/seallife.png", type: "toggle", title: "Life Seal" },
    { key: "sealdeath", image: "../sprites/sealdeath.png", type: "toggle", title: "Death Seal" },
    { key: "map", image: "../sprites/map.png", type: "counter", maxVal: 17, title: "Maps" },
    { key: "ankh", image: "../sprites/ankh.png", type: "counter", maxVal: 9, title: "Ankh Jewels" },
    { key: "orb", image: "../sprites/orb.png", type: "counter", maxVal: 10, title: "Sacred Orbs" },
    { key: "amphisbaena", image: "../sprites/Amphi.png", type: "toggle", title: "Amphisbaena" },
    { key: "sakit", image: "../sprites/Sakit.png", type: "toggle", title: "Sakit" },
    { key: "ellmac", image: "../sprites/ellmac.png", type: "toggle", title: "Ellmac" },
    { key: "bahamut", image: "../sprites/bahamut.png", type: "toggle", title: "Bahamut" },
    { key: "viy", image: "../sprites/Viy.png", type: "toggle", title: "Viy" },
    { key: "palenque", image: "../sprites/Palenque.png", type: "toggle", title: "Palenque" },
    { key: "baphomet", image: "../sprites/baphomet.png", type: "toggle", title: "Baphomet" },
    { key: "tiamat", image: "../sprites/tiamat.png", type: "toggle", title: "Tiamat" },
    { key: "cursed1", steps: fields, type: "step", title: "Cursed Chest 1" },
    { key: "cursed2", steps: fields, type: "step", title: "Cursed Chest 2" },
    { key: "cursed3", steps: fields, type: "step", title: "Cursed Chest 3" },
    { key: "cursed4", steps: fields, type: "step", title: "Cursed Chest 4" },
];

function initializeTrackerChecksFromLocalstorage() {
    trackerChecks.forEach((check) => {
        switch(check.type) {
            case "toggle":
                trackerStorage.getOrInitializeToggleItem(check.key, check.image);
                break;
            case "step":
                trackerStorage.getOrInitializeStepItem(check.key, check.steps);
                break;
            case "counter":
                trackerStorage.getOrInitializeCounter(check.key, check.image, check.maxVal);
                break;
        }
    });
}

function resetTrackerChecks() {
    trackerChecks.forEach((check) => {
        trackerStorage.reset(check.key, check.type);
    });
}

const keyFairyChecks = [
    "isispendant",
    "miracle",
    "mekuri",
];
const shrineChecksItems = [
    "dragonbone",
    "yagomap",
    "yagostr",
    "shrinemap",
];
const shrineChecksBosses = [
    "amphisbaena",
    "sakit",
    "ellmac",
    "bahamut",
    "viy",
    "palenque",
    "baphomet",
    "tiamat",
];
const shrineChecks = shrineChecksItems.concat(shrineChecksBosses);

function keyFairyAccess(){
    return allTogglesTrue(keyFairyChecks);
}

function shrineAccess(){
    return allTogglesTrue(shrineChecksBosses) || allTogglesTrue(shrineChecksItems);
}

function allTogglesTrue(toggleKeys){
    return toggleKeys.every(
        key => trackerStorage.getItem(key, "toggle").value
    );
}
