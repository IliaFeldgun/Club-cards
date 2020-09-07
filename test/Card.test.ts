import Card from '../src/card_engine/models/Card'
import { Suit } from '../src/card_engine/enums/Suit'
import { AceHighRank } from '../src/card_engine/enums/Rank'

describe('Testing card model', () => {
    test('Testing card creation', () => {
        const card = new Card(Suit.CLUB, AceHighRank.ACE)
        const cardMock = {
            suit: Suit.CLUB,
            rank: AceHighRank.ACE
        }
        expect(card).toMatchObject(cardMock)
    })
})