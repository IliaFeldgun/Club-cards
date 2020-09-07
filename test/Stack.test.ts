import Card from '../src/card_engine/models/Card'
import Stack from '../src/card_engine/models/Stack'
import { Suit } from '../src/card_engine/enums/Suit'
import { AceHighRank, AceLowRank } from '../src/card_engine/enums/Rank'

describe('Testing Stack Model', () => {
    test('Testing Stack creation', () => {
        const stack = new Stack([
            new Card(Suit.CLUB, AceHighRank.ACE),
            new Card(Suit.DIAMOND, AceHighRank.FOUR)
        ])

        const stackMock = {
            cards: [
                new Card(Suit.CLUB, AceHighRank.ACE),
                new Card(Suit.DIAMOND, AceHighRank.FOUR)
            ]
        }

        expect(stack).toMatchObject(stackMock)
    })
})