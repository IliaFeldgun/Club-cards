import { Rank } from "../enums/Rank"
import { Suit } from "../enums/Suit"

export default interface ICard {
    suit: Suit
    rank: Rank
}