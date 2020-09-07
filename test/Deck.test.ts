import Deck from '../src/card_engine/models/Deck'
import { Card, Suit, AceHighRank, AceLowRank } from '../src'

describe('Testing Deck Model', () => {
    test('Testing Deck creation', () => {
        const deckAceHigh = new Deck("AceHigh", true)
        const deckAceLow = new Deck("AceLow", false)
        const deckNoLow = new Deck("NoLows", true)

        expect(Deck.indexOf(deckAceHigh, new Card(Suit.DIAMOND, AceHighRank.ACE))).not.toBe(-1)
        expect(Deck.indexOf(deckAceLow, new Card(Suit.CLUB, AceLowRank.ACE))).not.toBe(-1)
        expect(Deck.indexOf(deckNoLow, new Card(Suit.SPADE, AceHighRank.FIVE))).toBe(-1)

        expect(Deck.indexOf(deckAceLow, new Card(Suit.HEART, AceHighRank.JOKER))).toBe(-1)
        expect(Deck.indexOf(deckAceHigh, new Card(Suit.HEART, AceHighRank.JOKER))).not.toBe(-1)
        expect(Deck.indexOf(deckNoLow, new Card(Suit.SPADE, AceHighRank.JOKER))).not.toBe(-1)
    })
})