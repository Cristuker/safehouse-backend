const MatchStatusEnum = {
  OPEN: "open",
  CLOSE: "close",
  PLAYING: "playing",
  FINISHED: "finished",
} as const;

type MatchStatusType = (typeof MatchStatusEnum)[keyof typeof MatchStatusEnum];

export { MatchStatusType, MatchStatusEnum };
