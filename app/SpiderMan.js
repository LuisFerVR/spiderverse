class SpiderMan{
    constructor(name,age,actor,movies,studio){
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.movies = movies;
        this.studio = studio;
    }

    getInfo(actor, studio){
        return  `Hey, i'm ${this.actor} from ${this.studio}`
    }
}

module.exports = SpiderMan;