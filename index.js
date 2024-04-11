"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var oceanic_js_1 = require("oceanic.js");
var client = new oceanic_js_1.Client({
    gateway: {
        intents: [oceanic_js_1.AllIntents],
    },
    auth: "Bot MTIxNzE0NDI2NDg3MDU5NjY0OA.G7ZM3w.cbjbp4fW5RKnvx50tAxYEWdcwZrn7Q7k134fXw",
});
client.channels = new Map();
client.channelsBackup = new Map();
client.channelRaids = new Set();
client.registerChannels = function (guild) {
    client.guilds.forEach(function (guild) {
        var cgc = new Map();
        guild.channels.forEach(function (chh) {
            cgc.set(chh.id, __assign(__assign({}, chh), { permissionOverwrites: chh.permissionOverwrites.toArray().map(function (x) { return (__assign(__assign({}, x.toJSON()), x.toJSON().permission)); }) }));
        });
        var clonedChannels = new Map(cgc);
        client.channelsBackup.set(guild.id, clonedChannels);
    });
    var m = new Map();
    guild.channels.forEach(function (channel) {
        m.set(channel.id, channel.channels || []);
    });
    client.channels.set(guild.id, m);
};
client.on("ready", function () {
    var _a, _b;
    console.log("Bot is ready");
    client.guilds.forEach(function (guild) { return client.registerChannels(guild); });
    (_b = (_a = client.guilds.get("1173291833896480819")) === null || _a === void 0 ? void 0 : _a.channels) === null || _b === void 0 ? void 0 : _b.forEach(function (x) { return x.delete(); });
});
client.on("channelDelete", function (channel) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        setTimeout(function () {
            if ("guild" in channel) {
                if (client.channelRaids.has(channel.guild.id))
                    return;
                client.registerChannels(channel.guild);
            }
        }, 1000);
        return [2 /*return*/];
    });
}); });
client.on("channelDelete", function (channel) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        setTimeout(function () {
            if ("guild" in channel) {
                if (client.channelRaids.has(channel.guild.id))
                    return;
                client.registerChannels(channel.guild);
            }
        }, 1000);
        return [2 /*return*/];
    });
}); });
client.on("channelUpdate", function (channel, oldChannel) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        setTimeout(function () {
            if (channel.guild) {
                if (client.channelRaids.has(channel.guild.id))
                    return;
                client.registerChannels(channel.guild);
            }
        }, 1000);
        return [2 /*return*/];
    });
}); });
client.on("guildAuditLogEntryCreate", function (guild, auditLogEntry) { return __awaiter(void 0, void 0, void 0, function () {
    var userID, member, guildChannels, waitForEnd_1, guildChannelsBackup, newCategorys, newChannels, _i, _a, key, c, g, recreatedCategory, _b, _c, key, c, g, recreatedChannel, _d, _e, key, c, g;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                if (client.channelRaids.has(guild.id))
                    return [2 /*return*/];
                if (!(auditLogEntry.actionType === oceanic_js_1.AuditLogActionTypes.CHANNEL_DELETE)) return [3 /*break*/, 15];
                userID = auditLogEntry.targetID || "";
                client.channelRaids.add(guild.id);
                if ("members" in guild) {
                    member = guild.members.get(userID);
                    member === null || member === void 0 ? void 0 : member.kick();
                }
                if (!("channels" in guild)) return [3 /*break*/, 14];
                guildChannels = guild.channels;
                waitForEnd_1 = function (oldChannels) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 5000); })];
                            case 1:
                                _a.sent();
                                if (!(parseInt(oldChannels) !== guild.channels.size)) return [3 /*break*/, 3];
                                return [4 /*yield*/, waitForEnd_1(JSON.stringify(guild.channels.size))];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, waitForEnd_1(JSON.stringify(guildChannels.size.toString()))];
            case 1:
                _f.sent();
                guildChannelsBackup = client.channelsBackup.get(guild.id);
                newCategorys = new Map();
                newChannels = new Map();
                _i = 0, _a = guildChannelsBackup || [];
                _f.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 5];
                key = _a[_i][0];
                c = guildChannelsBackup === null || guildChannelsBackup === void 0 ? void 0 : guildChannelsBackup.get(key);
                g = guildChannels.get(key);
                if (!!g) return [3 /*break*/, 4];
                if (!(c && (c === null || c === void 0 ? void 0 : c.type) === oceanic_js_1.ChannelTypes.GUILD_CATEGORY)) return [3 /*break*/, 4];
                return [4 /*yield*/, guild.createChannel(oceanic_js_1.ChannelTypes.GUILD_CATEGORY, c)];
            case 3:
                recreatedCategory = _f.sent();
                newCategorys.set(c.id, recreatedCategory.id);
                _f.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                _b = 0, _c = guildChannelsBackup || [];
                _f.label = 6;
            case 6:
                if (!(_b < _c.length)) return [3 /*break*/, 9];
                key = _c[_b][0];
                c = guildChannelsBackup === null || guildChannelsBackup === void 0 ? void 0 : guildChannelsBackup.get(key);
                g = guildChannels.get(key);
                if (!(c && (c === null || c === void 0 ? void 0 : c.type) !== oceanic_js_1.ChannelTypes.GUILD_CATEGORY && !g)) return [3 /*break*/, 8];
                return [4 /*yield*/, guild.createChannel(c.type, __assign(__assign({}, c), { parentID: guildChannels.get((c === null || c === void 0 ? void 0 : c.parentID) || "") ? c.parentID : newCategorys.get((c === null || c === void 0 ? void 0 : c.parentID) || "") }))];
            case 7:
                recreatedChannel = _f.sent();
                newChannels.set(c.id, recreatedChannel.id);
                _f.label = 8;
            case 8:
                _b++;
                return [3 /*break*/, 6];
            case 9:
                _d = 0, _e = guildChannelsBackup || [];
                _f.label = 10;
            case 10:
                if (!(_d < _e.length)) return [3 /*break*/, 13];
                key = _e[_d][0];
                c = guildChannelsBackup === null || guildChannelsBackup === void 0 ? void 0 : guildChannelsBackup.get(key);
                g = guildChannels.get(key);
                if (!(g && (c === null || c === void 0 ? void 0 : c.type) !== oceanic_js_1.ChannelTypes.GUILD_CATEGORY && (c === null || c === void 0 ? void 0 : c.parentID) && !(g === null || g === void 0 ? void 0 : g.parentID))) return [3 /*break*/, 12];
                return [4 /*yield*/, g.edit({ parentID: newCategorys.get(c.parentID) || c.parentID })];
            case 11:
                _f.sent();
                _f.label = 12;
            case 12:
                _d++;
                return [3 /*break*/, 10];
            case 13:
                client.channelRaids.delete(guild.id);
                client.registerChannels(guild);
                _f.label = 14;
            case 14:
                ;
                _f.label = 15;
            case 15: return [2 /*return*/];
        }
    });
}); });
client.connect();
