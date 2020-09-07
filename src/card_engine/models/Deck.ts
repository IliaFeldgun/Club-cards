import Stack from "./Stack"
import Card from "./Card"
import IStack from "../interfaces/Stack"
import IDeck from "../interfaces/Deck"
import { Suit } from "../enums/Suit"
import { AceHighRank, AceLowRank, NoLowsRank } from "../enums/Rank"

export default class Deck extends Stack implements IDeck {
    jokers: boolean = false

    constructor(ranking: Rankings, jokers: boolean) {
        super([])
        Deck.generateDeck(this, ranking, jokers)
        Stack.shuffle(this)
    }

    private static generateDeck(
        stack: IStack,
        ranking: Rankings,
        jokers: boolean
    ): void {

        const [minRank, maxRank] = Deck.getRankingMinMax(ranking)

        for (let suit = Suit.HEART; suit <= Suit.SPADE; suit++) {
            for (let rank = minRank; rank <= maxRank; rank++) {
                Stack.push(stack, new Card(suit, rank))
            }
        }

        if (jokers) {
            Stack.push(stack, new Card(Suit.HEART, AceHighRank.JOKER))
            Stack.push(stack, new Card(Suit.SPADE, AceHighRank.JOKER))
        }
    }

    private static getRankingMinMax(ranking: Rankings) {
        switch (ranking) {
            case "AceHigh": {
                return [AceHighRank.TWO, AceHighRank.ACE]
            }
            case "AceLow": {
                return [AceLowRank.ACE, AceLowRank.KING]
            }
            case "NoLows": {
                return [NoLowsRank.SIX, NoLowsRank.ACE]
            }
        }
    }
}

type Rankings = "AceHigh" | "AceLow" | "NoLows"