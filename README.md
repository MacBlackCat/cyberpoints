<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/fGPcybt"><img src="https://image.ibb.co/mDgm3U/cpoints.png" width="546" alt="cyberpoints" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/fGPcybt"><img src="https://discordapp.com/api/guilds/483516135485210624/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/cyberpoints"><img src="https://img.shields.io/npm/v/cyberpoints.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/cyberpoints"><img src="https://img.shields.io/npm/dt/cyberpoints.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.codacy.com/project/kendinikertenkelebek/cyberpoints/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kendinikertenkelebek/cyberpoints&amp;utm_campaign=Badge_Grade_Dashboard"><img src="https://api.codacy.com/project/badge/Grade/58c302f9bf2e4bc0be8915a4579423fa"/></a>
    <a href="https://github.com/kendinikertenkelebek/cyberpoints/issues"><img src="https://img.shields.io/github/issues/kendinikertenkelebek/cyberpoints.svg" alt="cyberpoints issues"></a>
    <a href="https://david-dm.org/kendinikertenkelebek/cyberpoints"><img src="https://david-dm.org/kendinikertenkelebek/cyberpoints/status.svg?maxAge=3600" alt="Dependencies" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/cyberpoints/"><img src="https://nodei.co/npm/cyberpoints.png?downloads=true&downloadRank=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

# About

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

cyberpoints was developing for CyberEngine. And now, she is **open source**! cyberpoints will generate endpoint links for make an request. All validation process is done by **cyberpoints**.
If you're used correct values, returns an request link. otherwise returns 'undefined'. This method saves your request limits and time!

### Installation

_cyberpoints_ requires [Node.js](https://nodejs.org/dist/latest) latest version to run.

```sh
$ npm i cyberpoints -S
```

or

```sh
$ yarn add cyberpoints
```

### Usage

```js
// how can i use it?
const { Wow } = require('cyberpoints').Blizzard
const wow = new Wow(configs)
console.log(wow.community.guild.profile())
console.log(wow.community.guild.members())
console.log(wow.community.guild.news())

// how can i access all blizzard endpoints?
const { All } = require('cyberpoints').Blizzard
const blizzard = new All(configs)
console.log(blizzard.wow.data.keystone.leaderboard())
console.log(blizzard.sc2.community.ledder())
console.log(blizzard.diablo.community.skill())
console.log(blizzard.outh2.user())
```

### Technology

_cyberpoints_ uses a number of open source projects to work properly:

- [Node.JS] - _cyberpoints_ uses this powerful programming language.
- [VScode] - We're highly recommending this awesome code editor.

And of course _cyberpoints_ itself is open source with a [public repository][repository] on _GitHub_.

### Plugins

_cyberpoints_ is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin      | README                                    |
| ----------- | ----------------------------------------- |
| @types/node | [plugins/definitelytyped/README.md][pldt] |
| Eslint      | [plugins/eslint/README.md][plge]          |

### Semantic Versioning

We're using [SemVer][semver] for this project.

### Development

Want to contribute? Great!

_cyberpoints_ uses eslint for stable developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

```sh
$ git clone <url>
$ cd <cloned_folder_name>
$ npm i -d
$ npm test
```

### Our Contributors

- Yankı Küçük - [Twitter][yk]

And you can see also all contributors [here][contributors].

[twitter]: https://developer.twitter.com/en/docs/basics/twitter-ids.html
[node.js]: http://nodejs.org
[vscode]: https://code.visualstudio.com/insiders/
[repository]: https://github.com/kendinikertenkelebek/cyberpoints
[pldt]: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md
[plge]: https://github.com/eslint/eslint/blob/master/README.md
[semver]: https://semver.org
[yk]: https://twitter.com/seviyorumstop
[contributors]: https://github.com/kendinikertenkelebek/cyberpoints/graphs/contributors

## License

Aphace 2.0
