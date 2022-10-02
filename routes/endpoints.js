module.exports = {
    path: '/endpoints',
    code: `
$send[200;json;{
"home": 'Daimon API',
"creator": "Cyberghxst#2683",
"soporte": "https://discord.gg/vmxz3nFxd6",
"base URL": "https://api.daimon-bot.ga",
"requests": "$getVar[requestCount]"
"rutas": [{
"anime":[
{
"SFW":[
"/anime/sfw/angry",
"/anime/sfw/baka",
"/anime/sfw/bite",
"/anime/sfw/blush",
"/anime/sfw/cry",
"/anime/sfw/dance",
"/anime/sfw/deredere",
"/anime/sfw/happy",
"/anime/sfw/hug",
"/anime/sfw/kiss",
"/anime/sfw/pat",
"/anime/sfw/punch",
"/anime/sfw/slap",
"/anime/sfw/sleep",
"/anime/sfw/smug"
],
"NSFW": [
"/anime/nsfw/anal",
"/anime/nsfw/ass",
"/anime/nsfw/bdsm",
"/anime/nsfw/blowjob",
"/anime/nsfw/cum",
"/anime/nsfw/doujin",
"/anime/nsfw/feet",
"/anime/nsfw/femdom",
"/anime/nsfw/foxgirl",
"/anime/nsfw/fuck",
"/anime/nsfw/gifs",
"/anime/nsfw/glasses",
"/anime/nsfw/hentai",
"/anime/nsfw/maid",
"/anime/nsfw/masturbation",
"/anime/nsfw/orgy",
"/anime/nsfw/panties",
"/anime/nsfw/pussy",
"/anime/nsfw/school",
"/anime/nsfw/succubus",
"/anime/nsfw/suck",
"/anime/nsfw/tentacles",
"/anime/nsfw/thighs",
"/anime/nsfw/ugly",
"/anime/nsfw/uniform",
"/anime/nsfw/yuri",
"/anime/nsfw/zettai"
]
}
],
"canvas":[
"/canvas/acosador"
"/canvas/gay",
"/canvas/gun",
"/canvas/wanted"
],
"fun":[
"/fun/fumo",
"/fun/meme",
"/fun/memev2",
"/fun/owoify",
"/fun/video"
],
"imagegen":[
"/imagegen/biden",
"/imagegen/eject",
"/imagegen/leaderboard",
"/imagegen/profilecardv1",
"/imagegen/servercard",
"/imagegen/stonks",
"/imagegen/tweet",
"/imagegen/welcomecardv1",
"/imagegen/welcomecardv2",
"/imagegen/wide"
],
"util":[
"/util/invite",
"/util/translate"
]
}]
}]
`
}