import ICard from "../interfaces/Card"
import { Suit } from "../enums/Suit"
import { AceLowRank, Rank } from "../enums/Rank"
import { Color } from "../enums/Color"

export default class Card implements ICard {
    suit: Suit
    rank: Rank

    constructor(suit: Suit, rank: Rank) {
        this.suit = suit
        this.rank = rank
    }
    static isCard(card: ICard): boolean {
        const hasTwoProps = Object.keys(card).length === 2
        const rankOkay = card.rank >= AceLowRank.ACE && card.rank <= AceLowRank.JOKER
        const suitOkay = card.suit >= Suit.HEART && card.suit <= Suit.SPADE
        return hasTwoProps && rankOkay && suitOkay
    }
    static equals(card1: ICard, card2: ICard): boolean {
        return (card1.rank === card2.rank && card1.suit === card2.suit)
    }
    static getColor(card: ICard): Color {
        if (card.suit === Suit.DIAMOND || card.suit === Suit.HEART) {
            return Color.RED
        }
        else {
            return Color.BLACK
        }
    }
}