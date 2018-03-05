
  import {JsonProperty} from "json-typescript-mapper";

   class Schedule {
     @JsonProperty('time')
    time: string;
     @JsonProperty('days')
    days: string[];

     constructor() {
       this.time = void 0;
       this.days = void 0;
     }
  }

  class Rating {
    @JsonProperty('average')
    average?: number;

    constructor() {
      this.average = void 0;
    }
  }

  class Country {
    @JsonProperty('name')
    name: string;
    @JsonProperty('code')
    code: string;
    @JsonProperty('timezone')
    timezone: string;

    constructor() {
      this.name = void 0;
      this.code = void 0;
      this.timezone = void 0;
    }
  }

  class Network {
    @JsonProperty('id')
    id: number;
    @JsonProperty('name')
    name: string;
    @JsonProperty({clazz: Country, name : 'country'})
    country: Country;

    constructor() {
      this.id = void 0;
      this.name = void 0;
      this.country = void 0;
    }
  }

  class Externals {
    @JsonProperty('tvrage')
    tvrage?: number;
    @JsonProperty('thetvdb')
    thetvdb: number;
    @JsonProperty('imdb')
    imdb: string;

    constructor() {
      this.tvrage = void 0;
      this.thetvdb = void 0;
      this.imdb = void 0;
    }

  }

  class Image {
    @JsonProperty('medium')
    medium: string;
    @JsonProperty('original')
    original: string;

    constructor() {
      this.medium = void 0;
      this.original = void 0;
    }
  }

  class Self {
    @JsonProperty('href')
    href: string;

    constructor() {
      this.href = void 0 ;
    }
  }

  class Previousepisode {
    @JsonProperty('href')
    href: string;

    constructor() {
      this.href = void 0 ;
    }
  }

  class Nextepisode {
    @JsonProperty('href')
    href: string;

    constructor() {
      this.href = void 0 ;
    }
  }

  class Links {
    @JsonProperty({clazz: Self, name: 'self'})
    self: Self;
    @JsonProperty({clazz: Previousepisode, name: 'previousepisode'})
    previousepisode: Previousepisode;
    @JsonProperty({clazz: Nextepisode, name: 'nextepisode'})
    nextepisode: Nextepisode;

    constructor() {
      this.self = void 0;
      this.previousepisode = void 0;
      this.nextepisode = void 0;
    }
  }

   class Show {
     @JsonProperty('id')
    id: number;
     @JsonProperty('url')
    url: string;
     @JsonProperty('name')
    name: string;
     @JsonProperty('type')
    type: string;
     @JsonProperty('language')
    language: string;
     @JsonProperty('genres')
    genres: string[];
     @JsonProperty('status')
    status: string;
     @JsonProperty('runtime')
    runtime: number;
     @JsonProperty('premiered')
    premiered: string;
     @JsonProperty({clazz: Schedule, name: 'schedule'})
    schedule: Schedule;
     @JsonProperty({clazz: Rating, name: 'rating'})
    rating: Rating;
     @JsonProperty('weight')
    weight: number;
     @JsonProperty({clazz: Network, name: 'network'})
    network: Network;
     @JsonProperty('webChannel')
    webChannel?: any;
     @JsonProperty({clazz: Externals, name: 'externals'})
    externals: Externals;
     @JsonProperty({clazz: Image, name : 'image'})
    image: Image;
     @JsonProperty('summary')
    summary: string;
     @JsonProperty('updated')
    updated: number;
     @JsonProperty({clazz: Links, name : '_links'})
    _links: Links;

     constructor() {
       this.id = void 0;
       this.name =  void 0;
       this.url = void 0;
       this.type = void 0;
       this.genres = void 0;
       this.language = void 0;
       this.status = void 0;
       this.runtime = void 0;
       this.premiered = void 0;
       this.schedule = void 0;
       this.rating = void 0;
       this.weight = void 0;
       this.network = void 0;
       this.webChannel = void 0;
       this.externals = void 0;
       this.image = void 0;
       this.summary = void 0;
       this.updated = void 0;
       this._links = void 0;

     }
  }

  export class Object {
    @JsonProperty('score')
    score: number;
    @JsonProperty({clazz: Show, name: 'show'})
    show: Show;

    constructor() {
      this.score = void 0;
      this.show = void 0;
    }
  }











