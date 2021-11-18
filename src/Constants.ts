/**
 * Generic Game Constants
 *
 * Constants for specific mechanics or features will NOT be here.
 */
export const CONSTANTS: {
  VersionString: string;
  VersionNumber: number;
  _idleSpeed: number;
  MaxSkillLevel: number;
  MilliPerCycle: number;
  CorpFactionRepRequirement: number;
  BaseFocusBonus: number;
  BaseCostFor1GBOfRamHome: number;
  BaseCostFor1GBOfRamServer: number;
  TravelCost: number;
  BaseFavorToDonate: number;
  DonateMoneyToRepDivisor: number;
  FactionReputationToFavorBase: number;
  FactionReputationToFavorMult: number;
  CompanyReputationToFavorBase: number;
  CompanyReputationToFavorMult: number;
  NeuroFluxGovernorLevelMult: number;
  NumNetscriptPorts: number;
  HomeComputerMaxRam: number;
  ServerBaseGrowthRate: number;
  ServerMaxGrowthRate: number;
  ServerFortifyAmount: number;
  ServerWeakenAmount: number;
  PurchasedServerLimit: number;
  PurchasedServerMaxRam: number;
  MultipleAugMultiplier: number;
  TorRouterCost: number;
  InfiltrationBribeBaseAmount: number;
  InfiltrationMoneyValue: number;
  InfiltrationRepValue: number;
  InfiltrationExpPow: number;
  WSEAccountCost: number;
  TIXAPICost: number;
  MarketData4SCost: number;
  MarketDataTixApi4SCost: number;
  StockMarketCommission: number;
  HospitalCostPerHp: number;
  IntelligenceCrimeWeight: number;
  IntelligenceInfiltrationWeight: number;
  IntelligenceCrimeBaseExpGain: number;
  IntelligenceProgramBaseExpGain: number;
  IntelligenceTerminalHackBaseExpGain: number;
  IntelligenceSingFnBaseExpGain: number;
  IntelligenceClassBaseExpGain: number;
  MillisecondsPer20Hours: number;
  GameCyclesPer20Hours: number;
  MillisecondsPer10Hours: number;
  GameCyclesPer10Hours: number;
  MillisecondsPer8Hours: number;
  GameCyclesPer8Hours: number;
  MillisecondsPer4Hours: number;
  GameCyclesPer4Hours: number;
  MillisecondsPer2Hours: number;
  GameCyclesPer2Hours: number;
  MillisecondsPerHour: number;
  GameCyclesPerHour: number;
  MillisecondsPerHalfHour: number;
  GameCyclesPerHalfHour: number;
  MillisecondsPerQuarterHour: number;
  GameCyclesPerQuarterHour: number;
  MillisecondsPerFiveMinutes: number;
  GameCyclesPerFiveMinutes: number;
  FactionWorkHacking: string;
  FactionWorkField: string;
  FactionWorkSecurity: string;
  WorkTypeCompany: string;
  WorkTypeCompanyPartTime: string;
  WorkTypeFaction: string;
  WorkTypeCreateProgram: string;
  WorkTypeStudyClass: string;
  WorkTypeCrime: string;
  ClassStudyComputerScience: string;
  ClassDataStructures: string;
  ClassNetworks: string;
  ClassAlgorithms: string;
  ClassManagement: string;
  ClassLeadership: string;
  ClassGymStrength: string;
  ClassGymDefense: string;
  ClassGymDexterity: string;
  ClassGymAgility: string;
  ClassDataStructuresBaseCost: number;
  ClassNetworksBaseCost: number;
  ClassAlgorithmsBaseCost: number;
  ClassManagementBaseCost: number;
  ClassLeadershipBaseCost: number;
  ClassGymBaseCost: number;
  ClassStudyComputerScienceBaseExp: number;
  ClassDataStructuresBaseExp: number;
  ClassNetworksBaseExp: number;
  ClassAlgorithmsBaseExp: number;
  ClassManagementBaseExp: number;
  ClassLeadershipBaseExp: number;
  CrimeShoplift: string;
  CrimeRobStore: string;
  CrimeMug: string;
  CrimeLarceny: string;
  CrimeDrugs: string;
  CrimeBondForgery: string;
  CrimeTraffickArms: string;
  CrimeHomicide: string;
  CrimeGrandTheftAuto: string;
  CrimeKidnap: string;
  CrimeAssassination: string;
  CrimeHeist: string;
  CodingContractBaseFactionRepGain: number;
  CodingContractBaseCompanyRepGain: number;
  CodingContractBaseMoneyGain: number;
  TotalNumBitNodes: number;
  LatestUpdate: string;
} = {
  VersionString: "1.0.1",
  VersionNumber: 4,

  // Speed (in ms) at which the main loop is updated
  _idleSpeed: 200,

  /** Max level for any skill, assuming no multipliers. Determined by max numerical value in javascript for experience
   * and the skill level formula in Player.js. Note that all this means it that when experience hits MAX_INT, then
   * the player will have this level assuming no multipliers. Multipliers can cause skills to go above this.
   */
  MaxSkillLevel: 975,

  // Milliseconds per game cycle
  MilliPerCycle: 200,

  // How much reputation is needed to join a megacorporation's faction
  CorpFactionRepRequirement: 200e3,

  // Base RAM costs
  BaseCostFor1GBOfRamHome: 32000,
  BaseCostFor1GBOfRamServer: 55000, //1 GB of RAM

  // Cost to travel to another city
  TravelCost: 200e3,

  // Faction and Company favor-related things
  BaseFavorToDonate: 150,
  DonateMoneyToRepDivisor: 1e6,
  FactionReputationToFavorBase: 500,
  FactionReputationToFavorMult: 1.02,
  CompanyReputationToFavorBase: 500,
  CompanyReputationToFavorMult: 1.02,

  // NeuroFlux Governor Augmentation cost multiplier
  NeuroFluxGovernorLevelMult: 1.14,

  NumNetscriptPorts: 20,

  // Server-related constants
  HomeComputerMaxRam: 1073741824, // 2 ^ 30
  ServerBaseGrowthRate: 1.03, // Unadjusted Growth rate
  ServerMaxGrowthRate: 1.0035, // Maximum possible growth rate (max rate accounting for server security)
  ServerFortifyAmount: 0.002, // Amount by which server's security increases when its hacked/grown
  ServerWeakenAmount: 0.05, // Amount by which server's security decreases when weakened

  PurchasedServerLimit: 25,
  PurchasedServerMaxRam: 1048576, // 2^20

  // Augmentation Constants
  MultipleAugMultiplier: 1.9,

  // TOR Router
  TorRouterCost: 200e3,

  // Infiltration
  InfiltrationBribeBaseAmount: 100e3, //Amount per clearance level
  InfiltrationMoneyValue: 5e3, //Convert "secret" value to money
  InfiltrationRepValue: 1.4, //Convert "secret" value to faction reputation
  InfiltrationExpPow: 0.8,

  // Stock market
  WSEAccountCost: 200e6,
  TIXAPICost: 5e9,
  MarketData4SCost: 1e9,
  MarketDataTixApi4SCost: 25e9,
  StockMarketCommission: 100e3,

  // Hospital/Health
  HospitalCostPerHp: 100e3,

  // Intelligence-related constants
  IntelligenceCrimeWeight: 0.025, // Weight for how much int affects crime success rates
  IntelligenceInfiltrationWeight: 0.1, // Weight for how much int affects infiltration success rates
  IntelligenceCrimeBaseExpGain: 0.05,
  IntelligenceProgramBaseExpGain: 0.1, // Program required hack level divided by this to determine int exp gain
  IntelligenceTerminalHackBaseExpGain: 200, // Hacking exp divided by this to determine int exp gain
  IntelligenceSingFnBaseExpGain: 1.5,
  IntelligenceClassBaseExpGain: 0.01,

  // Time-related constants
  MillisecondsPer20Hours: 72000000,
  GameCyclesPer20Hours: 72000000 / 200,

  MillisecondsPer10Hours: 36000000,
  GameCyclesPer10Hours: 36000000 / 200,

  MillisecondsPer8Hours: 28800000,
  GameCyclesPer8Hours: 28800000 / 200,

  MillisecondsPer4Hours: 14400000,
  GameCyclesPer4Hours: 14400000 / 200,

  MillisecondsPer2Hours: 7200000,
  GameCyclesPer2Hours: 7200000 / 200,

  MillisecondsPerHour: 3600000,
  GameCyclesPerHour: 3600000 / 200,

  MillisecondsPerHalfHour: 1800000,
  GameCyclesPerHalfHour: 1800000 / 200,

  MillisecondsPerQuarterHour: 900000,
  GameCyclesPerQuarterHour: 900000 / 200,

  MillisecondsPerFiveMinutes: 300000,
  GameCyclesPerFiveMinutes: 300000 / 200,

  // Player Work & Action
  BaseFocusBonus: 0.8,
  FactionWorkHacking: "Faction Hacking Work",
  FactionWorkField: "Faction Field Work",
  FactionWorkSecurity: "Faction Security Work",

  WorkTypeCompany: "Working for Company",
  WorkTypeCompanyPartTime: "Working for Company part-time",
  WorkTypeFaction: "Working for Faction",
  WorkTypeCreateProgram: "Working on Create a Program",
  WorkTypeStudyClass: "Studying or Taking a class at university",
  WorkTypeCrime: "Committing a crime",

  ClassStudyComputerScience: "studying Computer Science",
  ClassDataStructures: "taking a Data Structures course",
  ClassNetworks: "taking a Networks course",
  ClassAlgorithms: "taking an Algorithms course",
  ClassManagement: "taking a Management course",
  ClassLeadership: "taking a Leadership course",
  ClassGymStrength: "training your strength at a gym",
  ClassGymDefense: "training your defense at a gym",
  ClassGymDexterity: "training your dexterity at a gym",
  ClassGymAgility: "training your agility at a gym",

  ClassDataStructuresBaseCost: 40,
  ClassNetworksBaseCost: 80,
  ClassAlgorithmsBaseCost: 320,
  ClassManagementBaseCost: 160,
  ClassLeadershipBaseCost: 320,
  ClassGymBaseCost: 120,

  ClassStudyComputerScienceBaseExp: 0.5,
  ClassDataStructuresBaseExp: 1,
  ClassNetworksBaseExp: 2,
  ClassAlgorithmsBaseExp: 4,
  ClassManagementBaseExp: 2,
  ClassLeadershipBaseExp: 4,

  CrimeShoplift: "shoplift",
  CrimeRobStore: "rob a store",
  CrimeMug: "mug someone",
  CrimeLarceny: "commit larceny",
  CrimeDrugs: "deal drugs",
  CrimeBondForgery: "forge corporate bonds",
  CrimeTraffickArms: "traffick illegal arms",
  CrimeHomicide: "commit homicide",
  CrimeGrandTheftAuto: "commit grand theft auto",
  CrimeKidnap: "kidnap someone for ransom",
  CrimeAssassination: "assassinate a high-profile target",
  CrimeHeist: "pull off the ultimate heist",

  // Coding Contract
  // TODO: Move this into Coding contract implementation?
  CodingContractBaseFactionRepGain: 2500,
  CodingContractBaseCompanyRepGain: 4000,
  CodingContractBaseMoneyGain: 75e6,

  // BitNode/Source-File related stuff
  TotalNumBitNodes: 24,

  LatestUpdate: `
    v1.0.1 - 2021-11-17 New documentation (hydroflame)
    --------------------------------------------------

    ** Documentation **

    * The new documentation for the netscript API is available at
      https://github.com/danielyxie/bitburner/blob/dev/markdown/bitburner.ns.md
      This documentation is used in-game to validate the code, in-editor to autocomplete, and
      for users to reference. This is a huge quality of life improvements for me.

    ** Reputation **

    * Fixed favor not affecting faction work reputation gain (Yeah, I know right?)

    ** Hacknet **

    * Servers are now considerd "purchasedByPlayers"

    ** Script Editor **

    * solarized themes now work.

    ** Corporation ** 

    * Dividends are now much more taxed.
    * The 2 upgrades that reduced taxes are now much stronger.

    ** Misc. **

    * Starting / Stopping scripts on hashnet servers immediately updates their hash rate (instead of on the next tick)
    * Hacknet has tooltip showing what the result of the upgrade would be.
    * Augmentations page displayes current price multiplier as well as explains the mechanic.
    * Terminal now is 25x stronger.
    * Tail boxes use pre-wrap for it's lines.
    * Tail boxes allow you to rerun dead scripts.
    * Tail boxes can no longer open the same one twice.
    * Terminal now autocompletes through aliases.
    * Make alter reality harder.
    * Fix bladeburner cancelling actions when manually starting anything with Simulacrum.
    * Buying hash upgrade to increase uni class or gym training will apply to current class.
    * Internally the game no longer uses the decimal library.
    * Fix an issue where 'download *' would generate weird windows files.
    * Timestamps can be set to any format in the options.
    * Fix typo in documentation share popup.
    * Remove bunch of debug log.
    * Fix typo in corporation handbook literature.
    * Fix typo in documentation
    * Fix duplicate SF -1 exploit. (Yeah, an exploit of exploits, now were meta)
    * Fix offline hacking earning being attributed to hacknet.
    * nerf noodle bar
`,
};
