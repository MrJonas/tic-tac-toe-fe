import React from 'react';
import { mount } from 'enzyme';
import Board, { BoardProps } from './board';


const getDefaultProps = (): BoardProps => ({
    nextPlayer: 'X',
    board: [...new Array(9).fill('')],
    gameEnded: false,
    isDraw: false,
    winner: '',
    winingCodition: undefined,
    updateBoard: jest.fn(),
    startNewGame: jest.fn(),
    loadGame: jest.fn()
})

describe('Board component', () => {

    it('Should load data on component mount', () => {
       const props = getDefaultProps()
       expect(props.loadGame).toBeCalledTimes(0);
       const component = mount(<Board {...props} />);
       expect(props.loadGame).toBeCalledTimes(1);
    });

    it('Should start new game on button click', () => {
        const props = getDefaultProps()
        const component = mount(<Board {...props} />);
        expect(props.startNewGame).toBeCalledTimes(0);
        component.find('button').simulate('click');
        expect(props.startNewGame).toBeCalledTimes(1);
    });
    
    it('Shoud select field for next player on filed click', () => {
        const props = getDefaultProps()
        const component = mount(<Board {...props} />);
        expect(props.updateBoard).toBeCalledTimes(0);
        component.find('.field').at(1).simulate('click');
        expect(props.updateBoard).toBeCalledTimes(1);
        expect(props.updateBoard).toHaveBeenCalledWith(props.nextPlayer, 1);
    });

});
