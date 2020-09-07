import Card from '../src/card_engine/models/Card'
import { Color } from '../src/card_engine/enums/Color'
import { Suit } from '../src/card_engine/enums/Suit'
import { AceHighRank, AceLowRank } from '../src/card_engine/enums/Rank'

describe('Testing card model', () => {
    test('Testing card creation', () => {
        const card = new Card(Suit.CLUB, AceHighRank.ACE)
        const cardMock = {
            suit: Suit.CLUB,
            rank: AceHighRank.ACE
        }
        expect(card).toMatchObject(cardMock)
    })

    test('Testing isCard check', () => {
        const card = new Card(Suit.HEART, AceHighRank.QUEEN)
        const card2 = { suit: Suit.DIAMOND, rank: AceHighRank.EIGHT }
        const badCard = { suit: Suit.SPADE, rank: AceHighRank.FIVE, bad: "okay" }
        const badCard2 = { suit: 200, rank: AceHighRank.FOUR }
        const badCard3 = { suit: Suit.CLUB, rank: -12 }
        const badCard4 = { suit: -11, rank: AceHighRank.SIX }
        const badCard5 = { suit: Suit.HEART, rank: 500 }
        expect(Card.isCard(card)).toBe(true)
        expect(Card.isCard(card2)).toBe(true)
        expect(Card.isCard(badCard)).toBe(false)
        expect(Card.isCard(badCard2)).toBe(false)
        expect(Card.isCard(badCard3)).toBe(false)
        expect(Card.isCard(badCard4)).toBe(false)
        expect(Card.isCard(badCard5)).toBe(false)
    })

    test('Testing equals check', () => {
        const card = new Card(Suit.DIAMOND, AceHighRank.KING)
        const cardAgain = { suit: Suit.DIAMOND, rank: AceHighRank.KING }
        const cardSameSuit = new Card(Suit.DIAMOND, AceHighRank.JACK)
        const cardSameRank = new Card(Suit.SPADE, AceHighRank.KING)
        const cardOther = new Card(Suit.CLUB, AceHighRank.JOKER)

        expect(Card.equals(card, cardAgain)).toBe(true)
        expect(Card.equals(card, cardSameSuit)).toBe(false)
        expect(Card.equals(card, cardSameRank)).toBe(false)
        expect(Card.equals(card, cardOther)).toBe(false)
    })

    test('Testing get color check', () => {
        const cardDiamond = new Card(Suit.DIAMOND, AceLowRank.KING)
        const cardHeart = new Card(Suit.HEART, AceLowRank.JOKER)
        const cardClub = new Card(Suit.CLUB, AceLowRank.TEN)
        const cardSpade = new Card(Suit.SPADE, AceLowRank.FIVE)

        expect(Card.getColor(cardDiamond)).toBe(Color.RED)
        expect(Card.getColor(cardHeart)).toBe(Color.RED)
        expect(Card.getColor(cardClub)).toBe(Color.BLACK)
        expect(Card.getColor(cardSpade)).toBe(Color.BLACK)
    })
})