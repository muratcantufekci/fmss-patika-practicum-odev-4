import React from 'react'
import App from '../App'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import emojiList from '../emojiList.json'

describe("emoji app liste testleri", () => {
    let emojisList;

    beforeEach(() => {
        render(<App />);

        //emojilerin oldugu json dosyasindan 20 tanesinin kopyasi olusturulur
        emojisList = emojiList.slice(0, 10);
    });
    
    test("Emoji listesi render edilmeli", () => {

        //emojileri map ile gezilir
        emojisList.map((item) => {
            //dokumanda bu başlıkta emoji olup olmadığı kontro edilir
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    });
});