
class Note {
    constructor(key, description = "", unicode, icon, beatcount = 1) {
        this.key = key;
        this.description = description;
        this.unicode = unicode;
        this.icon = icon;
        this.beatcount = beatcount;
    }
    toIcon(loc = "assets/") {
        return this.icon ? `<img src=\"${loc}${this.icon}\" alt=\"icon\">` : this.key;
    }
}