export const registerSettings = function () {

  game.settings.register("acks", "initiative", {
    name: game.i18n.localize("ACKS.Setting.RerollInitiative"),
    hint: game.i18n.localize("ACKS.Setting.RerollInitiativeHint"),
    default: "reset",
    scope: "world",
    type: String,
    config: true,
    choices: {
      keep: "ACKS.Setting.InitiativeKeep",
      reset: "ACKS.Setting.InitiativeReset",
      reroll: "ACKS.Setting.InitiativeReroll",
    }
  });

  game.settings.register("acks", "ascendingAC", {
    name: game.i18n.localize("ACKS.Setting.AscendingAC"),
    hint: game.i18n.localize("ACKS.Setting.AscendingACHint"),
    default: true,
    scope: "world",
    type: Boolean,
    config: false,
    onChange: _ => window.location.reload()
  });

  game.settings.register("acks", "encumbranceOption", {
    name: game.i18n.localize("ACKS.Setting.Encumbrance"),
    hint: game.i18n.localize("ACKS.Setting.EncumbranceHint"),
    default: "detailed",
    scope: "world",
    type: String,
    config: true,
    choices: {
      detailed: "ACKS.Setting.EncumbranceDetailed",
      complete: "ACKS.Setting.EncumbranceComplete",
    },
    onChange: _ => window.location.reload()
  });

  game.settings.register("acks", "morale", {
    name: game.i18n.localize("ACKS.Setting.Morale"),
    hint: game.i18n.localize("ACKS.Setting.MoraleHint"),
    default: true,
    scope: "world",
    type: Boolean,
    config: true,
  });

  game.settings.register("acks", "removeMagicBonus", {
    name: game.i18n.localize("ACKS.Setting.RemoveMagicBonus"),
    hint: game.i18n.localize("ACKS.Setting.RemoveMagicBonusHint"),
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    onChange: _ => window.location.reload()
  });

  game.settings.register("acks", "exploding20s", {
    name: game.i18n.localize("ACKS.Setting.Explode20"),
    hint: game.i18n.localize("ACKS.Setting.Explode20Hint"),
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    onChange: _ => window.location.reload()
  });

  game.settings.register("acks", "bhr", {
    name: game.i18n.localize("ACKS.Setting.BHR"),
    hint: game.i18n.localize("ACKS.Setting.BHRHint"),
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    onChange: _ => window.location.reload()
  });

  game.settings.register("acks", "actn", {
    name: game.i18n.localize("ACKS.Setting.ACTN"),
    hint: game.i18n.localize("ACKS.Setting.ACTNHint"),
    default: false,
    scope: "world",
    type: Boolean,
    config: true,
    onChange: _ => window.location.reload()
  });

  game.settings.register("acks", "actnv", {
    name: game.i18n.localize("ACKS.Setting.ACTNV"),
    hint: game.i18n.localize("ACKS.Setting.ACTNVHint"),
    default: 18,
    scope: "world",
    type: Number,
    config: true,
    onChange: _ => window.location.reload()
  });

  game.settings.register("acks", "actnm", {
    name: game.i18n.localize("ACKS.Setting.ACTNM"),
    hint: game.i18n.localize("ACKS.Setting.ACTNMHint"),
    default: 4,
    scope: "world",
    type: Number,
    config: true,
    onChange: _ => window.location.reload()
  });
}